import React from "react";
import myimage from "../Images/rita2.jpg"
// import '../App.css'
import { products } from './data'

function Home(){
    return (
        <div>
            <img className="myimage" src={myimage}  alt="" />
            <h1>This is my Home component!</h1>
        </div>
    )
}

export default Home