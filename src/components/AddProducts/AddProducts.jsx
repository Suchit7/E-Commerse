import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import './AddProducts.css'
const AddProducts = () => {

  let h=useHistory();


  let pic= useRef();
    let brand= useRef();
    let desc= useRef();
    let discount= useRef();
    let mrp= useRef();
    let color= useRef();
    let fabric= useRef();
    let type= useRef();
    let rate= useRef();


    let handleSubmit= (e) =>{
      e.preventDeafault()

      // console.log(pic.current.value)

      let newProduct={
        productPic :      pic.current.value,
        brand :           brand.current.value,
        description :     desc.current.value,
        discountPrise :   discount.current.value,
        mrp :             mrp.current.value,
        color :           color.current.value,
        fabric :          fabric.current.value,
        productType :     type.current.value,
        usage:"",
        rating :          rate.current.value,
        size:[]
      }
      console.log(newProduct)
  // let inp1=document.getElementById('pic')
 // console.log(inp1.value)

 let genderOptions=document.getElementByName("gender")
 genderOptions.forEach((inp)=>{
   if(inp.checked===true){
     // console.log(object)
     newProduct.usage=inp.value;
   }
 })


  let sizeAvailable=[]
  let sizeOptions=document.getElementByName('size')
  sizeOptions.forEach((inp)=>{
    if(inp.checked===true){
      sizeAvailable.push(inp.value)
    }
  })
  newProduct.size=sizeAvailable;


    fetch('http://localhost:4000/products', { 
                                              method:'POST',
                                              headers:{'Content-Type' :'application/json' },
                                              body:JSON.stringify(newProduct)

                                             })    
    .then(()=>{
            alert('new product added');
            h.push('/user');
    })  




    }
  
  return (
    <div className="add-product">
      <h1>Add the product</h1>
      <hr />
       <form onSubmit={handleSubmit}>
        <label>Pictures</label>                       <input type="url" id='pic' ref={pic}/>
        <label>Brand</label>                          <input type="text" ref={brand} />
        <label>Description</label>                    <textarea cols="30" rows="10" ref={desc}></textarea>
        <label>Price after discount</label>           <input type="number" ref={discount}/>
        <label>MRP</label>                            <input type="number"  ref={mrp}/>
        <label>Color</label>                          <input type="text" ref={color}/>
        <label>Fabric</label>                         <input type="text" ref={fabric}/>
        <label>Product Type</label>                   <input type="text" ref={type}/>
        <label>Usage</label>                          <div>

                                                         <input type="radio" name="gender" value="Male"/> <label for="">Male</label>
                                                         <input type="radio" name="gender" value="Female"/> <label for="">Female</label>
                                                         <input type="radio" name="gender" value="Others"/> <label for="">Unisex</label>
                                                      </div>
                                                              
        <label for="">Rating</label>                            <input type="number" step="0.1" min="1" max="5" ref={rate}/>
        <label for="">Size</label>                              <div>
                                                                    <input type="checkBox" name="size" value="M"/> <label for="">M</label>
                                                                    <input type="checkBox" name="size" value="S"/> <label for="">S</label>
                                                                    <input type="checkBox" name="size" value="L"/> <label for="">L</label>
                                                                    <input type="checkBox" name="size" value="XL"/> <label for="">XL</label>
                                                                </div>

        <input type="submit" ></input>


      </form>
    </div>
  );
}
export default AddProducts;
