import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getProductsApi, removeProductApi } from '../../../apis/api/product';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Mypage from '../../Mypage/Mypage';


function EditProduct(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
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
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])
    
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
    
    const handleEditProductClick = (productMstId) => {
        navigate(`/admin/edit/product/${productMstId}`)
    }

    const handleRemoveProductClick = async (productMstId) => {
        try {
            await removeProductApi(productMstId)
            getProducts.refetch();
        } catch (error) {
            console.log(error)
        }
    }

    const handleNavigateJoinProductDetailPageClick = (productMstId) => {
        navigate(`/admin/product/join/${productMstId}`)
    }

    

    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>상품 관리</h2>
                <div css={S.SSelectBox}>
                    <select option={petType} onChange={handleSearchSelectChange} name='petTypeName'>
                        {petType.map(pt => {
                            return <option key={pt.value} label={pt.label} value={pt.value} />
                        })}
                    </select>
                    <select option={category} onChange={handleSearchSelectChange} name='productCategoryName'>
                        {category.map(ct => {
                            return <option key={ct.value} label={ct.label} value={ct.value}/>
                        })}
                    </select>
                    <select option={sortOption} onChange={handleSearchSelectChange} name='sortOption'>
                        {sortOption.map(so => {
                            return <option key={so.value}  label={so.label} value={so.value}/>
                        })}
                    </select>
                    <select option={searchOption} onChange={handleSearchSelectChange} name='searchOption'>
                        {searchOption.map(op => {
                            return <option key={op.value} label={op.label} value={op.value}/>
                        })}
                    </select>

                    <input type='text' value={searchInput} onChange={handleSearchInputChange}/>
                    <button onClick={handleSearchClick}>검색</button>
                </div>

                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>상품 번호</th>
                            <th>상품 이미지</th>
                            <th>상품 명</th>
                            <th>동물 종류</th>
                            <th>카테고리</th>
                            <th>상품 조회</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => {
                            return <tr key={product.productMstId} css={S.STdBox}>
                                <td>{product.productMstId}</td>
                                <td>
                                    <img css={S.SImg} src={product.productThumbnailUrl} alt="" />
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.petTypeName}</td>
                                <td>{product.productCategoryName}</td>
                                <td>
                                    <button css={S.SSelectButton} onClick={()=>handleNavigateJoinProductDetailPageClick(product.productMstId)}>상세 조회</button>
                                </td>
                                <td>
                                    <button css={S.SEditButton} onClick={()=>handleEditProductClick(product.productMstId)}>수정</button>
                                </td>
                                <td>
                                    <button css={S.SDeleteButton} onClick={()=>handleRemoveProductClick(product.productMstId)}>삭제</button>  
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div css={S.SPageButtonBox}>
                    <button onClick={handleMinusPageClick}>page - 1</button>
                    <button onClick={handlePlusPageClick}>page + 1</button>
                </div>
            </div>
        </Mypage>
    );
}

export default EditProduct;