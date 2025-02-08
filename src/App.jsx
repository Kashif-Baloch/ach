import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ReadMore from "./pages/ReadMore";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more/:id" element={<ReadMore />} />
        <Route path="*" element={<ReadMore />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
