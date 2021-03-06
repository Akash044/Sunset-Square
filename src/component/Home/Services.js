import { Spinner } from 'react-bootstrap';
import Service from './Service';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { middleware1 } from '../../redux/actions/actions';
import { useEffect } from 'react';
const Services = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(middleware1());
    }, [dispatch]);

    const services = useSelector((state) => {
      return state.forms.services;
    });
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
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="pb-5">
            <div className="container">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                     className="services spinner mt-5 pt-5">
                    <h1 className="">OUR SERVICES</h1>
                    {
                        services.length === 0 && <Spinner animation="border" variant="info" />
                    }
                </div>    
                <div className="row mt-5">
                    <Carousel responsive={responsive}>
                    {
                        services?.map(service=><Service service={service}></Service>)
                    }
                    </Carousel>
                </div>
            </div>
        </div>    
    );
};

export default Services;