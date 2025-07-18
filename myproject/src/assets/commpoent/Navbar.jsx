import './Navbar.css';
import { FaSearch, FaCartArrowDown, FaUser } from 'react-icons/fa';
const Navbar = () => {


  return (
    //     <nav class="navbar bg-body-tertiary" id='a1'>
    //   <div class="container-fluid">
    //     <a class="navbar-brand text-success  " href="#">
    //       Zay
    //     </a>


    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand text-success logo h1 align-self-center m-lg-0 ms-xl-5 " href="#">Zay</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-lg-only-20">
            <li class="nav-item ms-lg-5" style={{ fontSize: '20px', fontWeight: '320' }}>
              <a class="nav-link active" id='li' aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item ms-lg-only-30"  >
              <a class="nav-link active" id='li' href="#">About</a>
            </li>
            <li class="nav-item nav-item ms-lg-only-30" >
              <a class="nav-link active" id='li' href="#">Shop</a>
            </li>
            <li class="nav-item  ms-lg-only-30" >
              <a class="nav-link active" id='li' href="#">Contact</a>
            </li>
          </ul>
          <div className="navbar align-self-center d-flex  ms-lg-only-35">

            {/* Mobile Search Input (visible only on small screens) */}
            <div className="d-lg-none flex-sm-fill mt-3 ms  mb-4 col-11 col-sm-auto pr-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                />
                <div className="input-group-text   ">
                  <FaSearch />
                </div>
              </div>
            </div>

            {/* Search Icon for large screens */}
            <a
              className="nav-icon d-none d-lg-inline"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#templatemo_search "
            >
              <FaSearch className="text-dark ms-xl-3" />
            </a>

            <a className="nav-icon position-relative text-decoration-none" href="#">
              <FaCartArrowDown className="text-dark ms-xl-3" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                7
              </span>
            </a>

            <a className="nav-icon position-relative" href="#">
              <FaUser className="text-dark  ms-xl-3 " />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark">
                +99
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>

  )

}
export default Navbar;  