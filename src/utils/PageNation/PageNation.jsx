import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';

const PageNation = ({ showCount, totalItemCount, propsData, setPropsData }) => {

    const [ count, setCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(propsData.pageIndex);
    const [selectedPage, setSelectedPage] = useState(currentPage);

    const [totalPages, setTotalPages] = useState([]);
    
    const totalPage = Math.ceil(count / showCount);
    const ttPage = Array.from({ length: totalPage }, (_, index) => index + 1);

    useEffect(() => {
        setCount(totalItemCount)   
    }, [totalItemCount])
    
    useEffect(() => {
        setTotalPages(ttPage);
    }, [totalPage]);

    useEffect(() => {
        setSelectedPage(currentPage);
      }, [currentPage]);
    
    
    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const newSearchData = {...propsData, pageIndex: currentPage};
        setPropsData(newSearchData);
        
      }, [currentPage , propsData.productCategoryName, propsData.pageIndex]);
    
    return (
        <div>
            <button
            onClick={() => handlePageClick(propsData.pageIndex - 1)}
            disabled={currentPage === 1}
            >
                {"<"}
            </button>
            
            {totalPages.map(page => (
                <button 
                    css={selectedPage === page ? S.selectedPageButton : S.PageButton}
                    name="pageIndex"
                    onClick={() => handlePageClick(page)}>
                    {page}
                </button>
            ))}
            
            <button
            onClick={() => handlePageClick(propsData.pageIndex + 1)}
            disabled={currentPage === totalPages.length}
            >
                {">"}
            </button>
        </div>
    )
}

export default PageNation;