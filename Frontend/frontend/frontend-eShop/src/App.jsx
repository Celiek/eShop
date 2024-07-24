import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Carousela from './components/Carousel/Carousel.jsx';
import Categories from './components/Categories/Categories.jsx';
import "bootstrap/dist/css/bootstrap.css";
import '@fontsource/poppins';
import "./App.css"
function App() {

  return (
    <>
      <Navbar />
      <div style={{ height: "180px" }}></div>
      <Categories />
      <div style={{ height: "180px" }}></div>
      <Carousela />
      <div style={{ height: "180px" }}></div>
      <Footer />
    </>
  );
}

export default App
