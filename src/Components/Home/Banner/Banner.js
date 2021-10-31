import React from 'react';
import banner from '../../../images/img-1.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center banner-title">
                <h2>Others deliver boxes We deliver <span className="little-title">dreams</span> </h2>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;