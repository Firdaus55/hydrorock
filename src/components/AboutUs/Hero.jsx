import myImage from "../../assets/img/about-us.png";

const Hero = () => {
  return (
    <section>
      <div className="min-h-96 lg:mt-10 flex items-center lg:py-16 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:grid-cols-12  ">
          <div className="mr-auto lg:col-span-7 mt-14 lg:mt-0 ">
            <h1 className="max-w-2xl font-bold text-black mb-4 md:text-lg lg:text-4xl">
              INDUSTRIAL LINKS <br /> INTERNATIONAL Pte. Ltd
            </h1>
            <p className=" max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-md">
              We are headquartered in Singapore with a strategically connecting
              network key locations in Asia, the Middle East and Europe.
              Industrial links International Pte Ltd was founded in 1996. At
              Industrial links International, we continuously strive to
              providing innovative solutions that meet our clients' needs. I'm
              very happy to share with you our latest offering: Hydrorock ,
              designed to reduce occurrence of flooding and providing solutions
              in the form of water disposal, filtering, retention as well as
              irrigation. Hydrorock is poised to revolutionize the way we manage
              water by increasing the volume infiltration into the soil. It can
              also be used as water storage and filtering as well as irrigation
              systems for reusable water.
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-center justify-end">
            <img className="mx-auto w-[450px] lg:mx-0" src={myImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
