import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            "page-item" +
                            (currentPage === page ? " active" : "")
                        }
                    >
                        {/* Поменяли на кнопку, чтобы не было ошибок */}
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {/*  Передаём callback в котором вызываем onPageChange(page) */}
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
export default Pagination;
