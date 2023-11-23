import { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery } from "react-query";
import { getProductsCountApi } from "../../apis/api/product";

const PageNation = ({products, searchData, setSearchData}) => {

    const itemCount = 12;
    const [ count, setCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);

    const getProductsPagenation = useQuery(["getProductsPageNation"], async () => {
        try {
            const response = getProductsCountApi(searchData);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    {
        retry: 0,
        onSuccess: response => {
            setCount(response.data)
        }
    })  
    
    // const startIndex = (currentPage - 1) * itemCount;
    // const endIndex = Math.min(startIndex + itemCount, products?.length);

    const totalPage = Math.ceil(count / itemCount);
    
    const ttPage = [];
    for(let i = 1; i <= totalPage; ++i) {
        ttPage.push(i)
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
        const newSearchData = {...searchData, pageIndex: page}
        setSearchData(newSearchData)
    }

    const handlePageChange = (test) => {
        console.log(test)
        setCurrentPage(test);
        const newSearchData = {...searchData, pageIndex: test}
        setSearchData(newSearchData)
    };

    // let newSearchData = {};
    // const handlePagePlus = () => {
    //     setCurrentPage(currentPage + 1);
    //     newSearchData = {...searchData, pageIndex: currentPage + 1}
    //     setSearchData(newSearchData)
    // };

    // const handlePageMinus = () => {
    //     setCurrentPage(currentPage - 1);
    //     newSearchData = {...searchData, pageIndex: currentPage - 1}
    //     setSearchData(newSearchData)
    // };

    return (
        <div>
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 1}
            >
                {"<"}
            </button>
            
            {ttPage.map(page => (
                <button 
                    css={S.PageButton}
                    name="pageIndex"
                    onClick={() => handlePageClick(page)}>
                    {page}
                </button>
            ))}
            
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === totalPage}
            >
                {">"}
            </button>
        </div>
    )
}

export default PageNation;