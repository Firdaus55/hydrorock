import myImage from "../../assets/img/hydrock-2.png";

const HydrockTwo = () => {
  return (
    <section>
      <div className="min-h-96 flex items-center lg:py-16 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12  ">
          <div className="mr-auto lg:col-span-7 mt-14 lg:mt-0 ">
            <h1 className="max-w-2xl font-bold text-blue-900 lg:mb-8 md:text-lg lg:text-2xl">
              Buffering and Drainage Blocks
            </h1>
            <p className=" max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              · Sub-surface Fed via gullies <br />
              · Channels - Water Inflow (Buffering) Water Outflow (Attenuating)
              Air inflow & Outflow (Breathing) <br />· Top Water Inflow System
              self-regulates attenuation through open pipe <br />
              · Bottom Water InFlow System surcharges via outlet restrictor
              (i.e. Hydrobrake)
              <br />· Water Inflow Rate (Buffering) 1,000L/hr per Channel Block
              <br />· Water Outflow Rate (Attenuation) 167L/hr per Channel Block
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-center justify-end">
            <img className="mx-auto w-96 lg:mx-0" src={myImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydrockTwo;
