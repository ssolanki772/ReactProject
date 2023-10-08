import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from "./Home";
import ShopCollection from "./ShopCollection";
import OurStory from "./OurStory";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Product from "./Product";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./component/footer";

const App = () => {
    return(
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop collection" element={<ShopCollection />} />
                <Route path="/our story" element={<OurStory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign in" element={<SignIn />} />
                <Route path="/sign up" element={<SignUp />} />
                <Route path="/product" element={<Product />} />
            </Routes>     
        <Footer/> 
        </>
    );
}

export default App;