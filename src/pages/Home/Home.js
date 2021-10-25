import React from 'react';
import Footer from '../../components/Home/Footer/Footer';
import HeaderBanner from '../../components/Home/HeaderBanner';
import MainBody from './MainBody/MainBody';

const Home = () => {
    return (
        <div>
            <HeaderBanner/>
            <MainBody/>
            <Footer/>
        </div>
    );
};

export default Home;