

const ImageSlider = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                <h3 class="h2">Tiny and Perfect eCommerce Template</h3>
                <p>
                  Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                  This template is 100% free provided by <a rel="sponsored" class="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                  Image credits go to <a rel="sponsored" class="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                  <a rel="sponsored" class="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                  <a rel="sponsored" class="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src="src/assets/image/banner_img_01.jpg" className="img-fluid" alt="Slide 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="2000">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 class="h1">Proident occaecat</h1>
                <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                <p>
                  You are permitted to use this Zay CSS template for your commercial websites.
                  You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src="src/assets/image/banner_img_02.jpg" className="img-fluid" alt="Slide 2" />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 class="h1">Repr in voluptate</h1>
                <h3 class="h2">Ullamco laboris nisi ut </h3>
                <p>
                  We bring you 100% free CSS templates for your websites.
                  If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src="src/assets/image/banner_img_03.jpg" className="img-fluid" alt="Slide 3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon ms-5" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};



export default ImageSlider;
