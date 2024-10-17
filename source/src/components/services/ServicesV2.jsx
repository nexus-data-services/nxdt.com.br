import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import about2 from "/assets/img/about/2.jpg";
import shape20 from "/assets/img/shape/20.png";
import shape18 from "/assets/img/shape/18.png";
import icon27 from "/assets/img/icon/27.png"
import icon29 from "/assets/img/icon/29.png"
import icon28 from "/assets/img/icon/28.png"
import icon30 from "/assets/img/icon/30.png"
import { Link } from 'react-router-dom';

const ServicesV2 = () => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            }
        },
    }

    return (
        <>
            <div className="services-style-two-area default-padding-top bg-gray">
                <div className="services-style-two-thumb">
                    <img src={about2} alt="Image Not Found" />
                    <img src={shape20} alt="Image Not Found" />
                </div>
                <div className="shape">
                    <img src={shape18} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="review-card">
                                <h6>Excellent 18,560+ Reviews</h6>
                                <div className="d-flex">
                                    <div className="icon">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <span>4.8/5</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-6">
                            <h4 className="sub-title">Our Services</h4>
                            <h2 className="title">Empower your business with our services.</h2>
                            <ul className="list-style-two mt-20">
                                <li>Organizational structure model </li>
                                <li>Satisfaction guarantee</li>
                                <li>Ontime delivery</li>
                            </ul>
                            <div className="services-style-two-items bg-dark text-light">
                                <Swiper
                                    {...sliderSettings}
                                    className="services-style-two-carousel swiper"
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    <div className="swiper-wrapper">
                                        {/* Single Item */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-style-two">
                                                <img src={icon29} alt="Image Not Found" />
                                                <h4><Link to="/services-details">Market Research</Link></h4>
                                                <p>
                                                    Continue indulged speaking the was genius horrible for position. Seeing
                                                    rather her you esteem men settle genius excuse.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        {/* Single Item */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-style-two">
                                                <img src={icon27} alt="Image Not Found" />
                                                <h4><Link to="/services-details">Business Solutions</Link></h4>
                                                <p>
                                                    Always indulged speaking the was genius horrible for position. Seeing rather
                                                    her you esteem men settle genius excuse.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        {/* Single Item */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-style-two">
                                                <img src={icon28} alt="Image Not Found" />
                                                <h4><Link to="/services-details">Sales Service</Link></h4>
                                                <p>
                                                    Regular indulged speaking the was genius horrible for position. Seeing
                                                    rather her you esteem men settle genius excuse.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        {/* Single Item */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-style-two">
                                                <img src={icon30} alt="Image Not Found" />
                                                <h4><Link to="/services-details">Brand Identity</Link></h4>
                                                <p>
                                                    Permission indulged speaking the was genius horrible for position. Seeing
                                                    rather her you esteem men settle genius excuse.
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                        {/* End Single Item */}
                                    </div>
                                </Swiper>
                                {/* Navigation */}
                                <div className="sevice-style-one-swiper-nav">
                                    {/* Pagination */}
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV2;