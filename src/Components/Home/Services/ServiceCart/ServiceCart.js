import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCart.css';

const ServiceCart = (props) => {
    const {title, description, img, _id} = props.cartData;
    return (
        <div className="content col-lg-4 col-md-6 col-md-12 ">
                <div className="cart">
                    <div className="cart-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="cart-text">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="cart-button"> 
                            <Link to={`/service/${_id}`}>
                            <button className="button">Details</button>
                            </Link>                      
                        </div>
                </div>








                {/* <div className="box">
                <div>
                        <div className="img-box">
                            <img src={img} alt="" />
                        </div>
                    <div className="text">
                          <div className="text-box">
                            <h4 className="fw-bold">{title}</h4>
                            <p>{description}</p>
                            </div>
                          </div>
                </div>
                        <div className=" my-3 d-flex             justify-content-between"> 
                            <Link to={`/details/${_id}`}>
                            <button className="button">Details</button>
                            </Link>                      
                        </div>
                </div> */}
            </div>
    );
};

export default ServiceCart;