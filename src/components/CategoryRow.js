import React,{useState,useEffect} from 'react'
import "./Row.css";


const baseUrl = 'https://dummyjson.com/products/category';

function CategoryRow({title,fetchUrl}) {
    const [product,setProduct] = useState([]);
    
   
    useEffect(()=>{
        const getProducts = async () => {
            const response = await fetch(baseUrl + fetchUrl);
            const data = await response.json();
      
            return setProduct(data);
          };
          getProducts();
        }, []);

   
console.log(product.products)
   
    return (
        <div className="row">
           <h2>{title}</h2> 
           <div className="row__posters">
               {product && product.map(product =>{
                    <div className="col-md-3" key={product.id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={product.thumbnail}
                        alt={product.name}
                        style={{ width: "250px",height:"250px",objectFit:"contain" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                      </div>
                    </div>
                  </div>   
})}
           </div>
         
        </div>
    )
}

export default CategoryRow