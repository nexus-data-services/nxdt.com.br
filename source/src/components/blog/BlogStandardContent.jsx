import React from 'react';
import Pagination from '../pagination/Pagination';
import SingleBlogStandard from './SingleBlogStandard';
import BlogData from '@/assets/jsonData/blog/BlogData.json'

const BlogStandardContent = () => {
    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {BlogData.slice(0, 3).map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <nav aria-label="navigation">
                                        <Pagination />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;