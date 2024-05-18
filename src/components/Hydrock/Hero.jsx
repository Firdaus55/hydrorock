import myImage from "../../assets/img/hero-2.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-950">
      <div className="min-h-full lg:flex lg:items-center lg:justify-center py-12 mt-8 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12  ">
          <div className="lg:col-span-5 lg:flex lg:items-center justify-end">
            <img
              className="mx-auto w-60 lg:w-96  lg:mx-0"
              src={myImage}
              alt=""
            />
          </div>
          <div className="lg:pe-0 pe-10 text-end lg:col-span-7 lg:py-24">
            <h1 className="text-white max-w-2xl mb-6 text-5xl font-bold tracking-tight leading-none xl:text-7xl ">
              HYDROROCK <br /> PRODUCT
            </h1>
            <button className="relative inline-flex items-center justify-center rounded-md p-2 bg-white text-blue-900 ring-1   hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset px-5">
              View Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
