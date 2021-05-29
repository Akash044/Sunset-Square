import React from 'react';
import Feature from './Feature';
import HomeMain from './HomeMain';
import Navbar from './Navbar';
import Services from './Services';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeMain></HomeMain>
            <Feature></Feature>
            <Services></Services>
        </div>
    );
};

export default Home;