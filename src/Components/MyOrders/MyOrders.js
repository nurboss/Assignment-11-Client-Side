import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import MyOrderCart from './MyOrderCart/MyOrderCart';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [deleteCount, setDeleteCount] = useState(null);
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://howling-mansion-95690.herokuapp.com/myorder/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data));
    }, []);
    

    const handleDeleteOrder = id => {
        fetch(`https://howling-mansion-95690.herokuapp.com/deleteOrde/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
            alert('Are you Sure you want to cancel you order.')
        const remainig = myOrder.filter(service => service._id !== id);
            setMyOrder(remainig);
            }
            
        });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                    myOrder.map(data => <MyOrderCart
                    key={data._id}
                    send={data}
                    func={handleDeleteOrder}
                    ></MyOrderCart> )
                }
                </div>
            </div>
            
        </div>
    );
};

export default MyOrders;