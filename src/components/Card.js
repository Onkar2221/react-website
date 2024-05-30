import React from "react";
import "./Card.css";

const Card = ({ title, image }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Together, we are committed to delivering outstanding results and
          driving the success of our clients' projects. Meet the faces behind
          our hard work and dedication.
        </p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
