import { Box, Container } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              className="navbar-brand"
              href="#"
              style={{
                color: "#2D89FF",
                borderRadius: "0px",
              }}
            >
              Doc<span style={{ color: "#642DFF" }}>mic</span>
            </a>
            <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0  w-100">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "#529DFE" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Departments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contracts</a>
              </li>
            </ul>
            <button
              className="btn p-3"
              type="submit"
              style={{
                background: "#2D89FF",
                color: "white",
                width: "50px",
                width: "270px",
              }}
            >
              Free Consulation
            </button>
          </div>
        </div>
      </nav>
    </Box>
  );
}

export default Navbar;
