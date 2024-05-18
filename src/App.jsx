import "./index.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Product from "./pages/Product";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Helmet>
        <title>HYDROROCK </title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
