import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
const Service = (props) => {
  const { name, image } = props.service;
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "20rem" }}>
        <div className="images">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/book">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
