import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery } from "react-query";
import { getProductsCountApi } from "../../apis/api/product";

const PageNation = ({products, searchData, setSearchData}) => {

    const itemCount = 12;
    const [ count, setCount ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(searchData.pageIndex);

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
    
    const totalPage = Math.ceil(count / itemCount);
    
    const ttPage = [];
    for(let i = 1; i <= totalPage; ++i) {
        ttPage.push(i)
    }

    useEffect(() => {
        const newSearchData = {...searchData, pageIndex: currentPage}
        setSearchData(newSearchData)
    }, [currentPage])

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
            
            {ttPage.map(page => (
                <button 
                    css={S.PageButton}
                    name="pageIndex"
                    onClick={() => handlePageClick(page)}>
                    {page}
                </button>
            ))}
            
            <button
            onClick={() => handlePageClick(searchData.pageIndex + 1)}
            disabled={currentPage === totalPage}
            >
                {">"}
            </button>
        </div>
    )
}

export default PageNation;