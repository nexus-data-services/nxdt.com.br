import React from 'react';
import features1 from "/assets/img/features/1.jpg";
import features2 from "/assets/img/features/2.jpg";
import features3 from "/assets/img/features/3.jpg";
import icon13 from "/assets/img/icon/13.png";
import icon14 from "/assets/img/icon/14.png";
import icon15 from "/assets/img/icon/15.png";
import { Link } from 'react-router-dom';


const FeatureV2 = () => {
    return (
        <>
            <div className="features-style-two-area default-padding bottom-less bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Features</h4>
                                <h2 className="title">Our goal is giving the best our customers</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 feature-style-two-item">
                            <div className="feature-style-two">
                                <div className="thumb">
                                    <img src={features1} alt="Thumb" />
                                    <div className="title">
                                        <div className="top">
                                            <img src={icon13} alt="Icon Not Found" />
                                            <h4><Link to="/services-details">Manage it service</Link></h4>
                                        </div>
                                        <Link to="/services-details"><i className="fas fa-long-arrow-right" /></Link>
                                    </div>
                                    <div className="overlay text-center">
                                        <div className="content">
                                            <div className="icon">
                                                <img src={icon13} alt="Icon Not Found" />
                                            </div>
                                            <h4><Link to="/services-details">Manage it service</Link></h4>
                                            <p>
                                                Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 feature-style-two-item">
                            <div className="feature-style-two">
                                <div className="thumb">
                                    <img src={features2} alt="Thumb" />
                                    <div className="title">
                                        <div className="top">
                                            <img src={icon14} alt="Icon Not Found" />
                                            <h4><Link to="/services-details">Cyber Security</Link></h4>
                                        </div>
                                        <Link to="/services-details"><i className="fas fa-long-arrow-right" /></Link>
                                    </div>
                                    <div className="overlay text-center">
                                        <div className="content">
                                            <div className="icon">
                                                <img src={icon14} alt="Icon Not Found" />
                                            </div>
                                            <h4><Link to="/services-details">Cyber Security</Link></h4>
                                            <p>
                                                Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="col-xl-4 col-md-6 feature-style-two-item">
                            <div className="feature-style-two">
                                <div className="thumb">
                                    <img src={features3} alt="Thumb" />
                                    <div className="title">
                                        <div className="top">
                                            <img src={icon15} alt="Icon Not Found" />
                                            <h4><Link to="/services-details">Digital Experience</Link></h4>
                                        </div>
                                        <Link to="/services-details"><i className="fas fa-long-arrow-right" /></Link>
                                    </div>
                                    <div className="overlay text-center">
                                        <div className="content">
                                            <div className="icon">
                                                <img src={icon15} alt="Icon Not Found" />
                                            </div>
                                            <h4><Link to="/services-details">Digital Experience</Link></h4>
                                            <p>
                                                Prevailed mr tolerably discourse assurance estimable everything melancholy uncommonly solicitude inhabiting projection.
                                            </p>
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

export default FeatureV2;