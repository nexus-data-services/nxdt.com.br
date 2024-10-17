import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import projects1 from "/assets/img/projects/1.jpg"
import projects2 from "/assets/img/projects/2.jpg"
import projects3 from "/assets/img/projects/3.jpg"
import projects4 from "/assets/img/projects/4.jpg"
import { Link } from 'react-router-dom';

const GalleryV2 = ({ sectionClass }) => {

    const sliderSettings = {
        // Optional parameters
        loop: true,
        freeMode: true,
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
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
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 0,
                centeredSlides: true,
            },
        },
    }

    return (
        <>
            <div className={`gallery-style-twoa-rea default-padding-bottom mb-80 ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="site-heading">
                                <h4 className="sub-title">Case Studies</h4>
                                <h2 className="title">Have a view of our amazing projects with our clients</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
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
                        <Swiper
                            {...sliderSettings}
                            className="gallery-style-two-carousel"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div className="swiper-wrapper">
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects1} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Innovative Solutions</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects2} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Authorise Company</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects3} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Management Skills</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects4} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Business Analysis</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects1} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Innovative Solutions</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects2} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Authorise Company</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects3} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Management Skills</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* Single Item */}
                                <SwiperSlide className="swiper-slide">
                                    <div className="gallery-style-two">
                                        <img src={projects4} alt="Image Not Found" />
                                        <div className="overlay text-light">
                                            <div className="info">
                                                <span>Consulting, Recruitment</span>
                                                <h4><Link to="/project-details">Business Analysis</Link></h4>
                                                <p>
                                                    Continued at up to zealously necessary breakfast. Surrounded sir motionless
                                                    she end literature. Gay direction neglected but.
                                                </p>
                                            </div>
                                            <Link to="/project-details">Know More <i className="fas fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/* End Single Item */}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
};

export default GalleryV2;