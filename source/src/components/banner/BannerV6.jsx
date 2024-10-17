import React, { useState } from 'react';
import thumb6 from "/assets/img/thumb/6.jpg"
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const BannerV6 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-style-six-area overflow-hidden bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/6.jpg)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-11">
                            <div className="banner-style-six-item">
                                <h2 className="split-text">Creative <strong>Agency</strong></h2>
                                <div className="d-flex justify-content-between">
                                    <ReactWOW animation='fadeInDown' delay='500ms'>
                                        <div className="video-card">
                                            <div className="thumb">
                                                <img src={thumb6} alt="Image Not Found" />
                                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
                                                <Link onClick={() => setOpen(true)} to="#" className="popup-youtube video-play-button"><i className="fas fa-play" /></Link>
                                            </div>
                                            <h4>Watch Intro Video</h4>
                                        </div>
                                    </ReactWOW>
                                    <ReactWOW animation='fadeInLeft' delay='800ms'>
                                        <div className="card-style-one mt-30">
                                            <p>
                                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week.
                                            </p>
                                            <div className="item-author">
                                                <div className="left">
                                                    <h5>Craetive Digital Marketing</h5>
                                                    <span>Autin Barber</span>
                                                </div>
                                                <Link to="/about-us-2"><i className="fas fa-long-arrow-right" /></Link>
                                            </div>
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

export default BannerV6;