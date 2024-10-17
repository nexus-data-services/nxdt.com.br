import React from 'react';
import thumb2 from "/assets/img/thumb/2.jpg"
import shape7 from "/assets/img/shape/7.png"
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const BannerV3 = () => {
    return (
        <>
            <div className="banner-style-three-area bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/5.png)' }}>
                <div className="banner-shape-right-top" />
                {/* Single Item */}
                <div className="banner-style-three">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <ReactWOW animation='fadeInUp' delay='300ms' duration="400ms">
                                            <h4>Business Advisor</h4>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='500ms' duration="400ms">
                                            <h2>
                                                Grow business <br />with grat <span className="relative">advice</span>
                                            </h2>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='900ms' duration="400ms">
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my
                                                jointure horrible margaret suitable he followed speedily.
                                            </p>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='1200ms' duration="400ms">
                                            <div className="button mt-40">
                                                <Link className="btn btn-md circle btn-theme animation" to="/contact-us">Get
                                                    Started</Link>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <img src={thumb2} alt="Thumb" />
                                        <ReactWOW animation='fadeInRight'>
                                            <div className="grow-graph">
                                                <img src={shape7} alt="Image Not Found" />
                                                <ReactWOW animation='fadeInUp' delay='300ms'>
                                                    <h5>Profit $23,600</h5>
                                                </ReactWOW>
                                            </div>
                                        </ReactWOW>
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

export default BannerV3;