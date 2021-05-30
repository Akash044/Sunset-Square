import React from "react";
import "./Services.css";
import Rotate from 'react-reveal/Rotate';
const Service = (props) => {
  const { name, image } = props.service;
  return (
    <div className="col-md-4">
      <Rotate bottom right>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{ width: "20rem",height:'430px' }}>
        <div className="images">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </div>
      </Rotate>
    </div>
  );
};

export default Service;
