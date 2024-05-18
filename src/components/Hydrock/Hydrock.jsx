import myImage from "../../assets/img/hydrock.png";

const Hydrock = () => {
  return (
    <section>
      <div className="min-h-96 flex items-center lg:py-16 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12  ">
          <div className=" lg:col-span-5 lg:flex lg:items-center ">
            <img className="mx-auto w-96 lg:mx-0" src={myImage} alt="" />
          </div>
          <div className=" lg:col-span-7 mt-14 lg:mt-0 ">
            <h1 className="max-w-2xl font-bold text-blue-900 lg:mb-8 md:text-lg lg:text-2xl">
              Drainage Blocks
            </h1>
            <p className=" max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              · Surface Fed via vertical percolation from above <br />
              · Sub-surface Fed via horizontal transferance from abutted
              gully-fed Blocks <br />· Water flowrate into 1m2 surface area:
              8,333L/hr (directly onto Blocks)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hydrock;
