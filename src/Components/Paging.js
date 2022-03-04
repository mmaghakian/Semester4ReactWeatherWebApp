import React from 'react'
import { Pagination, Nav } from 'react-bootstrap';

export const Paging = ({ cardsPerPage, totalCards, paging }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    if (pageNumbers.length === 1)
        return <></>;
    return (

        <Nav style={{ display: 'inline-flexbox' }}>
            <Pagination className="pagination-sm mb-0">
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => {
                        paging(number)
                    }}>
                        {number}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Nav>

    )
}
