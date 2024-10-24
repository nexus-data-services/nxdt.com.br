import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area overflow-hidden bg-gray">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <div className="animation-shape">
                                            <img src="/assets/img/shape/anim-2.png" alt="Image not found" />
                                        </div>
                                        <ReactWOW animation='fadeInUp' delay='2000ms' duration="400ms">
                                            <h4>Nexus Data</h4>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='500ms' duration="400ms">
                                            <h3>Cresça seu <strong>negocio</strong> com a transformação digital e impulsione a cultura data driven.</h3>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='900ms' duration="400ms">
                                            <p>
                                            Somos especialistas em transformação digital, impulsionando negócios por meio de soluções baseadas em dados e tecnologias em nuvem. Entre em contato conosco para descobrir como nossos produtos e serviços podem acelerar a inovação e otimizar os resultados da sua empresa.
                                            </p>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay='1200ms' duration="400ms">
                                            <div className="button mt-40">
                                                <Link className="btn btn-md circle btn-gradient animation" to="/contact-us">Get Started</Link>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="banner-one-thumb col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <ReactWOW animation='fadeInUp'>
                                            <img src="/assets/img/thumb/1.png" alt="Thumb" />
                                        </ReactWOW>
                                        <div className="strategy">
                                            <ReactWOW animation='fadeInLeft' delay='800ms'>
                                                <div className="item">
                                                    <div className="icon">
                                                        <i className="fas fa-chart-pie" />
                                                    </div>
                                                    <div className="info">
                                                        <p><strong>86%</strong> Business Growth</p>
                                                    </div>
                                                </div>
                                            </ReactWOW>
                                            <ReactWOW animation='fadeInRight' delay='500ms'>
                                                <div className="item">
                                                    <div className="icon">
                                                        <i className="fas fa-rocket" />
                                                    </div>
                                                    <div className="info">
                                                        <p><strong>75%</strong> Marketing</p>
                                                    </div>
                                                </div>
                                            </ReactWOW>
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

export default BannerV1;