import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="card text-center">
      <div className="card-body  bg-dark  text-white p-1">
        <h5 className="card-title m-1">Made with Love</h5>
        <p className="card-text">❤️</p>
        <Link to="/">
          <button type="submit" className="btn btn-primary mb-2">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
