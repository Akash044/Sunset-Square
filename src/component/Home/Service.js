import React from 'react';
import './Services.css'
const Service = (props) => {
    const{name,image}=props.service;
    return (      
    <div className="col-md-4"> 
        <div class="card" style={{width: '20rem'}}>
             <div className="images">
                <img src= {image} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Book Now</a>
            </div>
        </div>  
    </div>
       
    );
};

export default Service;