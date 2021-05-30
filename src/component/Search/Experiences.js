import React from "react";
import Stars from "../../stars/Stars";

const Experiences = (props) => {
  const { location, name, price, image, review } =
    props.experience;

  return (
    <div className="col-md-4 col-sm-12">
      <div className="card mx-auto" style={{ width: "16rem",marginBottom:"10px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
        <h6 className="card-text">{location}</h6>
          <h4 className="card-title">{name}</h4>
          <p>{`$${price} per person`}</p>
          
          <p>
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          {`   ${review[0].count}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
