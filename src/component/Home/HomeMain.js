import React from 'react';
import './HomeMain.css'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/IMG2.jpg"
import Fade from 'react-reveal/Fade';
const HomeMain = () => {
return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div>
              <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>MODERN HOME</h1>
              </Fade>
              <img style={{position:'relative',height:'580px'}} src={img1} class="d-block w-100" alt="..."/>
              </div>    
            </div>
            <div class="carousel-item">
            <div>
            <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>BUSINESS SPACE</h1>
          </Fade>
              <img style={{position:'relative',height:'580px'}} src={img2} class="d-block w-100" alt="..."/>
              </div>   
            </div>
            <div class="carousel-item">
            <div>
            <Fade top>
              <h1 style={{marginTop:'100px',position:'absolute'}}>BUSINESS SPACE</h1>
            </Fade>
              <img style={{position:'relative',height:'580px'}} src={img2} class="d-block w-100" alt="..."/>
              </div>   
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    );
};

export default HomeMain;