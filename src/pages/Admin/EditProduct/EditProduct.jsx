import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getProductsApi, removeProductApi } from '../../../apis/api/product';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import RootContainer from '../../../components/RootContainer/RootContainer'


function EditProduct(props) {
    const navigate = useNavigate();
    const [ productList, setProductList ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchData, setSearchData ] = useState({
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'all',
        searchValue: '',
        sortOption: 'number',
        pageIndex: 1});
    const petType = [
        { value: "all", label: "전부"},
        { value: "dog", label: "강아지"},
        { value: "cat", label: "고양이"}
    ]
    const category = [
        { value: "all", label: "전부" },
        { value: "home-living", label: "홈·리빙" },
        { value: "walk", label: "산책" },
        { value: "movement", label: "이동" },
        { value: "fashion", label: "패션" },
        { value: "toy", label: "장난감" }
    ]

    const searchOption = [
        { value: "name", label: "제목"},
        { value: "number", label: "마스터아이디"}
    ]

    const sortOption = [
        { value: "name", label: "상품명"},
        { value: "number", label: "상품번호"},
    ]
    
    useEffect(() => {
        setSearchData({
            ...searchData,
            searchValue: searchInput
        })
    }, [searchInput])



    const getProducts = useQuery(["getProducts", searchData.pageIndex], async () => {
        const response = await getProductsApi(searchData);
        return response;
    },
    { 
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            console.log(response?.data)
            setProductList(response?.data)}
    });

    if(getProducts.isLoading) {
        return <></>
    }


    const handlePlusPageClick = () => {
        setSearchData({
            ...searchData,
            pageIndex: searchData.pageIndex + 1
        })
    }


    const handleMinusPageClick = () => {
        if(searchData.pageIndex === 1) {
            alert("1페이지입니다.")
            return
        }
        setSearchData({
            ...searchData,
            pageIndex: searchData.pageIndex - 1
        })
    }

    console.log(searchData)



    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearchClick = () => {

        console.log(searchData)
        searchData.pageIndex = 1;
        getProducts.refetch();
    }

    const handleSearchSelectChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
        
    }
    

    const handleEditProductClick = (productMstId) => {
        console.log(productMstId)
        navigate(`/admin/edit/product/${productMstId}`)
    }

    const handleRemoveProductClick = async (productMstId) => {
        try {
            await removeProductApi(productMstId)
            getProducts.refetch();
        } catch (error) {
            
        }
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
            <div css={S.STopContainer}>
                <select option={petType} onChange={handleSearchSelectChange} name='petTypeName' css={S.SSelect}>
                    {petType.map(pt => {
                        return <option key={pt.value} label={pt.label} value={pt.value} />
                    })}
                </select>
                <select option={category} onChange={handleSearchSelectChange} name='productCategoryName' css={S.SSelect}>
                    {category.map(ct => {
                        return <option key={ct.value} label={ct.label} value={ct.value}/>
                    })}
                </select>
                <select option={sortOption} onChange={handleSearchSelectChange} name='sortOption' css={S.SSelect}>
                    {sortOption.map(so => {
                        return <option key={so.value}  label={so.label} value={so.value}/>
                    })}
                </select>
                <select option={searchOption} onChange={handleSearchSelectChange} name='searchOption' css={S.SSelect}>
                    {searchOption.map(op => {
                        return <option key={op.value} label={op.label} value={op.value}/>
                    })}
                </select>

                <input type='text' value={searchInput} onChange={handleSearchInputChange} css={S.SInput}/>
                <button onClick={handleSearchClick} css={S.SButton}>검색</button>
            </div>
            {productList.map(product => {
                return <ul key={product.productMstId}>
                    <div css={S.SContainer}>
                        <img src={product.productThumbnailUrl} width='150px' alt=''/>
                        <div>상품번호: {product.productMstId}</div>
                        <div>상품명: {product.productName}</div> 
                        <div>동물종류: {product.petTypeName}</div>
                        <div>카테고리: {product.productCategoryName}</div> 
                        <button onClick={()=>handleEditProductClick(product.productMstId)} css={S.SButton2}>수정</button>
                        <button onClick={()=>handleRemoveProductClick(product.productMstId)} css={S.SButton2}>삭제</button>
                    </div>
                </ul>
            })}
            <button onClick={handleMinusPageClick}>page - 1</button>
            <button onClick={handlePlusPageClick}>page + 1</button>
            </div>
        </RootContainer>
    );
}

export default EditProduct;