import React, { useEffect, useState } from 'react';
import { getProductsApi, removeProduct } from '../../apis/api/product';
import { useQuery } from 'react-query';
import { Navigate, Route, useNavigate, useSearchParams } from 'react-router-dom';
import EditProductDetailPage from './EditProductDetailPage/EditProductDetailPage';


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
        console.log(searchData)
        const response = await getProductsApi(searchData);
        return response;
    },
    { 
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => setProductList(response?.data)
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
        searchData.pageIndex = 1;
        getProducts.refetch();
    }

    const handleSearchSelectChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
        
    }
    


    const handleEditProductClick = () => {
    }

    const handleRemoveProductClick = () => {
    }

    return (
        <>
            <div>
                <select option={petType} onChange={handleSearchSelectChange} name='petTypeName'>
                    {petType.map(pt => {
                        return <option key={pt.value} label={pt.label} value={pt.value}/>
                    })}
                </select>
                <select option={category} onChange={handleSearchSelectChange} name='productCategoryName'>
                    {category.map(ct => {
                        return <option key={ct.value} label={ct.label} value={ct.value}/>
                    })}
                </select>
                <select option={sortOption} onChange={handleSearchSelectChange} name='sort'>
                    {sortOption.map(so => {
                        return <option key={so.value}  label={so.label} value={so.value}/>
                    })}
                </select>
                <select option={searchOption} onChange={handleSearchSelectChange} name='option'>
                    {searchOption.map(op => {
                        return <option key={op.value} label={op.label} value={op.value}/>
                    })}
                </select>

                <input type='text' value={searchInput} onChange={handleSearchInputChange}/>
                <button onClick={handleSearchClick}>검색</button>
            </div>
            {productList.map(product => {
                return <ul key={product.productMstId}>
                    <div>
                        <img src={product.productThumbnailUrl} width='60px' alt=''/>
                        상품명: {product.productName} / 
                        동물종류: {product.petTypeName} / 
                        카테고리: {product.productCategoryName} /
                        <button onClick={handleEditProductClick}>수정</button>
                        <button onClick={handleRemoveProductClick}>삭제</button>
                    </div>
                </ul>
            })}
            <button onClick={handleMinusPageClick}>page - 1</button>
            <button onClick={handlePlusPageClick}>page + 1</button>
        </>
    );
}

export default EditProduct;