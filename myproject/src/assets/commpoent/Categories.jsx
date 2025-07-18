

import { themonth } from "./themonth"



const Categories = () => {
  return (
    <div className="container mt-4">
      <div class="col-lg-6 m-auto text-center mb-4">
        <h1 class="h1 fw-light">Categories of The Month</h1>
        <p class="fs-6">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="row ">

        {themonth.map((val, index) => (

          <div className="col-md-4 d-flex justify-content-center mb-4 " key={index}>

            <div className="text-center w-100 md-lg-4 mt-4">
              <img
                src={val.photo}
                alt="Category"
                className="rounded-circle mb-3"
                style={{ width: '70%', height: '60%' }}
              />
              <h1 className="h5"> {val.name}</h1>
              <p ></p>
              <button type="button" class="btn btn-success">{val.ulocation}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
