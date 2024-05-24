export default function About() {
  return (
    <div className=" container mx-auto">
      <h1 className="text-center mt-7 font-serif font-bold text-2xl">
        About Us{" "}
      </h1>

      <div className="grid grid-cols-2 mt-8 w-[600px] mx-auto gap-x-12  py-9 gap-y-9">
        <div>
          <img src="assets/images/2.png" alt="" />
          <p className="text-lg font-serif font-medium text-center ">
            Here are some things you
            <br /> should know regarding how <br /> we work
          </p>
        </div>

        <div>
          <img src="assets/images/3.png" alt="" />
          <p className="text-lg font-serif font-medium text-center ">
            Here are some things you
            <br /> should know regarding how <br /> we work
          </p>
        </div>
        {/* next */}

        <div>
          <img src="assets/images/2.png" alt="" />
          <p className="text-lg font-serif font-medium text-center ">
            Here are some things you
            <br /> should know regarding how <br /> we work
          </p>
        </div>

        <div>
          <img src="assets/images/3.png" alt="" />
          <p className="text-lg font-serif font-medium text-center ">
            Here are some things you
            <br /> should know regarding how <br /> we work
          </p>
        </div>

        <div>
          <img src="assets/images/3.png" alt="" />
          <p className="text-lg font-serif font-medium text-center ">
            Updated content <br /> Updated content <br /> we work
          </p>
        </div>

        {/* next */}
      </div>
    </div>
  );
}
