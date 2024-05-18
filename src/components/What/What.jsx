import myImage from "../../assets/img/what.png";

const What = () => {
  return (
    <section>
      <div className="min-h-96 flex items-center lg:py-16 lg:mb-0 mb-10 ">
        <div className="grid max-w-screen-xl px-4 lg:py-8 mx-auto gap-8 lg:grid-cols-12  ">
          <div className="mr-auto lg:col-span-7 mt-10 lg:mt-0">
            <h1 className="text-blue-900 max-w-2xl mb-4 text-xl font-bold tracking-tight leading-none md:text-5xl xl:text-4xl ">
              What is Hydrorock ?
            </h1>
            <p className=" max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Product from Holland which country with incredible water
              management. Hydrorock is an aquifer blocks could absorb 94% water
              of its cubic, it retains the water before release into the soil.
              Installed in underground and could build anything on top (depends
              on weight).
            </p>
          </div>
          <div className="lg:col-span-5  lg:flex lg:items-center justify-end">
            <img className="mx-auto w-80  lg:mx-0" src={myImage} alt="" />
          </div>
        </div>
      </div>

      <img src="../../../src/assets/img/img.png" alt="img" />
    </section>
  );
};

export default What;
