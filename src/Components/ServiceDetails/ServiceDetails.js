import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const {serviceId} = useParams();
    // const history = useHistory();
    const [servicesDetails, setServicesDetails] = useState([]);
    useEffect(() => {
        fetch(`https://howling-mansion-95690.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setServicesDetails(data))
    }, []);
    // const handleHistory = () => {
    //     history.push('/order')
    // }
    
    const {title, description, img , _id} = servicesDetails;
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center width-height">
                <div className="col-lg-6 push">
                <img src={img} alt="" />
                </div>
                <div className="col-lg-6 push">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link to={`/order/${_id}`}>
                <button className="button">Book This Service</button>
                </Link> 
                
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;