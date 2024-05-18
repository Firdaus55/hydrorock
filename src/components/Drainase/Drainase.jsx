import myImage from "../../assets/img/drainase-1.png";
import myImage2 from "../../assets/img/drainase-2.png";
import myImage3 from "../../assets/img/drainase-3.png";

const Drainase = () => {
  return (
    <section className="py-16 min-h-96">
      <div className="lg:flex justify-center items-center lg:mt-5">
        <div className="lg:flex items-center justify-between gap-20 ">
          <img className="h-80 mx-auto" src={myImage} alt="" />
          <img className="h-80 mx-auto" src={myImage2} alt="" />
          <img className="h-80 mx-auto" src={myImage3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Drainase;
