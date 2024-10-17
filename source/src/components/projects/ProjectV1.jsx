import React from 'react';
import { Link } from 'react-router-dom';

const ProjectV1 = () => {
    return (
        <>
            <div className="project-style-one-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pr-60 pr-md-15 pr-xs-15">
                            <div className="project-style-one-info bg-cover text-light" style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                                <h3>Have a view of our amazing projects with our clients</h3>
                                <p>
                                    We’re a creative branding and communications company of creative thinkers, strategists, digital innovators, for your company
                                </p>
                                <ul className="list-style-two mt-20">
                                    <li>Satisfaction guarantee</li>
                                    <li>Ontime delivery</li>
                                </ul>
                                <Link className="btn-style-two" to="/project"><i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="project-style-one-items">
                                <div className="accordion" id="projectAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span>Strategy</span>
                                                <b>Digital business planning</b>
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#projectAccordion">
                                            <div className="accordion-body">
                                                <div className="portfolio-style-one-thumb">
                                                    <img src="/assets/img/portfolio/5.jpg" alt="Image Not Found" />
                                                    <Link to="/project-details"><i className="fas fa-link" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <span>Partnership</span>
                                                <b>Business program management</b>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#projectAccordion">
                                            <div className="accordion-body">
                                                <div className="portfolio-style-one-thumb">
                                                    <img src="/assets/img/portfolio/6.jpg" alt="Image Not Found" />
                                                    <Link to="/project-details"><i className="fas fa-link" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <span>Branding</span>
                                                <b>Strategy development</b>
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#projectAccordion">
                                            <div className="accordion-body">
                                                <div className="portfolio-style-one-thumb">
                                                    <img src="/assets/img/portfolio/7.jpg" alt="Image Not Found" />
                                                    <Link to="/project-details"><i className="fas fa-link" /></Link>
                                                </div>
                                            </div>
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

export default ProjectV1;