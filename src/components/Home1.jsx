
import DisplayProducts from "./DisplayProducts";
import Navbar from "./Navbar";
import useFetch from "./useFetch";

function Home1() {

  let {data : products,pending,error}=useFetch("http://localhost:4000/products");
        // console.log(JSON.stringify(products))
        
        <Navbar/>
        return (
          <div>
            {error && <h1>{error}</h1>}
            {pending===true && <div className="loader"><h1>Loading...........</h1></div> }
            {products!=null && <DisplayProducts products={products} title="All Products" />} 
            {/* <DisplayProducts products={products.filter((product)=>{return product.color=== "BLACK"})}  title="All Products" /> */}
          </div>
  );
}

export default Home1;
      

  // let [products, setProducts] = useState(null);         //used this for coustam hook(useFetch)
  // let [pending,setPending] = useState(true);    // used for loading initially
  // let [error,setError] = useState(null); // used for handling errors when  SERVER is not loaded
  // useEffect(()=>{ 

  //   setTimeout(()=>{
  //   fetch("http://localhost:4000/products")
  //   // .then((response)=>{return(response.json())})     //normal response
  //   .then((response)=>{ 
  //     console.log(response);
  //     if(response.ok===true){
  //       return response.json()  
  //     }
  //     else{
  //      setError("not found please try different")
  //     //  throw Error("not found plese try different")
  //     }
  //   })
  //   .then((data)=>{setProducts(data) ; setPending(false)})

  //   .catch((err)=>{setError(err.message);setPending(false)});

  //   },3000)


  //  },[])