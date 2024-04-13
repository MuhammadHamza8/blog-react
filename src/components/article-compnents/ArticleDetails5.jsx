export default  function ArticleDetails5(){


    return(
    
    <div className="container grid grid-cols-1  justify-items-center ">


    <div className=" grid  justify-items-center gap-y-8 border-2 w-[50%]  ">
    <hr className="px-3 w-[100%] border-2 bg-black py-1 "  />
    
    <h1 className="font-serif font-bold text-3xl py-2">Sign up for the newsletter</h1>
    
    <p className="py-4">If you want relevant updates occasionally, sign up for the<br/> private newsletter. Your email is never shared. </p>
    
    <div className="py-5 flex " >
    
    <input className=" py-2 border-2 px-10" type="email" name="email" placeholder="ENTER YOUR EMAIL.." />
    <button className="bg-black text-white  px-8">Sign up </button>
    </div>
   
    </div>
    
    </div>)



} 