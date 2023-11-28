import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';


const PageNation = ({ showCount, totalItemCount, searchData, setSearchData }) => {

    const [ totalCount, setTotalCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(searchData?.pageIndex);
    const [ selectedPage, setSelectedPage ] = useState(currentPage);
    const [ totalPages, setTotalPages ] = useState([]);

    const lastPage = totalCount % showCount === 0 ? totalCount / showCount : Math.floor(totalCount / showCount) + 1;
        
    const startIndex = parseInt(currentPage) % 5 === 0 ? parseInt(currentPage) - 4 : parseInt(currentPage) - (parseInt(currentPage) % 5) + 1;
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;


function getLastPage(totalCount, showCount) {
    const lastPage = totalCount % showCount === 0 ? totalCount / showCount : Math.floor(totalCount / showCount) + 1;
    return lastPage;
}

function getTotalPageIndex(startIndex, endIndex) {
    const totalPageIndex = []
    for(let i = startIndex; i <= endIndex; i++) {
        totalPageIndex.push(i)
    }
    return totalPageIndex;
}


const PageNation = ({ showCount, totalItemCount, searchData, setSearchData }) => {

    const [ totalCount, setTotalCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(searchData?.pageIndex);
    const [ totalPages, setTotalPages ] = useState([]);

    const lastPage = getLastPage(totalCount, showCount);

    const startIndex = getStartIndex(currentPage)

    const endIndex = getEndIndex(startIndex, lastPage);

    const totalPageIndex = getTotalPageIndex(startIndex, endIndex)


    // 전체 페이지 갯수 => 문제 없음
    useEffect(() => {
        setTotalCount(totalItemCount)
    }, [totalItemCount])


    // 카테고리 변경 시 페이지 1페이지로, 전체 페이지 갯수 초기화

    useEffect(() => {        
        // 1페이지로
        setCurrentPage(1)

        // 전체 페이지 갯수 초기화
        setTotalCount(totalItemCount)

        setSearchData({...searchData, pageIndex: 1});
    }, [searchData.petTypeName]);
  
        setSelectedPage(currentPage);
    }, [currentPage]);
    

    useEffect(() => {
        setTotalPages(totalPageIndex);
        if(searchData.searchValue !== "") {
            setCurrentPage(totalPages[0]);
        } else {
            setCurrentPage(currentPage)
        }
    }, [])
    

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }




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
                    css={currentPage === page ? S.selectedPageButton : S.PageButton}
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