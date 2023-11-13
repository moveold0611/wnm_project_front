import React, { useEffect, useState } from 'react';
import { getProductsApi, removeProduct } from '../../apis/api/product';
import { useQuery } from 'react-query';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import EditProductDetailPage from './EditProductDetailPage/EditProductDetailPage';


function EditProduct(props) {
    const navigate = useNavigate();
    const [ productList, setProductList ] = useState([]);
    const [ searchData, setSearchData ] = useState({
        petTypeName: "all",
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

    const searchOption = { value: "제목", label: "제목"}

    const sortOption = [
        { value: "상품명", label: "상품명"},
        { value: "낮은가격", label: "낮은가격"},
        { value: "높은가격", label: "높은가격"},
    ]
    

    const getProducts = useQuery(["getProducts"], async () => {
        const response = getProductsApi(searchData);
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => setProductList(response?.data)
    });

    useEffect(() => {
        getProductsApi(searchData);
        getProducts.refetch();
    }, [searchData.pageIndex])

    if(getProducts.isLoading) {
        return <></>
    }


    const handleTestClick = () => {
        console.log(productList)
    }

    const handlePlusPageClick = () => {
        setSearchData({            
            ...searchData,
            pageIndex: searchData.pageIndex + 1});
    }

    const handlePlusMinusClick = () => {
        if(searchData.pageIndex === 1) {
            alert("1페이지입니다.")
            return
        }
        setSearchData({
            ...searchData,
            pageIndex: searchData.pageIndex - 1});
    }

    const handleSearchDataOnChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const handleDeleteProductClick = async (e) => {
        await removeProduct(e.target.value)
        getProducts.refetch()
    }

    const handleSearchClick = async () => {
        await getProductsApi(searchData);
        getProducts.refetch();
    }

    const handleEditProductClick = (productId) => {
        navigate(`/admin/edit/product/${productId}`)
    }

    return (
        <>
            <button onClick={handleTestClick}>test</button>
            <div>
                종류: <select name='petTypeName' onChange={handleSearchDataOnChange}>
                    {petType.map((pt) => {
                        return <option key={pt.value} value={pt.value}>{pt.label}</option>
                    })}
                </select>

                카테고리: <select name='productCategoryName' onChange={handleSearchDataOnChange}>
                {category.map((cg) => {
                        return <option key={cg.value} value={cg.value}>{cg.label}</option>
                    })}
                </select>

                검색옵션: <select name='option' onChange={handleSearchDataOnChange}>
                    <option key={searchOption.value} value={searchOption.value}>{searchOption.label}</option>
                </select>

                정렬: <select name='sort' onChange={handleSearchDataOnChange}>
                {sortOption.map((so) => {
                        return <option key={so.value} value={so.value}>{so.label}</option>
                    })}
                </select>
                검색어: <input onChange={handleSearchDataOnChange} type='text' name='value'></input>
                <button onClick={handleSearchClick}>검색</button>
            </div>
            <ul>
            {productList.map(product => 
                <li key={product.productId}>
                    <div>
                        <img src={product.productThumbnail} width="60px" alt=''/>
                        상품 번호: {product.productId} / 
                        상품 이름 : {product.productName} / 
                        상품 가격 : {product.productPrice} /
                        <button onClick={() => handleEditProductClick(product.productId)}>수정</button>
                        <button value={product.productId} onClick={handleDeleteProductClick}>삭제</button>
                    </div>
                </li>
            )}
            </ul>
            <button onClick={handlePlusMinusClick}>page - 1</button>
            <button onClick={handlePlusPageClick}>page + 1</button>
        </>
    );
}

export default EditProduct;