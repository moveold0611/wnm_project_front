import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery } from "react-query";
import { getProductsCountApi } from "../../apis/api/product";

const PageNation = ({products, searchData, setSearchData, }) => {

    const itemCount = 12;
    const [ count, setCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(searchData.pageIndex);
    const [selectedPage, setSelectedPage] = useState(currentPage);

    const getProductsPagenation = useQuery(["getProductsPageNation"], async () => {
        try {
            const response = getProductsCountApi(searchData);
            console.log(response)
            return response;
        } catch (error) {
            console.error("Error in getProductsCountApi:", error);
            throw error;
        }
    },
    {
        retry: 0,
        onSuccess: response => {
            setCount(response.data)
        }
    })  
    const [totalPages, setTotalPages] = useState([]);
    
    const totalPage = Math.ceil(count / itemCount);
    const ttPage = Array.from({ length: totalPage }, (_, index) => index + 1);
    
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
        const newSearchData = {...searchData, pageIndex: currentPage};
        setSearchData(newSearchData);
        
        getProductsPagenation.refetch();
    }, [currentPage , searchData.productCategoryName, searchData.pageIndex]);
    
    return (
        <div>
            <button
            onClick={() => handlePageClick(searchData.pageIndex - 1)}
            disabled={currentPage === 1}
            >
                {"<"}
            </button>
            
            {totalPages.map((page, index) => (
                <button 
                    css={selectedPage === page ? S.selectedPageButton : S.PageButton}
                    name="pageIndex"
                    onClick={() => handlePageClick(page)}
                    key={index}>
                    {page}
                </button>
            ))}
            
            <button
            onClick={() => handlePageClick(searchData.pageIndex + 1)}
            disabled={currentPage === totalPages.length}
            >
                {">"}
            </button>
        </div>
    )
}

export default PageNation;