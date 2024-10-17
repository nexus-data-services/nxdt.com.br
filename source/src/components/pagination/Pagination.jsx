import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <>
            <ul className="pagination">
                <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-left" /></Link></li>
                <li className="page-item active"><Link className="page-link" to="#" onClick={handleSmoothScroll}>1</Link></li>
                <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}>2</Link></li>
                <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}>3</Link></li>
                <li className="page-item"><Link className="page-link" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-right" /></Link></li>
            </ul>
        </>
    );
};

export default Pagination;