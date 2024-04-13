import React from "react";

export default function Footer()
{

return(

    <div className=" bg-black h-[370px]
    ">
<div className="container mx-auto">
<footer>
<ul className="grid grid-cols-5 py-6  justify-items-center">

    <li className="text-white">Graphic Design</li>
    <li className="text-white">Remote Work</li>
    <li className="text-white">UX Design </li>
    <li className="text-white">Creativity</li>
    <li className="text-white">Web Development</li>
    
</ul>

<h1 className="text-white font-serif font-medium text-center text-[60px] "> NORDIC ROSE </h1>

<p className="text-slate-300 text-center p-3 ">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

</p>

<ul className="flex gap-x-6 py-6  justify-center">

    <li className="text-white underline">Twiter</li>
    <li className="text-white underline">Linkedin</li>
    <li className="text-white underline">RSS</li>

</ul>

<p className="text-white text-center"> &#169; 2012-2024 Nordic Rose Co.<br/> All right Reserved. </p>

</footer>




</div>

</div>
    )

}
