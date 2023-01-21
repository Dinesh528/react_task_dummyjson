import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductSort = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState("rating");

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSortChange = event => {
        setSortBy(event.target.value);
    }

    const sortedProducts = products.sort((a, b) => {
        switch (sortBy) {
            case "rating":
                return b.rating - a.rating;
            case "discount":
                return b.discount - a.discount;
            case "price":
                return a.price - b.price;
            default:
                return b.rating - a.rating;
        }
    });

    return (
        <div>
            <h1>Products</h1>
            <div className="sort-by">
                <label>Sort by:</label>
                <select onChange={handleSortChange}>
                    <option value="rating">Rating</option>
                    <option value="discount">Discount</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className="container">
                <div className="row">
                    {sortedProducts.map(product => (
                        <div className="col-md-4" key={product.id}>
                            <div className="card">
                                <img className="card-img-top" src={product.image} alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">${product.price}</p>
                                    <p className="card-text">Rating: {product.rating}</p>
                                    <p className="card-text">Discount: {product.discount}%</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSort;
