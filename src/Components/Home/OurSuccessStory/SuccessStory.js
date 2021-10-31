import React from 'react';
import './SuccessStory.css';
import succesimg from '../../../images/success.jpg';

const SuccessStory = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="top-title">Our story</h1>
                    <p className="whyue-text mt-5">eCourier is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.

We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup and Return services which enhances customer experience and rationalizes costs.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={succesimg} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SuccessStory;