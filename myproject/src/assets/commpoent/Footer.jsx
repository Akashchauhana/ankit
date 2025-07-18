import { FaMapMarkerAlt ,FaPhone,FaEnvelope,FaFacebookF, FaInstagram, FaTwitter, FaLinkedin  } from "react-icons/fa"; 
import './footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 ">
      <div className="container">
        < div className="row">
          <div className="col-md-4 fw-light">
            <h2 class="h2 text-success border-bottom pb-3 border-light logo fst-italic">Zay Shop</h2>
             <ul class="list-unstyled text-light footer-link-list">
              <li className="list-unstyled fs-5 " >
                <FaMapMarkerAlt className="mb-1 me-2 "/>
                  123 Consectetur at ligula 10660
              </li>
              
              <li className="list-unstyled fs-5">
                 <FaPhone className="mb-1 me-2 " />
                 <a class="ankit text-decoration-none text-light" href="#">6377775138</a>
              </li>
              <li className="list-unstyled fs-5">
<FaEnvelope className="mb-1 me-2 " />
                  <a class="text-decoration-none text-light" href="#">info@company.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 fw-light fs-5 ">
      <h2 className="h2 text-light border-bottom pb-3 border-light fst-italic">Products</h2>
      <ul className="list-unstyled text-light footer-link-list">
        <li><a className="text-decoration-none text-light" href="#">Luxury</a></li>
        <li><a className="text-decoration-none text-light" href="#">Sport Wear</a></li>
        <li><a className="text-decoration-none text-light" href="#">Men's Shoes</a></li>
        <li><a className="text-decoration-none text-light" href="#">Women's Shoes</a></li>
        <li><a className="text-decoration-none text-light" href="#">Popular Dress</a></li>
        <li><a className="text-decoration-none text-light" href="#">Gym Accessories</a></li>
        <li><a className="text-decoration-none text-light" href="#">Sport Shoes</a></li>
      </ul>
    </div>
      <div className="col-md-4 fs-5  fw-light">
      <h2 className="h2 text-light border-bottom pb-3 border-light fst-italic">Further Info</h2>
      <ul className="list-unstyled text-light footer-link-list">
        <li><a className="text-decoration-none text-light" href="#">Home</a></li>
        <li><a className="text-decoration-none text-light" href="#">About Us</a></li>
        <li><a className="text-decoration-none text-light" href="#">Shop Locations</a></li>
        <li><a className="text-decoration-none text-light" href="#">FAQs</a></li>
        <li><a className="text-decoration-none text-light" href="#">Contact</a></li>
      </ul>
    </div>
        </div>
         <div className="row text-light mb-4">
      <div className="col-12 mb-3">
        <div className="w-100 my-3 border-top border-light"></div>
      </div>
      <div className="col-auto me-auto">
        <ul className="list-inline text-left footer-icons">
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none d-inline-block p-2"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaFacebookF className="fa-lg" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none d-inline-block p-2"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaInstagram className="fa-lg" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none d-inline-block p-2"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaTwitter className="fa-lg" />
            </a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a
              className="text-light text-decoration-none d-inline-block p-2"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              <FaLinkedin className="fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
      </div>
    </footer>
  );
}
export default Footer;