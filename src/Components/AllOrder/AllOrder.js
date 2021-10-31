import React, { useEffect, useState } from 'react';
import './AllOrders.css';
import AllOrdersCart from './AllOrdersCart/AllOrdersCart';


const AllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://howling-mansion-95690.herokuapp.com/allorder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, []);
    const handleAllDelete = id => {
        console.log(id);
        fetch(`https://howling-mansion-95690.herokuapp.com/deleteaddOrdre/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
            alert('Are you Sure you want to cancel you order.')
        const remainig = allOrder.filter(service => service._id !== id);
        setAllOrder(remainig);
            }
            
        });
    }
    return (
        <div className="container bottom">
            <h1 className="text-center my-3 all-title">Mannage all order.</h1>
            <div className="row">
            {
                allOrder.map(result => <AllOrdersCart
                key={result._id}
                sentdata={result}
                funck={handleAllDelete}
                ></AllOrdersCart> )
            }
            </div>
        </div>
    );
};

export default AllOrder;