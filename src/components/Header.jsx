import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

return(

<div className="container mx-auto ">

<nav className="flex justify-between mt-3 p-6">
<h1 className="font-serif text-3xl">NORDIC ROSE</h1> 
<ul className="flex gap-x-12 ">
    <Link to="/" > <li className="font-serif">BLOG</li></Link>
    <Link to="/about" > <li className="font-serif">ABOUT</li></Link>
    <Link to="/projects"> <li className="font-serif">PROJECTS</li></Link>
</ul>


</nav>
<hr />
</div>

)
}