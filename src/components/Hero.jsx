import React from "react";

function Hero() {
  return (
    <section className="container bg-img rad py-3 align-items-center ">
      <div className=" row   " style={{ width: "80%", margin: "0 auto" }}>
        <div className="col-md-6  ">
          <img
            src="img/Nitro_Pepsi_CAN_Glass@3x (1).png"
            alt=""
            width="400"
            height="300"
            className="img-fluid mx-auto d-block"
          />
        </div>
        <div className="col-md-6  justify-content-center mt-5 ">
          <img
            src="img/Nitro_Logo@3x.png"
            alt=""
            width="500"
            height="350"
            className=" mx-auto d-block"
          />

          <p className="text-center h2 text-wrap mt-4 font">
            {" "}
            SMOOTH , CREAMY, DELICIOUS
          </p>

          <a
            href=""
            className="text-center nav-link text-light rounded-pill  border border-white border-2  mx-auto rounded-3  txt"
            style={{
              width: " 35%",
              fontSize: "1.1rem",
              margin: "20px  0 40px 0",
            }}
          >
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
