import { Link } from "react-router-dom";

export default    function Articles () {

    return (
        <div className=" container mx-auto" >

            <h1 className="text-center mt-7 font-serif font-bold text-2xl" >All Articles </h1>

            <div className=" grid  xs:grid-cols-1     sm:grid-cols-2 mt-8 lg:w-[600px] mx-auto gap-x-12  py-9 gap-y-9 ">

            <Link to="/article">    
            
            <div>
                    <img src="assets/images/2.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>

                <Link to="/article">  
                <div>
                    <img src="assets/images/3.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>

                {/* next */}

                <Link to="/article">  
                <div >
                    <img src="assets/images/4.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>


                <Link to="/article">  
                <div>
                    <img src="assets/images/5.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>

                </Link>
                {/* next */}


         <Link to="/article">  
                <div>
                    <img src="assets/images/6.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>

                <Link to="/article"> 
                <div>
                    <img src="assets/images/7.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>
                {/* next */}
                <Link to="/article"> 

                <div>
                    <img src="assets/images/8.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>


                <Link to="/article">   
                <div>
                    <img src="assets/images/9.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>

                {/* next */}

                <Link to="/article">  

                <div>
                    <img src="assets/images/10.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>



                <Link to="/article">  
                <div>
                    <img src="assets/images/11.png" alt="" />
                    <p className="text-lg font-serif font-medium sm:text-center ">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>
                {/* next */}

                <Link to="/article">  
                <div>
                    <img src="assets/images/12.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>
                </Link>

                <Link to="/article"> 
                <div>
                    <img src="assets/images/13.png" alt="" />
                    <p className="text-lg font-serif font-medium  sm:text-center">
                        Here are some things you<br /> should know regarding how <br /> we work
                    </p>
                </div>



                </Link>

            </div>











        </div>



    )



}