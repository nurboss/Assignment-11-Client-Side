import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart/ServiceCart';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://howling-mansion-95690.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="container mt-5 service-title">
            <h2 className="text-center">We provide services that you can rely on.</h2>
            <div className="container mt-5 pb-5">
                <div className="row">
                    {
                        services.map(data => <ServiceCart 
                        key={data._id}
                        cartData={data}
                        ></ServiceCart> )
                    }
                </div>
        </div>
        
        </div>
    );
};

export default Services;