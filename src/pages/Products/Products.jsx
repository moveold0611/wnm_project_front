import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import {  getSearchedProductsApi } from '../../apis/api/product';

function Products(props) {

    const [ isClicked, setIsClicked ] = useState(false);
    const [ products, setProducts ] = useState();

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
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: "제목",
        searchValue: "",
        sortOption: "상품명",
        pageIndex: 1
    });

    const getProducts = useQuery(["getProducts"], async () => {
        try {
            const response = getSearchedProductsApi(searchData);
            console.log(response)
            return await response
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setProducts(response.data)
        }
    })

    useEffect(() => {
        getSearchedProductsApi(searchData);
        getProducts.refetch();
    }, [searchData.pageIndex, searchData.sort])

    const handleSearchValueChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const handleSearchButtonClick = () => {
        getSearchedProductsApi(searchData);
        getProducts.refetch();
    }
    
    const handleDogCategoryClick = async (e) => {
        setSearchData({
            ...searchData,
            petTypeName: e.target.id
        })
        await getSearchedProductsApi(searchData);
        getProducts.refetch();
        
        setIsClicked(true);
    
        
    }
    
    const handleCatCategoryClick = async (e) => {
        setSearchData({
            ...searchData,
            petTypeName: e.target.id
        })
        await getSearchedProductsApi(searchData);
        getProducts.refetch();
        
        setIsClicked(true);
 
    }

    const handleProductCategoryClick = async (e) => {
        setSearchData({
            ...searchData,
            productCategoryName: e.target.id
        })
        await getSearchedProductsApi(searchData);
        getProducts.refetch();
    }
    console.log(searchData.productCategoryName)

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
        <div>
            <div>
                <div>
                    <ul css={S.SCategoryBox}>
                        <li id='강아지' onClick={handleDogCategoryClick}>dog</li>
                        <li id='고양이' onClick={handleCatCategoryClick}>cat</li>
                    </ul>
                </div>
                {isClicked ? 
                    <div>
                        <ul css={S.SProductCategoryBox}>
                            {/* <li id='all' onClick={handleProductCategoryClick}>all</li> */}
                            <li id='홈·리빙' name="홈·리빙" onClick={handleProductCategoryClick}>homeliving</li>
                            <li id='산책' name="산책" onClick={handleProductCategoryClick}>outdoor</li>
                            <li id='이동' name="이동" onClick={handleProductCategoryClick}>carrier</li>
                            <li id='장난감' name="장난감" onClick={handleProductCategoryClick}>toy</li>
                            {products.petTypeName === "고양이" ? <></> : <li id='패션' name="패션" onClick={handleProductCategoryClick}>fashion</li> }
                        </ul>
                    </div> 
                    : 
                    <></>}
            </div>
            <div>
                <input type="text" name='value' onChange={handleSearchValueChange}/>
                <button onClick={handleSearchButtonClick}>검색</button>
            </div>
            <div css={S.SProductContainer}>
                {!getProducts.isLoading && getProducts?.data?.data.map((product, index) => {
                    return  <div css={S.SProductBox} >
                                <ul >
                                    <li key={index}>
                                        <img src={product.productThumbnailUrl} alt="" />
                                        <p>{product.productName}</p>
                                    </li>
                                </ul>
                            </div>
                })}
                <div css={S.SButtonBox}>
                    <button onClick={handleMinusPageClick}>{"<"}</button>
                    <button onClick={handlePlusPageClick}>{">"}</button>
                </div>
            </div>
        </div>
    );
}

export default Products;