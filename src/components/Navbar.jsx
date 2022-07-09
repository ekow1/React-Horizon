import React from "react";

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4 me-5 txt">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none me-5"
        >
          <img
            src="img/Pepsi-Logo.png"
            alt=""
            width="200"
            height="100"
            className="ps-4"
          />
        </a>

        <div className=" nav col-md-3 text-center justify-content-center">
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              <img
                src="img/ghana-flag__01809.webp"
                alt=""
                width="30"
                height="20"
              />
            </a>
          </li>

          <li>
            <a href="#" className="nav-link px-2 link-dark">
              <img src="img/Flag-Nigeria.webp" alt="" width="30" height="20" />
            </a>
          </li>

          <li>
            <a href="#" className="nav-link px-2 link-dark">
              <img src="img/Flag-Egypt.webp" alt="" width="30" height="20" />
            </a>
          </li>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-end mb-md-0 ">
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              Contacts
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-dark">
              What's New
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-3 link-light copy rounded-pill">
              Buy Pepsi Products
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
