import myImage from "../../assets/img/cil_diamond.png";

const Why = () => {
  return (
    <section className="py-16 min-h-96 ">
      <div className=" flex items-center justify-center ">
        <div className=" lg:mt-0 text-center ">
          <h1 className="text-blue-900 max-w-2xl mb-8  text-xl font-bold tracking-tight leading-none md:text-5xl xl:text-4xl">
            Why Hydrorock?
          </h1>
          <p className=" max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Hydrorock made by Natural Basalt Rock which incredibly strong and
            can hold 4000 kg/m2. Hydrorock is very light weight, easy dan only
            need 1-2 man to install. Hydrorock protected by geotextile membraine
            which can filter up to 50 mm dirt.
          </p>
        </div>
      </div>
      <div className="lg:flex justify-center items-center mt-5 ">
        <div className="flex items-center justify-between lg:gap-20 gap-5 px-auto">
          <div className="text-center pt-0">
            <img className="w-14 mx-auto" src={myImage} alt="" />
            <p className="lg:text-sm text-xs mt-3">RETENTION WATER</p>
          </div>
          <div className=" text-center">
            <img className="w-14 mx-auto" src={myImage} alt="" />
            <p className="lg:text-sm text-xs mt-3">INFILTRATION</p>
          </div>
          <div className=" text-center">
            <img className="w-14 mx-auto" src={myImage} alt="" />
            <p className="lg:text-sm text-xs mt-3">IRRIGATION PLANTS</p>
          </div>
          <div className=" text-center">
            <img className="w-14 mx-auto" src={myImage} alt="" />
            <p className="lg:text-sm text-xs mt-3">ATENUATION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
