import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function getTotalPageIndex(startIndex, endIndex) {
    const totalPageIndex = []
    for(let i = startIndex; i <= endIndex; i++) {
        totalPageIndex.push(i)
    }
    return totalPageIndex;
}

function getLastPage(showCount, totalCount) {
    const lastPage = totalCount % showCount === 0 ? totalCount / showCount : Math.floor(totalCount / showCount) + 1;
    return lastPage;
}

function getStartIndex(currentPage) {
    const startIndex = parseInt(currentPage) % 5 === 0 ? parseInt(currentPage) - 4 : parseInt(currentPage) - (parseInt(currentPage) % 5) + 1;
    return startIndex;
}

function getEndIndex(startIndex, lastPage) {
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
    return endIndex;
}

const PageNation = ({ showCount, totalItemCount, searchData, setSearchData }) => {

    const [ totalCount, setTotalCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(searchData?.pageIndex);
    const [ selectedPage, setSelectedPage ] = useState(currentPage);
    const [ totalPages, setTotalPages ] = useState([]);

    const lastPage = getLastPage(showCount, totalItemCount);
    const startIndex = getStartIndex(currentPage);
    const endIndex = getEndIndex(startIndex, lastPage);
    const totalPageIndex = getTotalPageIndex(startIndex, endIndex);

    useEffect(() => {
        setTotalCount(totalItemCount)   
    }, [totalItemCount])
    
    useEffect(() => {
        setTotalPages(totalPageIndex);
    }, [searchData.productCategoryName]);
    
    useEffect(() => {
        setSelectedPage(currentPage);
    }, [currentPage]);
    
    useEffect(() => {
        if(searchData.searchValue !== "") {
            setCurrentPage(totalPages[0]);
        } else {
            setCurrentPage(currentPage)
        }
    }, [searchData.searchValue])
    
    const handlePageClick = (page) => {
        setCurrentPage(page);
    }
    
    useEffect(() => {
        const newSearchData = {...searchData, pageIndex: currentPage};
        setSearchData(newSearchData);
    }, [currentPage]);
    
    useEffect(() => {
        const newSearchData = {...searchData, pageIndex: 1};
        setSearchData(newSearchData);
        setCurrentPage(1)
    }, [searchData.productCategoryName])
    
    return (
        <div>
            <button
            onClick={() => handlePageClick(searchData.pageIndex - 1)}
            disabled={currentPage === 1}
            >
                {"<"}
            </button>
            
            {totalPageIndex.map((page, index) => (
                <button 
                    css={selectedPage === page ? S.selectedPageButton : S.PageButton}
                    name="totalPageIndex"
                    onClick={() => handlePageClick(page)}
                    key={index}>
                    {page}
                </button>
            ))}
            
            <button
            onClick={() => handlePageClick(searchData.pageIndex + 1)}
            disabled={currentPage === lastPage}
            >
                {">"}
            </button>
        </div>
    )
}

export default PageNation;
