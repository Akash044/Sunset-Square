import React from 'react';
import feature from '../../images/feature.jpg'
import HoseRent from './HoseRent';
import Fade from 'react-reveal/Fade';
const Feature = () => {
    return (
        <div className="features"> 
            <div className="container">
                <div className="feature-area">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-6">
                            <div className="text-area mt-5 pt-5">
                            <Fade top>
                                <h1 style={{fontSize:'50px',color:'#82b440'}}>Architecture with people in mind.</h1>
                                <p className="text-secondary">Lorem ipsum proin gravida nibh vel velit auctor aliollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulpu tate cursus amet lorem mauris.</p>
                                 <a style={{textDecoration:'none',fontWeight:'bold'}} href="">READE MORE</a>
                            </Fade>     
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-area">
                                <Fade right>
                                <img className="img-fluid" src={feature} alt="" />
                                </Fade>
                            </div>
                        </div>
                    </div>
                   <div className="bg-white mx-auto mt-4" style={{width:"900px", border:'1px solid',padding:'50px 0px',paddingLeft:'40px'}}>
                   <HoseRent></HoseRent>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;