import React from "react";
import Stars from "../../stars/Stars";
import {Link} from 'react-router-dom'

const Result = (props) => {
  const { name, image, price, person,key, review } = props.result;
  return (
    <div className="card mb-3" style={{ width: "540px" }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} alt="..." style={{ width: "16rem" }} />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Wi-fi, Air, Kitchen
            </p>
            <h6>
                {`$${price}/person`}<br/> 
                <Stars /> 5 {`(${review[0].count})`}
            </h6>
            <Link to={`/details/${key}`}>
                <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
