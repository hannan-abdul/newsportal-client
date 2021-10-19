import React from 'react';
import './MainBody.css';
import SliderBanner from '../../../components/Home/SliderBanner';
import Body from '../../Body/Body';
import SideBar from '../../../components/SideBar/SideBar';

const MainBody = () => {
    return (
        <div className="container d-flex">
            <div className="col-md-9">
                <SliderBanner />
                <Body />
            </div>
            <div className="col-md-3">
                <SideBar />
            </div>
        </div>
    );
};

export default MainBody;