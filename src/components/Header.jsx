import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

return(

<div className="container mx-auto ">


    <img id="img" className="float-end sm:hidden md:hidden lg:hidden " src="assets/images/humberg.png" onClick={()=>{

const nav =document.getElementById("nav");

if(nav.style.display==="block")
{
    nav.style.display="none"

}else{
    nav.style.display="block"
}


    }} alt="" />




<nav  className="flex justify-between mt-3 p-6">
<h1 className="font-serif text-3xl xs:text-sm">NORDIC ROSE</h1> 

<ul className=" gap-x-12 hidden  sm:flex   ">
    <Link to="/" > <li className="font-serif">BLOG</li></Link>
    <Link to="/about" > <li className="font-serif">ABOUT</li></Link>
    <Link to="/projects"> <li className="font-serif">PROJECTS</li></Link>
</ul>

<ul id="nav" className=" gap-x-12 block  sm:hidden  ">
    <Link to="/" > <li className="font-serif">BLOG</li></Link>
    <Link to="/about" > <li className="font-serif">ABOUT</li></Link>
    <Link to="/projects"> <li className="font-serif">PROJECTS</li></Link>
</ul>


</nav>
<hr />
</div>

)
}