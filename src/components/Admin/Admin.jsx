import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../useFetch'

function Admin() {

  let {data:products, pending, error}=useFetch("http://localhost:4000/products")

  let handleDelete=(id)=>{
    fetch(`http://localhost:4000/products/${id}`, {method:"DELETE"})
    .then(()=>{
      alert('product has been deleted');
      window.location.reload();
    })
  }
  
  return (
    <div>
        <h1>Admin page</h1>
        <hr />
   {error && <h1>{error}</h1>}
   {pending===true && <h1>Pending</h1>}
        {products && <table border='4px'>
            <thead>
              <th>Sl no</th>
              <th>Product</th>
              <th>Product type</th>
              <th colSpan='2'>Action</th>
            </thead>
            <tbody>
              {
                products.map((item,i)=>{
                  return(
                    <tr>
                      <td>{i+1}</td>
                      <td><img src={item.productPic} width='50px' height='50px' alt='no-iamge'/> </td>
                      <td>{item.productType}</td>
                      <td> 
                        <Link to={`/updateproduct${item.id}`}>
                          <button>Edit</button>
                        </Link>
                      </td>
                      <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                    </tr>

                  )
                })
              }
            </tbody>

        </table>


        }

        <Link to='/addnewproduct'>
          <button>Add new product</button>
        </Link>
      
    </div>
  )
}

export default Admin
