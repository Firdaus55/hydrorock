import myImage from "../../assets/img/about-us-2.png";

const Story = () => {
  return (
    <section>
      <div className="min-h-96 w-full flex items-center py-16 ">
        <div className="grid   gap-8 lg:grid-cols-12 bg-blue-900 ">
          <div className=" lg:col-span-5 lg:flex lg:items-center ">
            <img className="mx-auto  lg:mx-0" src={myImage} alt="" />
          </div>
          <div className="p-12 lg:col-span-7 my-auto w-full pe-20 ">
            <h1 className="font-bold text-white mb-2 lg:mb-8 text-xl lg:text-2xl">
              HYDROROCK STORY
            </h1>
            <p className=" font-light text-white lg:mb-8 md:text-lg lg:text-md">
              Hydrorock has been used widely in Singapore, the Middle East, and
              Europe. What differentiates Hydrorock is the unique material
              composition that makes it has excellent absorbency and the ability
              to hold water in it and then easily release it back to the ground
              when needed. Besides, because Its light weight means that even the
              largest blocks can be lifted and installed easily by one person.
              Lastly, Hydrorock is very strong and can withstand a load of 4
              tons persquare meter. We firmly believe that our products can
              offer comprehensive solutions customized to meet your company's
              unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
