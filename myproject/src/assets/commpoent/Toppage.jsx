import { } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Toppage = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div>
                        <FaEnvelope className="mx-2" />
                        <a class="navbar-sm-brand text-light text-decoration-none m-2" href="mailto:info@company.com">info@company.com</a>
                        <IoCall style={{ Color: 'white' }} className="mx-2" />
                        <a class="navbar-sm-brand text-light text-decoration-none m-2" href="tel:010-020-0340">010-020-0340</a>
                    </div>
                    <div>
                        <a className="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored">
                            <FaFacebookF className="fa-sm fa-fw me-2" />
                        </a>
                        <a className="text-light" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="fa-sm fa-fw me-2" />
                        </a>
                        <a className="text-light" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="fa-sm fa-fw me-2" />
                        </a>
                        <a className="text-light" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="fa-sm fa-fw" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Toppage;