import React, { useState, useEffect } from "react";
// import CategoryRow from "./CategoryRow";
// import requests from "./requests";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category,setCategory] = useState(data)
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.clone().json();

      return setData(data);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    console.log(data.products);
    const updatedList = data.products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const filterProductByBrand = (brand) => {
    const updatedList = data.products.filter((x) => x.brand === brand);
    setFilter(updatedList);
  };
  

  
  const ShowProducts = () => {
    return (
      <>
      
        <div className="col-md-2 d-flex flex-column">
          <h2 className="text-center">Categories</h2>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("fragrances")}
          >
            fragrances
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("smartphones")}
          >
            Smart Phones
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("laptops")}
          >
            Laptops
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("skincare")}
          >
            skincare
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("groceries")}
          >
            groceries
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("home-decoration")}
          >
            home-decoration
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("furniture")}
          >
            furniture
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("tops")}
          >
            tops
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("womens-dresses")}
          >
            womens-dresses
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("mens-shirts")}
          >
            mens-shirts
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("mens-shoes")}
          >
            mens-shoes
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("mens-watches")}
          >
            mens-watches
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("womens-watches")}
          >
            womens-watches
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("womens-bags")}
          >
            womens-bags
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("womans-jewellery")}
          >
            womens-jewellery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("sunglasses")}
          >
            sunglasses
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("automotive")}
          >
            automotive
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("motorcycle")}
          >
            motorcycle
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProduct("lighting")}
          >
            lighting
          </button>
        </div>
        
        {console.log(filter)}
        <div className="col-md-8 " style={{display:"flex",flexWrap:"wrap",paddingLeft:"20px",marginTop:"37px"}}>
        {filter &&
          filter?.map((product) => {
            return (
              <>
                <div className="col-md-3 p-2 " key={product.id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={product.thumbnail}
                      alt={product.name}
                      style={{ width: "100%",height:"250px",objectFit:"contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title.slice(0,15)}</h5>
                      <p className="card-text">{product.description.slice(0,15)}</p>
                      <p className="card-text">${product.price}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          </div>
          <div className="col-md-2 d-flex flex-column">
          <h2 className="text-center">By Brand</h2>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Apple")}
          >
            Apple
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Samsung")}
          >
Samsung          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("OPPO")}
          >
            OPPO
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Huawei")}
          >
            Huawei
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Dry Rose")}
          >
            Dry Rose
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Ratttan Outdoor")}
          >
Ratttan Outdoor          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Synthetic Leather")}
          >
            Synthetic Leather
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("TC Reusable")}
          >
            TC Reusable
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Ifei Home")}
          >
            Ifei Home
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("lightingbrilliance")}
          >
            lightingbrilliance
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("JIEPOLLY")}
          >
            JIEPOLLY
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("BRAVE BULL")}
          >
            BRAVE BULL
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Xiangle")}
          >
            Xiangle
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("shock absorber")}
          >
            shock absorber
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("LouisWill")}
          >
            LouisWill
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Designer Sun Glasses")}
          >
            Designer Sun Glasses
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Cuff Butterfly")}
          >
            Cuff Butterfly
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Fashion Jewellery")}
          >
            Fashion Jewellery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterProductByBrand("Darojay")}
          >
            Darojay
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="container">
     <div>
        <h2 className="text-center">Products are shown below</h2>
      </div>
    <div className="row">
        <div className="d-flex">
          
        {loading ? <Loading /> : <ShowProducts />}
        </div>
    </div>
      
    </div>
  );
}

export default Products;
