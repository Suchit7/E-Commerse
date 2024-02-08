import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
// import useFetch from "./useFetch";
// import load from "../loader.png"

const ProductDetails = () => {

    let {id} = useParams();

    let {data :product , pending , error} = useFetch(`http://localhost:4000/products/${id}`)

    return ( <div>
        <h1> Product details page</h1>
        <hr />

        {error && <h1>{error}</h1>}
        {pending===true && <img className="loader" alt=""/>}
        {product && <div className="product">
                        <img src={product.productPic} alt=" not IMG found" />
                        <h2>{product.brand}</h2>
                        <p>{product.description}</p>
                        <span>{product.discountPrise}</span> <small>{product.mrp}</small>
                    </div>}        
    </div>  );
}

export default ProductDetails;
