import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Toppage from "./assets/commpoent/Toppage";
import Navbar from "./assets/commpoent/Navbar.jsx";
import ImageSlider from "./assets/commpoent/ImageSlider.jsx";
import Categories from "./assets/commpoent/Categories.jsx";
import Fp from "./assets/commpoent/Fp.jsx";
import Footer from "./assets/commpoent/footer.jsx";
const App = () => {
  return (
    <>
      <Toppage />
      <Navbar />
      <ImageSlider />
      <Categories />
      <Fp />
      <Footer />
    </>
  );
}
export default App;