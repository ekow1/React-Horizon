import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App container mg bg-light ">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
