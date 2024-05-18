import Combain from "../components/Combain/Combain";
import Drainase from "../components/Drainase/Drainase";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import What from "../components/What/What";
import Why from "../components/Why/Why";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <What></What>
      <Why></Why>
      <Combain></Combain>
      <Drainase></Drainase>
      <Footer></Footer>
    </div>
  );
};

export default Home;
