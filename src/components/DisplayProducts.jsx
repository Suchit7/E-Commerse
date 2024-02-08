import {Link} from 'react-router-dom'
const DisplayProducts = ( {products,title} ) => {   
    return ( 
      <div>
      <h1 className="title" > {title}</h1>
          <div className="products">
            {
                products.map((product)=>{
                    return(
                        <Link to={`ProductDetails${product.id}`} className="product">
                            <img className="imgdisplay" src={product.productPic} alt="No IMG found"/>
                            <h2>{product.brand}</h2>
                            <p>{product.description}</p>
                            <span>MRP:{product.discountPrise}</span>

                        </Link>
                    )
                })
            }
        </div>
      </div>
     );
}
 
export default DisplayProducts;