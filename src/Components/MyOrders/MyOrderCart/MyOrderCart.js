import React from 'react';
import './MyOrderCart.css';

const MyOrderCart = (props) => {
    const {name, email, title, status, _id} = props.send;
    
    return (
        
                <div className="col-lg-4 py-3">
                        <div className="cart">
                    <div className="order-text">
                        <h4>Service Name: <span className='fw-normal'>{title}</span> </h4>
                        <h4>Name: <span className='fw-normal'>{name}</span></h4>
                        <h4>Email: <span className='fw-normal'>{email}</span></h4>
                        <h3>Order Status :{status}</h3>
                    </div>
                    <div className="cart-button"> 
                    <button onClick={() => props.func(_id)} className="btton">Cancel Order</button>
                        </div>
                </div>




                    {/* <h2>{title}</h2>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                    <h3>Order Status :{status}</h3>
                    <button onClick={() => props.func(_id)} className="btn btn-danger">Cancel Order</button> */}
                </div>
           

        
    );
};

export default MyOrderCart;