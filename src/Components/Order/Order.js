import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hook/useAuth';
import './Order.css';
const Order = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const {id} = useParams();
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://howling-mansion-95690.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setOrderDetails(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "Pending..."
        fetch('https://howling-mansion-95690.herokuapp.com/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then()
        
    
    };

    const {title} = orderDetails;
    return (
        <div className="container mt-5 order-from">
            <form onSubmit={handleSubmit(onSubmit)}>
                {(user.email || user.displayName) && <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />} <br />

                {(user.email || user.displayName) && <input type="email" defaultValue={user.email} {...register("email")} placeholder="Email"  />} <br />


                {title && <input defaultValue={title} {...register("title")} placeholder="Service Name" />} <br />

                <input {...register("address")} placeholder="Your Address" /> <br />

                <input type="number" {...register("phone")}  placeholder="Phone" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Order;