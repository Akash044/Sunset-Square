import React from 'react';
import './HoseRent.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from '../../images/property.png';
import image2 from '../../images/icon2.png'
import image3 from '../../images/icon3.png'
import image4 from '../../images/icon4.png'
import image5 from '../../images/icon5.png'

const HoseRent = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="container">
        <Carousel responsive={responsive}>
    <div> 
        <div className="d-flex">
            <div>
                <img src={image} alt="" />
            </div>
        
            <div className="text">
                <h2 style={{color:'#bf9410'}} className="title">
                2,000 </h2>
                <h5>Parking</h5>
            </div>
        </div>
    </div>
    
    <div>
        <div className="d-flex">
           <div>
                <img src={image2} alt="" />
           </div>
            <div className="text">
                <h2 style={{color:'#bf9410'}} className="title">
                1,000 </h2>
                <h5>House Units</h5>
            </div>
        </div>
    </div>
    <div>
        <div className="d-flex">
            <div>
                <img src={image3} alt="" />
            </div>
        
            <div className="text">
                <h2 style={{color:'#bf9410'}} className="title">
                1,000 </h2>
                <h5>Green Area</h5>
            </div>
        </div>
     </div>
    <div>
        <div className="d-flex">
            <div>
                <img src={image4} alt="" />
            </div>
        
            <div className="text">
                <h2 style={{color:'#bf9410'}} className="title">
                5,000 </h2>
                <h5>Apartments</h5>
            </div>
        </div>
      
    </div>
    <div>
        <div className="d-flex">
            <div>
                <img src={image5} alt="" />
            </div>
        
            <div className="text">
                <h2 style={{color:'#bf9410'}} className="title">
                5,000 </h2>
                <h5>Site Area</h5>
            </div>
        </div>

    </div>
</Carousel>

</div>
    );
};

export default HoseRent;