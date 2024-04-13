export default function ArticleDetails() {
  return (
    <div className='container mx-auto '>

        <h1 className='text-5xl text-center py-3 font-serif font-bold '> A few words about this blog <br/> platform, Gost, and how this <br/> site was made </h1>

        <p className='text-center p-3 font-serif'>Why Gost (& Figma ) instead of medium, wordpress <br/> or other option? </p>

        <img  className=' mx-auto'  src="assets/images/1.png" alt="img" />

        <hr/>

        <div className=' w-[800px] flex py-3 mx-auto gap-x-8' >

            
        <img src="assets/images/14.png" alt="img" />

            <div >
                
                <h2 className='font-bold'> MIKA MATIKAINEN </h2>
                <span>
                    Apr 15, 2020 - 4 min read 
                </span>


            </div>


            <div className='grid grid-cols-2  mx-auto gap-12 mr-4'>

            <div >
                <img src="assets/images/15.png" alt="" />


            </div>

            <div>
                <img src="assets/images/16.png" alt="" />


            </div>
            </div>

            {/* para */}

</div>

<div className='w-[800px] mx-auto py-3'>

<p className='text-justify font-serif py-2'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. 

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. 
</p>

<h1 className='font-bold  text-3xl py-2'>
Next on the pipeline
</h1>

<p className=' font-serif text-justify py-3'>
Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 

</p>

<img src="assets/images/17.png" alt="" />

<p className=' text-center font-serif py-2' >
Image caption centered this way and I’ll make this a bit longer <br/>  to indicate the amount of line-height. 

</p>


<p className=' font-serif text-justify py-3'>
Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 

</p>


<p className=' font-serif text-justify py-5'>
Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 

</p>

<p>A list looks like this: </p>
<ul className=' list-disc   py-3 ml-4'> 
<li>First item in the list </li>
<li> Second item in the list </li>
<li>dolre loram ipsum </li>
</ul>

<p className=' font-serif text-justify py-5'>
Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 

</p>

<p className=' font-serif text-justify py-5'>
Thanks for reading <br/>
Mika 


</p>

<div className=' grid grid-cols-2 gap-12  p-4  justify-items-center  '>
    <div className='flex gap-2 border-2 p-3'>
<img src="assets/images/15.png" alt="facebook" />
<span>Share on Facebook </span>
    </div>

    <div className='flex gap-2 border-2 p-3'>
<img src="assets/images/16.png" alt="facebook" />
<span>Share on Twitter  </span>
    </div>
</div>

<p className='font-serif'>Tags: products design, culture</p>

<hr class="h-px my-8 border-1 bg-black"/> 
        
</div>

</div>
  )
}
