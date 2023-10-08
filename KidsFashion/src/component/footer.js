import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const [form, setForm] = useState({})
    //const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const handleForm = (e)=>{
        console.log(e.target.value,e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const response = await fetch('http://localhost:8080/subscribe',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            } 
        })
        const data = await response.json()
        console.log(data)
        window.alert("User Subscribed ");
        navigate('/');
    }

    return(
    <div class="container mt-2 mb-2 ">
        <div class="row bg-#99CEFF " style={{backgroundColor:"#D9D9D9"}}>
            <center><h2 class="mt-4 mb-4"><b>KID'S FASHION</b></h2></center>
        
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4 text-center" >
                        <b><p class="mb-0">Home</p></b>
                        <b><p class="mb-0">Shop Collection</p></b>
                        <b><p class="mb-0">Our Story</p></b>
                        <b><p class="mb-0">Contact</p></b>
                    </div>
                    <div class="col-sm-4 mt-4" >
                        <div class="row">
                            <div class="col-sm-4 text-center" ><img src="img/facebook.png" width={25} height={25} alt="facebook" /></div>
                            <div class="col-sm-4 text-center" ><img src="img/pintrest.png" width={30} height={30} alt="pintrest" /></div>
                            <div class="col-sm-4 text-center" ><img src="img/instagram.png" width={30} height={30} alt="instagram" /></div>
                        </div> 
                    </div>
                    <div class="col-sm-4 text-center" >
                        <b><p class="mb-0">Shipping & Returns</p></b>
                        <b><p class="mb-0">Store Policy</p></b>
                        <b><p class="mb-0">Payment Methods</p></b>
                        <b><p class="mb-0">FAQ</p></b>
                    </div>
                </div>
            </div>
            <div class="text-center mt-2"><h3>Join Our Mailing List</h3></div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <form onSubmit={handleSubmit}>
                    <div class="input-group mt-2">
                    <input type="text" name="subEmail" onChange={handleForm} class="form-control form-control-lg" placeholder="Enter your email here*" />
                    <button class="btn btn-dark ms-1">Subscribe Now</button>
                    </div>
                    </form>
                </div>
            </div>
            <div class="text-center mt-4 mb-2">
                <p>© 2035 by Kid’s Fashion. Powered and secured by our team</p>
            </div>
        </div>
    </div>
    )
}

export default Footer