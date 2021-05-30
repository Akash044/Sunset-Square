import React from 'react';
import './HomeMain.css'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/IMG2.jpg"
import Fade from 'react-reveal/Fade';
const HomeMain = () => {
return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
              <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>MODERN HOME</h1>
              </Fade>
              <img style={{position:'relative',height:'580px'}} src={img1} className="d-block w-100" alt="..."/>
              </div>    
            </div>
            <div className="carousel-item">
            <div>
            <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>BUSINESS SPACE</h1>
          </Fade>
              <img style={{position:'relative',height:'580px'}} src={img2} className="d-block w-100" alt="..."/>
              </div>   
            </div>
            <div className="carousel-item">
            <div>
            <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>BUSINESS SPACE</h1>
            </Fade>
              <img style={{position:'relative',height:'580px'}} src={img2} className="d-block w-100" alt="..."/>
              </div>   
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    );
};

export default HomeMain;