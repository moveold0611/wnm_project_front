import React, { useState } from 'react';
import { useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import { getProductsApi } from '../../apis/api/product';
import { useParams } from 'react-router-dom';


function Products(props) {

    // const { petType, productCategory, pageIndex } = useParams();
    
    const [ isClicked, setIsClicked ] = useState(false);
    const [ products, setProducts ] = useState();
    const [ sortOption, setSortOption ] = useState("");
    const [ searchValue, setSearchValue ] = useState("");
    const [ petType , setPetType ] = useState({
        category: "전체",
    })

    let productType = "all";

    const options = [
        {value: "상품명", label: "상품명"},
        {value: "낮은가격", label: "낮은가격순"},
        {value: "높은가격", label: "높은가격순"}
    ]
   
    const getProducts = useQuery(["getProducts"], async () => {
        try {
            // petType, productCategory, searchOption, value, sort, page
            const response = getProductsApi(petType.category, productType, "제목", sortOption, 1);
            console.log((await response).data)
            return await response
            
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setProducts(response.data)
        }
    })

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    }

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    const handleDogCategoryClick = (e) => {
        setPetType({
            category: e.target.id
        })
        setIsClicked(true);
        if(isClicked) {
            setIsClicked(!isClicked);
        }
    }
    const handleCatCategoryClick = (e) => {
        setPetType({
            category: e.target.id
        })
        setIsClicked(true);
        if(isClicked) {
            setIsClicked(!isClicked);
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
                        <li id="고양이" onClick={handleCatCategoryClick}>cat</li>
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
                            {petType === "고양이" ? <></> : <li id='패션' onClick={handleProductCategoryClick}>fashion</li> }
                        </ul>
                    </div> : <></>}
                
            </div>
            <div>
                <select 
                    options={options}
                    onChange={handleSortOptionChange}>
                        {options.map(option => {
                            return <option>{option.value}</option>
                        })}
                </select>
                <input type="text" name='serchValue' onChange={handleSearchValueChange} value={searchValue}/>
            </div>
            <div css={S.SProductContainer}>
                {!getProducts.isLoading && getProducts?.data?.data.map(product => {
                    return  <div css={S.SProductBox} >
                                <ul>
                                    <li>
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