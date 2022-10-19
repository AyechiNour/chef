import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PlatCard from './PlatCard';
import { useDispatch, useSelector } from 'react-redux'
import { filterPlat, setItemOffset } from '../../Features/platSlice';

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
    const dispatch = useDispatch()
    const option = useSelector((state) => state.plats.filterOption)
    const platFilter = useSelector((state) => state.plats.filterPlat);
    const itemOffset = useSelector((state) => state.plats.itemOffset);
    useEffect(() => {
        dispatch(filterPlat())
    }, [dispatch, option]);
    // We start with an empty list of items.
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [endOffset, setendOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.    
        setendOffset(itemOffset + itemsPerPage)
        setPageCount(Math.ceil(platFilter.map((data) => {
            return (
                <PlatCard plat={data} />
            )
        }).length / itemsPerPage));
    }, [itemOffset, itemsPerPage, dispatch, option, platFilter, endOffset]);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % platFilter.map((data) => {
            return (
                <PlatCard plat={data} />
            )
        }).length;
        dispatch(setItemOffset(newOffset));
    };
    return (
        <div className='mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center pb-5'>
                <Items currentItems={platFilter.map((data) => {
                    return (
                        <PlatCard plat={data} />
                    )
                }).slice(itemOffset, endOffset)} />
            </div>
            <ReactPaginate
                breakLabel=""
                nextLabel="_____"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="_____"
                renderOnZeroPageCount={null}
                pageClassName="numberPage"
                containerClassName="pageContainer"
                previousClassName="previousBoutton"
                nextClassName="nextBoutton"
                activeclassname="activePage"
                forcePage={0}
            />
        </div>
    );
}