import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const SingleBlogV2 = ({ blog }) => {
    const { id, thumb, date, tag, title, btnText, animationDelay } = blog

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={animationDelay}>
                <div className="home-blog-style-one-item">
                    <div className="home-blog-thumb">
                        <Link to={`/blog-single-with-sidebar/${id}`}>
                            <img src={`/assets/img/blog/${thumb}`} alt="Image not Found" />
                        </Link>
                        <ul className="home-blog-meta">
                            <li>
                                <Link to="#">{tag}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h2 className="blog-title">
                                <Link to={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                            </h2>
                            <Link to={`/blog-single-with-sidebar/${id}`} className="btn-read-more">{btnText} <i className="fas fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleBlogV2;