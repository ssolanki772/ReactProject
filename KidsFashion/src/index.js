import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
 
ReactDOM.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
,document.getElementById("root")
);