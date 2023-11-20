import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import {  getSearchedProductsApi } from '../../apis/api/product';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate, useParams } from 'react-router-dom';

function Products(props) {
    const navigate = useNavigate();
    const { type, category } = useParams();

    // const sortOptions = [
    //     {value: "상품명", label: "상품명"},
    //     {value: "낮은가격", label: "낮은가격순"},
    //     {value: "높은가격", label: "높은가격순"}
    // ]
    //      <select 
    //     options={sortOptions}
    //     onChange={handleSortOptionChange}>
    //         {sortOptions.map(option => {
    //             return <option key={option.value} value={option.value}>{option.label}</option>
    //         })}
    // </select> 
    // {product.productDetailData.map(size => {
    // return <p>{size.price}</p>
    // })} 
    
    const [ searchData, setSearchData ] = useState({
        petTypeName: type,
        productCategoryName: !!category ? category : 'all',
        searchOption: "all",
        searchValue: "",
        sortOption: "name",
        pageIndex: 1
    });

    const [ searchValue, setSearchValue ] = useState("");

    const getProducts = useQuery(["getProducts", searchData], async () => {
        try {
            const response = getSearchedProductsApi(searchData);
            console.log(response)
            return await response
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        setSearchValue("");
        setSearchData({
            ...searchData,
            petTypeName: type,
            productCategoryName: !!category ? category : 'all',
            searchValue: ""
        })
    }, [type, category])

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchButtonClick = () => {
        setSearchData({
            ...searchData,
            searchValue
        })
        getProducts.refetch();
    }

    const handleProductOnclick = (e) => {
        navigate(`/product/${e.target.id}`)
        console.log(e.target.id)
    }

    const handleMinusPageClick = () => {
        if(searchData.pageIndex === 1) {
            alert("첫 페이지 입니다.");
            return;
        }
        setSearchData({
            ...searchData,
            pageIndex: searchData.pageIndex - 1
        })
    }

    const handlePlusPageClick = () => {
        setSearchData({
            ...searchData,
            pageIndex: searchData.pageIndex + 1
        })
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div>
                    <input type="text" name='value' onChange={handleSearchValueChange} value={searchValue}/>
                    <button onClick={handleSearchButtonClick}>검색</button>
                </div>
                <div css={S.SProductContainer}>
                    {!getProducts.isLoading && getProducts?.data?.data.map((product, index) => {
                        return  <div css={S.SProductBox} key={product.productMstId} >
                                    <ul>
                                        <li onClick={handleProductOnclick}>
                                            <img id={product.productMstId} src={product.productThumbnailUrl} alt="" />
                                            <p>{product.productName}</p>
                                        </li>
                                    </ul>
                                </div>
                    })}
                </div>
                <div css={S.SButtonBox}>
                    <button onClick={handleMinusPageClick}>{"<"}</button>
                    <button onClick={handlePlusPageClick}>{">"}</button>
                </div>
            </div>
        </RootContainer>
    );
}

export default Products;