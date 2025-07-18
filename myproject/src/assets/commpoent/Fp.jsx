import { pf } from "./pf";

const Fp = () => {
  return (
    <div className="container mt-5">
      <div className="col-lg-6 m-auto text-center mb-4">
        <h1 className="h1 fw-light">Featured Product</h1>
        <p className="fs-6">
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>

      <div className="row g-4">
        {pf.map((val, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="ratio ratio-4x3">
                <img
                  src={val.photo}
                  className="card-img-top object-fit-cover"
                  alt="Fp"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h6 className="text-primary fw-semibold">{val.Fname}</h6>

                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text">{val.description || ""}</p>
                </div>
                <p className="card-text mt-auto">
                  <small className="text-muted">{val.ulocation}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fp;
