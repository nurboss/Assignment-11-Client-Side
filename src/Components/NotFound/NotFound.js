import React from 'react';
import './NotFound.css';
import notfound from '../../images/page-not-found.png';

const NotFound = () => {
    return (
        <div className="container">
            <img className="img-fluid" src={notfound} alt="" />
            
        </div>
    );
};

export default NotFound;