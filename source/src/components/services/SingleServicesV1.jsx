import React from 'react';
import { Link } from 'react-router-dom';

const SingleServicesV1 = ({ service }) => {
    const { icon, titleFirst, titleLast, text, counts } = service

    return (
        <>
            <div className="icon">
                <img src={`/assets/img/icon/${icon}`} alt="Image Not Found" />
            </div>
            <div className="content">
                <h4><Link to="/services-details">{titleFirst} <br /> {titleLast} </Link></h4>
                <p>{text}</p>
            </div>
            <div className="button">
                <Link className="btn" to="/services-details"><i className="fas fa-arrow-right" /></Link>
            </div>
            <span>{counts}</span>
        </>
    );
};

export default SingleServicesV1;