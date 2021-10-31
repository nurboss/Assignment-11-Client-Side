import React from 'react';
import './WhyCourierHero.css'

const WhyCourierHero = () => {
    return (
        <div className="container">
            <h1 className="top-title">Why CourierHero</h1>
            <div className="row py-5">
                <div className="col-lg-4">
                    <h2 className="whyus-title">One Stop Solution</h2>
                    <p className="whyue-text">We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest.</p>
                </div>
                <div className="col-lg-4">
                    <h2 className="whyus-title">Wide Coverage</h2>
                    <p className="whyue-text">We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.</p>
                </div>
                <div className="col-lg-4">
                    <h2 className="whyus-title">Full Tracking</h2>
                    <p className="whyue-text">Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.</p>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-lg-4">
                    <h2 className="whyus-title">Delivery confirmation with OTP</h2>
                    <p className="whyue-text">Two factor authentications - OTP verification is implemented at the time of delivery to ensure an additional layer of security to the delivered package.</p>
                </div>
                <div className="col-lg-4">
                    <h2 className="whyus-title">Fastest Service</h2>
                    <p className="whyue-text">Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.</p>
                </div>
                <div className="col-lg-4">
                    <h2 className="whyus-title">Cash on Delivery (COD)</h2>
                    <p className="whyue-text">We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyCourierHero;