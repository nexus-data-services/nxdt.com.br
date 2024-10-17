import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import project5 from "/assets/img/projects/5.jpg"
import project6 from "/assets/img/projects/6.jpg"
import project7 from "/assets/img/projects/7.jpg"
import project8 from "/assets/img/projects/8.jpg"
import { Link } from 'react-router-dom';

const GalleryV1 = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: true,
        // pagination
        pagination: {
            el: '.project-pagination',
            type: 'fraction',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
                centeredSlides: true,
            },
        },
    }

    return (
        <>
            <div className={`gallery-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-9">
                            <div className="site-heading">
                                <h4 className="sub-title">Case Studies</h4>
                                <h2 className="title">Have a view of our amazing projects with our clients</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-3">
                            <div className="project-navigation-items">
                                {/* Navigation */}
                                <div className="project-swiper-nav">
                                    {/* Pagination */}
                                    <div className="project-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <Swiper {...sliderSettings}
                            className="gallery-style-one-carousel swiper"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-one">
                                        <img src={project5} alt="Image Not Found" />
                                        <div className="overlay">
                                            <div className="info">
                                                <h4><Link to="/project-details">Cyber Security</Link></h4>
                                                <span>Technology, IT</span>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Explore <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-one">
                                        <img src={project6} alt="Image Not Found" />
                                        <div className="overlay">
                                            <div className="info">
                                                <h4><Link to="/project-details">IT Counsultancy</Link></h4>
                                                <span>Security, Firewall</span>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Explore <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-one">
                                        <img src={project7} alt="Image Not Found" />
                                        <div className="overlay">
                                            <div className="info">
                                                <h4><Link to="/project-details">Analysis of Security</Link></h4>
                                                <span>Support, Tech</span>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Explore <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-one">
                                        <img src={project8} alt="Image Not Found" />
                                        <div className="overlay">
                                            <div className="info">
                                                <h4><Link to="/project-details">Business Analysis</Link></h4>
                                                <span>Network, Error</span>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Explore <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GalleryV1;