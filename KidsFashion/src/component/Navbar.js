import React from "react";

const Navbar = () => {
    return(
    <div class="container mt-2">
        <div class="row bg-#99CEFF " style={{backgroundColor:"#D9D9D9"}}>
            <center><h1 class="mt-4 mb-4"><b>KID'S FASHION</b></h1></center>
            <div class="mx-auto">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <form class="d-flex">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul class="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
                            <li class="nav-item">
                            <a class="btn btn-light rounded-pill" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item ms-4">
                            <a class="btn btn-light rounded-pill" aria-current="page" href="/shop collection">Shop Collection</a>
                            </li>
                            <li class="nav-item ms-4">
                            <a class="btn btn-light rounded-pill" aria-current="page" href="/our story">Our Story</a>
                            </li>
                            <li class="nav-item ms-4">
                            <a class="btn btn-light rounded-pill" aria-current="page" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mb-lg-0" >
                            <li class="nav-item">
                            <a href="/sign in" aria-current="page" class="text-black" style={{textDecoration:'none'}}><img src="img/icon_person.png" alt="person" style={{with:30,height:30}} /> Log In</a>
                            </li>
                            <li class="nav-item ms-4">
                            <a href="/" aria-current="page" class="text-black"><img src="img/icon_cart.png" alt="cart" style={{with:30,height:30}}/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    )
}
export default Navbar;