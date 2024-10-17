import React from 'react';
import portfolio1 from "/assets/img/portfolio/1.jpg"
import portfolio2 from "/assets/img/portfolio/2.jpg"
import portfolio4 from "/assets/img/portfolio/4.jpg"
import projects4 from "/assets/img/projects/4.jpg"
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const PortfolioV3 = () => {
    return (
        <>
            <div className="portfolio-style-three-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Recent Work</h4>
                                <h2 className="title">Featured Works.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt--100 mt-md--50 mt-xs--50">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row gutter-xl">

                                {/* Single Item */}
                                <div className="col-lg-6 col-md-6 item-center">
                                    <ReactWOW animation='fadeInUp'>
                                        <div className="portfolio-style-one">
                                            <Link to="/project-details" className="cursor-target">
                                                <div className="thumb-zoom">
                                                    <img className="img-reveal" src={portfolio1} alt="Image Not Found" />
                                                </div>
                                                <div className="pf-item-info">
                                                    <div className="content">
                                                        <div className="pf-tags">
                                                            <span>Marketing</span>
                                                            <span>2024</span>
                                                        </div>
                                                        <h2>Photo shooting &amp; creative product editing</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                </div>

                                {/* Single Item */}
                                <div className="col-lg-6 col-md-6 item-center">
                                    <ReactWOW animation='fadeInUp'>
                                        <div className="portfolio-style-one">
                                            <Link to="/project-details" className="cursor-target">
                                                <div className="thumb-zoom">
                                                    <img className="img-reveal" src={portfolio2} alt="Image Not Found" />
                                                </div>
                                                <div className="pf-item-info">
                                                    <div className="content">
                                                        <div className="pf-tags">
                                                            <span>Creative</span>
                                                            <span>2023</span>
                                                        </div>
                                                        <h2>Quality in digital industrial</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                </div>

                                {/* Single Item */}
                                <div className="col-lg-6 col-md-6 item-center">
                                    <ReactWOW animation='fadeInUp'>
                                        <div className="portfolio-style-one">
                                            <Link to="/project-details" className="cursor-target">
                                                <div className="thumb-zoom">
                                                    <img className="img-reveal" src={projects4} alt="Image Not Found" />
                                                </div>
                                                <div className="pf-item-info">
                                                    <div className="content">
                                                        <div className="pf-tags">
                                                            <span>Design</span>
                                                            <span>2024</span>
                                                        </div>
                                                        <h2>Blue business and mockup cards color standard</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                </div>

                                {/* Single Item */}
                                <div className="col-lg-6 col-md-6 item-center">
                                    <ReactWOW animation='fadeInUp'>
                                        <div className="portfolio-style-one">
                                            <Link to="/project-details" className="cursor-target">
                                                <div className="thumb-zoom">
                                                    <img className="img-reveal" src={portfolio4} alt="Image Not Found" />
                                                </div>
                                                <div className="pf-item-info">
                                                    <div className="content">
                                                        <div className="pf-tags">
                                                            <span>Business</span>
                                                            <span>2023</span>
                                                        </div>
                                                        <h2>Simple black &amp; white design</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV3;