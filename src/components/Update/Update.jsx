import React, { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import './Update.css'
import useFetch from '../useFetch';
const Update = () => {

    let {id}=useParams();
    let{data : product,pending,error}=useFetch(`http://localhost:4000/products/${id}`)

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

      let updateProduct={
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
    //   console.log(newProduct)
  // let inp1=document.getElementById('pic')
 // console.log(inp1.value)

 let genderOptions=document.getElementByName("gender")
 genderOptions.forEach((inp)=>{
   if(inp.checked===true){
     // console.log(object)
     updateProduct.usage=inp.value;
   }
 })


  let sizeAvailable=[]
  let sizeOptions=document.getElementByName('size')
  sizeOptions.forEach((inp)=>{
    if(inp.checked===true){
      sizeAvailable.push(inp.value)
    }
  })
  updateProduct.size=sizeAvailable;


    fetch(`http://localhost:4000/products/${id}`, { 
                                              method:'PUT',
                                              headers:{'Content-Type' :'application/json' , 'Accept-Type':'application/json'},
                                              body:JSON.stringify(updateProduct)

                                             })    
    .then(()=>{
            alert('product had been updated');
            h.push('/admin');
    })  




    }
  
  return (
    <div className="add-product">

       {error && <h1>{error}</h1>}
   {pending===true && <h1>{pending}</h1>}
      <h1>Update the product {id}</h1>
      <hr />
       {product && <form onSubmit={handleSubmit}>
        <label>Pictures</label>                       <input type="url" id='pic' ref={pic} defaultValue={product.productPic}/>
        <label>Brand</label>                          <input type="text" ref={brand} defaultValue={product.brand} />  
        <label>Description</label>                    <textarea cols="30" rows="10" ref={desc} defaultValue={product.description}></textarea>
        <label>Price after discount</label>           <input type="text" ref={discount} defaultValue={product.discountPrise}/>
        <label>MRP</label>                            <input type="text"  ref={mrp} defaultValue={product.mrp}/>
        <label>Color</label>                          <input type="text" ref={color} defaultValue={product.color}/>
        <label>Fabric</label>                         <input type="text" ref={fabric} defaultValue={product.fabric}/>
        <label>Product Type</label>                   <input type="text" ref={type} defaultValue={product.productType}/>
        <label>Usage</label>                          <div>

                                                         <input type="radio" name="gender" value="Male"/> <label for="">Male</label>
                                                         <input type="radio" name="gender" value="Female"/> <label for="">Female</label>
                                                         <input type="radio" name="gender" value="Others"/> <label for="">Unisex</label>
                                                      </div>
                                                              
        <label for="">Rating</label>                            <input type="number" step="0.1" min="1" max="5" ref={rate} defaultValue={product.rating}/>
        <label for="">Size</label>                              <div>
                                                                    <input type="checkBox" name="size" value="M"/> <label for="">M</label>
                                                                    <input type="checkBox" name="size" value="S"/> <label for="">S</label>
                                                                    <input type="checkBox" name="size" value="L"/> <label for="">L</label>
                                                                    <input type="checkBox" name="size" value="XL"/> <label for="">XL</label>
                                                                </div>

        <input type="submit" value="Update" ></input>


      </form>}
    </div>
  );
}
export default Update;
