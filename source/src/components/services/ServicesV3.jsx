import React from 'react';
import icon16 from "/assets/img/icon/16.png"
import icon17 from "/assets/img/icon/17.png"
import icon18 from "/assets/img/icon/18.png"
import { Link } from 'react-router-dom';

const ServicesV3 = () => {
    return (
        <>
            <div className="services-style-three-area default-padding bottom-less bg-gray-secondary bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/24.png)' }}>
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
                <div className="container">
                    <div className="row">

                        {/* Single Item */}
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                            <div className="services-style-three-item">
                                <div className="item-title">
                                    <img src={icon16} alt="Image Not Found" />
                                    <h4><Link to="/services-details">Analytic Solutions</Link></h4>
                                    <p>
                                        Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.
                                    </p>
                                    <div className="d-flex mt-30">
                                        <Link to="services-details"><i className="fas fa-long-arrow-right" /></Link>
                                        <div className="service-tags">
                                            <Link to="#" >Management</Link>
                                            <Link to="#" >Backup</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                            <div className="services-style-three-item">
                                <div className="item-title">
                                    <img src={icon17} alt="Image Not Found" />
                                    <h4><Link to="/services-details">Risk Management</Link></h4>
                                    <p>
                                        Regular rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.
                                    </p>
                                    <div className="d-flex mt-30">
                                        <Link to="/services-details"><i className="fas fa-long-arrow-right" /></Link>
                                        <div className="service-tags">
                                            <Link to="#" >Hardware </Link>
                                            <Link to="#" >Error</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Single Item */}
                        <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                            <div className="services-style-three-item">
                                <div className="item-title">
                                    <img src={icon18} alt="Image Not Found" />
                                    <h4><Link to="/services-details">Firewall Advance</Link></h4>
                                    <p>
                                        Patient rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.
                                    </p>
                                    <div className="d-flex mt-30">
                                        <Link to="/services-details"><i className="fas fa-long-arrow-right" /></Link>
                                        <div className="service-tags">
                                            <Link to="#" >Network</Link>
                                            <Link to="#" >Firewall </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV3;