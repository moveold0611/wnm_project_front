import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
/** @jsxImportSource @emotion/react */
import * as S from '../Products/Style';
import { getAllProductsApi, getProductsCountApi } from '../../apis/api/product';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useNavigate, useParams } from 'react-router-dom';
import PageNation from '../../utils/PageNation/PageNation';

function Products(props) {

    const navigate = useNavigate();
    const itemCount = 12;
    const { type, category } = useParams();
    const [ searchValue, setSearchValue ] = useState("");
    const [ products, setProducts ] = useState();
    const [ count, setCount ] = useState();

    const sortOptions = [
        {value: "name", label: "상품명"},
        {value: "lowprice", label: "낮은가격순"},
        {value: "highprice", label: "높은가격순"}
    ]



    const [ searchData, setSearchData ] = useState({
        petTypeName: type,
        productCategoryName: !!category ? category : 'all',
        searchOption: "all",
        searchValue: "",
        sortOption: "name",
        pageIndex: 1
    });

    const getProducts = useQuery(["getProducts", searchData], async () => {
        try {
            const response = getAllProductsApi(searchData);
            return await response
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response?.data)
            setProducts(response?.data)
        }
    })

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

    useEffect(() => {
        setSearchValue("");
        setSearchData({
            ...searchData,
            petTypeName: type,
            productCategoryName: !!category ? category : 'all',
            searchValue: ""
        })
    }, [type, category])

    const handleSortOptionChange = (e) => {
        searchData.sortOption = e.target.value
        getProducts.refetch();
    }

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchButtonClick();
        }
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
    }
    
    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SSubContainer}>
                    <div css={S.SSelectBox}>
                        <select 
                            options={sortOptions}
                            onChange={handleSortOptionChange}>
                                {sortOptions.map(option => {
                                    return <option name='sortOption' key={option.label} value={option.value}>{option.label}</option>
                                })}
                        </select> 
                        <input type="text" name='value' onKeyDown={handleOnKeyPress} onChange={handleSearchValueChange} value={searchValue}/>
                        <button onClick={handleSearchButtonClick}>검색</button>
                    </div>
                </div>
                <div css={S.SProductContainer}>
                    {!getProducts.isLoading && getProducts?.data?.data.map((product) => {
                        return  <div css={S.SProductBox} key={product.productMstId} >
                                    <ul>
                                        <li onClick={handleProductOnclick}>
                                            <img id={product.productMstId} src={product.productThumbnailUrl} alt="" />
                                            <h3>{product.productName}</h3>
                                            <p>
                                                가격 : {product.tempStock === 0 ? "품절" : product.minPrice?.slice(4, product.minPrice.lastIndexOf())}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                    })}
                </div>
                <div>
                    <PageNation showCount={itemCount} totalItemCount={count} propsData={searchData} setPropsData={setSearchData} />
                </div>
            </div>
        </RootContainer>
    );
}

export default Products;