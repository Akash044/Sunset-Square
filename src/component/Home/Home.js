import React from 'react';
import Feature from './Feature';
import HomeMain from './HomeMain';
import Navbar from './Navbar';
import Services from './Services';
import Footer from '../Home/Footer/Footer/Footer'
const Home = () => {
    return (
        <div style={{backgroundColor:'lavenderblush'}}>
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <Feature></Feature>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;