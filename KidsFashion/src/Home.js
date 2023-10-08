import React,{useEffect,useState} from "react";
import MySlider from "./component/slider";
import axios from "axios"
   
const Home = () => {
    
    const [products,setProducts] = useState("");
    useEffect(()=>{
        const fetchData = async ()=> {
            const data = await axios.get("http://localhost:8080/product")
            setProducts(data);
        };
        fetchData();
        });
    
    return(
        <div>
            <MySlider/>
            <center><b><h1>Home</h1></b></center>
            <div class="container">
                <div class="row">
                    {
                        products && products.data.slice(0,4).map(
                            (products) => (
                                <div class="col-sm-3 text-center">
                                <img src={products.img} alt="1" />
                                <p>{products.name}</p>
                                <h4><b>{products.price}</b></h4>
                                <button class="form-control btn btn-outline-success mt-2">Add to Cart</button>
                                </div>
                            )
                        )
                    }
                </div>
                <div class="text-center mt-5 mb-5">
                    <a class="btn btn-outline-primary btn-lg" href="/shop collection" ><b>SHOP ALL</b></a>
                </div>
            </div>
        </div>
    )
}

export default Home;