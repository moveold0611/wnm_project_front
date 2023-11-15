import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import { getProductsApi, getSearchedProductsApi } from '../../apis/api/product';
import { useParams } from 'react-router-dom';


function Products(props) {

    // const { petType, productCategory, pageIndex } = useParams();
    
    // const queryClient = useQueryClient();
    // const productList = queryClient.getQueryState("getProducts");

    const [ isClicked, setIsClicked ] = useState(false);
    const [ products, setProducts ] = useState();
    const [ sortOption, setSortOption ] = useState("");
    const [ searchValue, setSearchValue ] = useState("");
    // const [ petType , setPetType ] = useState({
    //     category: "전체",
    // })
    const [ searchData, setSearchData ] = useState({
        petType: "all",
        productCategoryName: "all",
        option: "제목",
        value: "",
        sort: "상품명",
        pageIndex: 1
    });

    const petType = [
        { value: "all", label: "전부"},
        { value: "강아지", label: "강아지"},
        { value: "고양이", label: "고양이"}
    ]
    const category = [
        { value: "all", label: "전부" },
        { value: "홈·리빙", label: "홈·리빙" },
        { value: "산책", label: "산책" },
        { value: "이동", label: "이동" },
        { value: "패션", label: "패션" },
        { value: "장난감", label: "장난감" }
    ]

    let productType = "all";

    const sortOptions = [
        {value: "상품명", label: "상품명"},
        {value: "낮은가격", label: "낮은가격순"},
        {value: "높은가격", label: "높은가격순"}
    ]
   
    const getProducts = useQuery(["getProducts"], async () => {
        try {
            console.log(petType)
            // petType, productCategory, searchOption, value, sort, page
            const response = getSearchedProductsApi(searchData);
            console.log(await response.data)
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

    const handleSortOptionChange = (e) => {
        setSearchData({
            ...searchData,
            sort: e.tartget.value
        })

    }

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    const handleDogCategoryClick = (e) => {
        searchData.petType = e.target.id
        setIsClicked(true);
        if(isClicked) {
            setIsClicked(!isClicked);
        }
    }
    console.log(searchData)


    const handleCatCategoryClick = async (e) => {
        searchData.petType = e.target.id
        console.log(petType)
        setIsClicked(true);
        if(isClicked) {
            setIsClicked(!isClicked);
        }
        
        try {
            console.log(searchData);
            const response = await getSearchedProductsApi(searchData);
            return response;
        } catch (error) {
            
        }
    }

    const handleProductCategoryClick = (e) => {
        productType = e.target.id;
        console.log(productType)
        
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
                            <li id='홈·리빙' onClick={handleProductCategoryClick}>homeliving</li>
                            <li id='산책' onClick={handleProductCategoryClick}>outdoor</li>
                            <li id='이동' onClick={handleProductCategoryClick}>carrier</li>
                            <li id='장난감' onClick={handleProductCategoryClick}>toy</li>
                            {petType.category === "고양이" ? <></> : <li id='패션' onClick={handleProductCategoryClick}>fashion</li> }
                        </ul>
                    </div> : <></>}
                
            </div>
            <div>
                <select 
                    options={sortOptions}
                    onChange={handleSortOptionChange}>
                        {sortOptions.map(option => {
                            return <option key={option.value} value={option.value}>{option.value}</option>
                        })}
                </select>
                <input type="text" name='serchValue' onChange={handleSearchValueChange} value={searchValue}/>
            </div>
            <div css={S.SProductContainer}>
                {!getProducts.isLoading && getProducts?.data?.data.map(product => {
                    return  <div css={S.SProductBox} >
                                <ul>
                                    <li id={product.productName}>
                                        <img src={product.productThumbnail} alt="" />
                                        <p>{product.productName}</p>
                                        <p>{product.productPrice}</p>
                                    </li>
                                </ul>
                            </div>
                })}
            </div>
        </div>
    );
}

export default Products;