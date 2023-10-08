import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const [form, setForm] = useState({})
    const [loginError, setLoginError] = useState('');
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
        const response = await fetch('http://localhost:8080/login',{
            method:'GET',
            
        });
        const data = await response.json(e)
        var i = 0
        while(data){
        if(data[i].email === form.email && data[i].password === form.password){
            window.alert("User Loged In Successfully");
            navigate('/');
            return
        }
        else{
            setLoginError('Invalid email or password');
        }i++}
        //console.log(data.email,data.password)
        //console.log(form.email,form.password)
    }

    return(
        <div className="container"> 
            <div className="row mb-4" style={{marginTop:60}}><div class="col-3"></div>
                <div className="col-6 p-4 shadow p-3 mb-5 bg-body rounded">
                <h1 class="text-center"><b>Sign In</b></h1>
                <h4><p class="text-center mt-4">Don't have an account? <a href="/Sign Up">Sign Up</a></p></h4>
                    <form onSubmit={handleSubmit}> 
                        <div class="form-group mt-4">
                            <label>Email</label>
                            <input type={"Text"} name="email" onChange={handleForm} class="form-control mt-2" placeholder="Enter email-address"/>
                        </div>
                        <div class="form-group mt-4">
                            <label>Password</label>
                            <input type={"password"} name="password" onChange={handleForm} class="form-control mt-2" placeholder="Enter password"/>
                        </div>
                        <div class="form-group mt-4" >
                            <input type={"checkbox"} defaultValue={null} name="remember" />
                            <label class="ms-2">Remember Me</label>
                        </div>
                        {loginError && <p class="text-danger">{loginError}</p>}
                        <div class="form-group mt-4">
                            <input type="submit" value={"Log In"} class="btn btn-primary form-control"/>
                        </div>
                    </form>

                    {/*<ul>
                        {users.map(user=><li key={user._id}>{user.email},{user.password}</li>)}
                    </ul>*/}

                </div><div class="col-3"></div>
            </div>
            <div class="row mb-4">
                <div class="col-5"><hr/></div>
                <div class="col-2 text-center">OR</div>
                <div class="col-5"><hr/></div>
            </div>
            <div class="row mb-4">
                <div class="col-4"></div>
                <div class="col-4 text-center">
                    <div class="row text-white" style={{backgroundColor:'#51A1FE'}}>
                        <div class="col-2 p-2">
                            <img src="img/google.png" height={50} width={50} alt="3" />
                        </div>
                        <div class="col-10 mt-3">
                            <h4><b>Continue with Google</b></h4>
                        </div>
                    </div>
                    <div class="row mt-3 text-white" style={{backgroundColor:'#0856B1'}}>
                        <div class="col-2 p-2">
                            <img src="img/facebook1.png" height={50} width={50} alt="3" />
                        </div>
                        <div class="col-10 mt-3">
                            <h4><b>Continue with Facebook</b></h4>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
           
            </div>
        </div>
    )
}

export default SignIn;