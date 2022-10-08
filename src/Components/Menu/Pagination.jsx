import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PlatCard from './PlatCard';
import { useSelector } from 'react-redux'

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        {item}
                    </div>
                ))}
        </>
    );
}

export function Pagination({ itemsPerPage }) {
    const filterItem = useSelector((state) => state.filter.type)
    const InfoCards = useSelector((state) => state.plats.platInfo)
    const items = InfoCards.filter(item => item.type === filterItem).map((data) => {
        return (
            <PlatCard plat={data} />
        )
    })
    
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className='mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel=""
                nextLabel="hhhh"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="hhhh"
                renderOnZeroPageCount={null}
                pageClassName="numberPage"
                containerClassName="pageContainer"
                previousClassName="previousBoutton"
                nextClassName="nextBoutton"
                activeClassName="activePage"
                forcePage={1}
            />
        </div>
    );
}