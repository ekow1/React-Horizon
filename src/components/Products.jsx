import React from "react";

function Products() {
  return (
    <section className="container mag ">
      <div className="row ">
        <h2
          className="text-center txt text-decoration-underline "
          style={{ marginBottom: "10%", color: "#001644 " }}
        >
          {" "}
          PEPSI RANGE OF PRODUCTS
        </h2>

        <div className="col-md-3 text-center">
          <div
            className="card border-1  border-secondary shadow-sm "
            style={{ width: "18rem" }}
          >
            <img
              src="img/dew.png"
              className="card-img-top"
              alt="..."
              height="300"
              width="180"
              style={{ marginTop: "-30%" }}
            />
            <div className="card-body">
              <h5 className="card-title txt h3 main rounded-pill text-light">
                Mountain Dew
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-tranparent text-dark cad ">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center ">
          <div
            className="card border-1  border-secondary shadow-sm "
            style={{ width: "18rem" }}
          >
            <img
              src="img/7up (1).png"
              className="card-img-top "
              alt="..."
              style={{ marginTop: "-70px" }}
            />
            <div className="card-body">
              <h5 className="card-title txt h3 main rounded-pill text-light ">
                7 Up
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-tranparent text-dark cad">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center  ">
          <div
            className="card border-1  border-secondary  shadow-sm"
            style={{ width: "18rem" }}
          >
            <img
              src="img/Nitro_Pepsi_CAN_Glass@3x (1).png"
              className="card-img-top"
              alt="..."
              width="200"
              height="285"
              style={{ marginTop: "-69px" }}
            />
            <div className="card-body">
              <h5 className="card-title txt h3 main rounded-pill text-light ">
                Pepsi Cola
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-tranparent text-dark cad">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center ">
          <div
            className="card border-1  border-secondary  shadow-sm"
            style={{ width: "18rem" }}
          >
            <img
              src="img/MIRINDA-SOFT-DRINKS-removebg-preview.png"
              height="287"
              className="card-img-top"
              alt="..."
              style={{ marginTop: "-70px" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center txt h3 main rounded-pill text-light ">
                Mirinda
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-tranparent text-dark cad">
                Learn More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
