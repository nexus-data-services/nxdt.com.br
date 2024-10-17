import React from 'react';
import Pagination from '../pagination/Pagination';
import BlogData from "@/assets/jsonData/blog/BlogData"
import SingleBlog2Column from './SingleBlog2Column';

const Blog2ColumnContent = () => {
    return (
        <>
            <div className="blog-area home-blog blog-grid default-padding-bottom">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {BlogData.slice(0, 4).map(blog =>
                                <div className="col-xl-6 col-md-6 col-lg-6 mb-50" key={blog.id}>
                                    <SingleBlog2Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <nav aria-label="navigation">
                                <Pagination />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blog2ColumnContent;