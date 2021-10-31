import React from 'react';

const MyOrderCart = (props) => {
    const {name, email, title, status, _id} = props.send;
    
    return (
        
                <div className="col-lg-4 border py-3">
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                    <p>{title}</p>
                    <h2>{status}</h2>
                    <button onClick={() => props.func(_id)} className="btn btn-danger">Cancel Order</button>
                </div>
           

        
    );
};

export default MyOrderCart;