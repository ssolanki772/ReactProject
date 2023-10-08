import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopCollection = () => {
    const [products,setProducts] = useState("");
    useEffect(()=>{
        const fetchData = async ()=> {
            const data = await axios.get("http://localhost:8080/product")
            setProducts(data);
        };
        fetchData();
        });

    return(
        <div class="mt-3">
            <center><h1>Shop Collection</h1></center>

            

<div class="container mt-4">
    <div class="row">
        <div class="col-3">
            <div class="row ms-1">
                <div class="col-12">
                    <h4>Filter by</h4>  
                </div>
            </div>
            <hr/>
            <div class="row ms-1">
                <div class="col-10">
                    <h5 >Collection</h5>     
                </div>

                

                <div class="col-2 dropdown">
                    <a class="text-dark" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration:'none'}}>
                        <b>+</b>
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">T shirts</a></li>
                        <li><a class="dropdown-item" href="#">Bodysuits</a></li>
                    </ul>
                    
                </div>
            </div>
            <hr/>
            <div class="row  ms-1">
                <div class="col-10">
                    <h5 >Price</h5>     
                </div>
                <div class="col-2">
                    <b><a class="text-dark" href="#" style={{textDecoration:'none'}}>+</a></b>
                </div>
            </div>
            <hr/>
            <div class="row ms-1">
                <div class="col-10">
                    <h5 >Color</h5>     
                </div>
                <div class="col-2">
                    <b><a class="text-dark" href="#" style={{textDecoration:'none'}}>+</a></b>
                </div>
            </div>
            <hr/>
            <div class="row ms-1">
                <div class="col-10">
                    <h5 >Size</h5>     
                </div>
                <div class="col-2">
                    <b><a class="text-dark" href="#" style={{textDecoration:'none'}}>+</a></b>
                </div>
            </div>
            <hr/>
        </div>
        <div class="col-9 mb-5">
            <div class="row text-center">
                {
                    products && products.data.map(
                        (products) => (
                            <div class="col-4 mb-1">
                            <img src={products.img} alt="1" />
                            <p >{products.name}</p>
                            <h4><b>{products.price}</b></h4>
                            <button class="form-control btn btn-outline-success mt-2">Add to Cart</button>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    </div>
</div>
</div>
        
    );
}

export default ShopCollection;