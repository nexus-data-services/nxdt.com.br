import React from 'react';
import shape32 from "/assets/img/shape/32.png"
import icon24 from "/assets/img/icon/24.png"
import icon25 from "/assets/img/icon/25.png"
import icon26 from "/assets/img/icon/26.png"
import { Link } from 'react-router-dom';

const ServicesV5 = ({ sectionClass }) => {
    return (
        <>
            <div className={`services-style-five-area default-padding-top ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Services</h4>
                                <h2 className="title">Empower your business with our services.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="services-style-five-items">
                        <div className="shape">
                            <img src={shape32} alt="Image Not Found" />
                        </div>
                        <div className="row align-center">
                            {/* Single item */}
                            <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                                <div className="services-style-five-item">
                                    <div className="icon">
                                        <img src={icon24} alt="Image Not Found" />
                                    </div>
                                    <h3><Link to="/services-details">Brand Design</Link></h3>
                                    <p>
                                        Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible.
                                    </p>
                                    <ul className="list-style-four">
                                        <li>Color palette</li>
                                        <li>Tagline</li>
                                        <li>Advertisement</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                                <div className="services-style-five-item">
                                    <div className="icon">
                                        <img src={icon25} alt="Image Not Found" />
                                    </div>
                                    <h3><Link to="/services-details">Digital Marketing</Link></h3>
                                    <p>
                                        Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible.
                                    </p>
                                    <ul className="list-style-four">
                                        <li>Color palette</li>
                                        <li>Tagline</li>
                                        <li>Advertisement</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                                <div className="services-style-five-item">
                                    <div className="icon">
                                        <img src={icon26} alt="Image Not Found" />
                                    </div>
                                    <h3><Link to="/services-details">Business Strategy</Link></h3>
                                    <p>
                                        Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible.
                                    </p>
                                    <ul className="list-style-four">
                                        <li>Color palette</li>
                                        <li>Tagline</li>
                                        <li>Advertisement</li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single item */}
                            <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                                <div className="services-style-five-item">
                                    <Link className="btn-large" to="/services"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            {/* End Single item */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV5;