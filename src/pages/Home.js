import React from 'react';
import Banner from '../components/Home/Banner';
import Header from '../components/Home/Header';
import Body from './Body';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Body/>
        </div>
    );
};

export default Home;