import React from "react";

const Contact = () => {
    return(
        <div class="container">
            <center class="mt-4" ><h1>Contact Us</h1></center>

            <div class="container-fluid mt-4">
                <div class="row">
                    <div class="col-sm-4 text-center" >
                        <h3 class="text-uppercase">VISIT US</h3>
                        <p class="h5 ">RK Prime, 150 fit ring</p>
                        <p class="h5 ">road, Rajkot - 360020</p>
                        <p class="h5 ">+91 9316344795</p>
                    </div>
                    <div class="col-sm-4 text-center" >
                        <h3 class="text-uppercase">OPENING HOURS</h3>
                        <p class="h5 ">Mon - Fri : 7am - 10pm</p>
                        <p class="h5 ">Saturday : 8am - 10pm</p>
                        <p class="h5 ">Sunday : 8am - 11pm</p>
                    </div>
                    <div class="col-sm-4 text-center" >
                        <h3 class="text-uppercase">CUSTOMER SERVICE</h3>
                        <p class="h5 ">1-800-000-000</p>
                        <p class="h5 ">+91 9998753284</p>
                        <p class="h5 ">kids@fashion.com</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4 mb-4">
                <h3 class="text-uppercase">FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</h3>
            <div class="ms-5 me-5 mt-4">
                <form>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <input type={Text} class="form-control" placeholder="First Name"/>
                        </div>
                        <div class="col-sm-6">
                            <input type={Text} class="form-control" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <div class="col-sm-12">
                            <input type={Text} class="form-control" placeholder="Email*"/>
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <div class="col-sm-12">
                            <input type={Text} class="form-control" placeholder="Subject"/>
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <div class="col-sm-12">
                            <input type={Text} class="form-control" placeholder="Message"/>
                        </div>
                    </div>
                    <div class="text-center mt-5 mb-5">
                        <a class="btn btn-dark btn-lg" href="/shop collection" ><b>Submit</b></a>
                    </div>
                </form>
                </div>
            </div>

        </div>
    );
}

export default Contact;