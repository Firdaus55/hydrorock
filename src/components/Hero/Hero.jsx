import myImage from "../../assets/img/hero.png";

const Hero = () => {
  return (
    <div className="relative text-center mt-16 ">
      <img className="w-full" src={myImage} alt="img" />
      <div className="w-full absolute top-0 left-0 text-center ">
        <h2 className="lg:text-4xl mt-12 font-semibold text-white lg:my-44 text-center ">
          INDUSTIAL LINKS <br />
          INTERNATIONAL PTE.LTD
        </h2>
      </div>
    </div>
  );
};

export default Hero;
