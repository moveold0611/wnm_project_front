import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductMstApi } from '../../../apis/api/product';
import Mypage from '../../Mypage/Mypage';

function JoinProductDetail(props) {
    const param = useParams()
    const productMstId = parseInt(param.productMstId)
    const navigate = useNavigate();

    const getProduct = useQuery(["getProduct"], () => {
        return getProductMstApi(productMstId);
    },{
        refetchOnWindowFocus: false,
        retry: 0
    })

    
    if(getProduct.isLoading) {
        return <></>
    }

    const handleReturnToEditPageClick = () => {
        navigate("/admin/product/edit");
    }

    return (
        <Mypage>
            <div>
                <h3>상품 이름: {getProduct?.data?.data.productName}</h3>
                <p>상품 추가 일자: {getProduct?.data?.data.createDate}</p>
                <p>상품 설명: {getProduct?.data?.data.productDetailText}</p>
                <p>동물 종류 ID: {getProduct?.data?.data.petTypeId}</p>
                <p>동물 종류 이름: {getProduct?.data?.data.petTypeName}</p>
                <p>카테고리 ID: {getProduct?.data?.data.productCategoryId}</p>
                <p>카테고리 이름: {getProduct?.data?.data.productCategoryName}</p>
                <img src={getProduct?.data?.data.productThumbnailUrl} alt=''/>
                <p>상품 썸네일 이미지 주소: {getProduct?.data?.data.productThumbnailUrl}</p>
                <img src={getProduct?.data?.data.productDetailUrl} alt=''/>
                <p>상품 상세정보 이미지 주소: {getProduct?.data?.data.productDetailUrl}</p> 
                {getProduct?.data?.data.productDtlList?.map(dtl => {
                    return <div key={dtl.productDtlId}>
                        <p>상품 상세 Id: {dtl.productDtlId}</p>
                        <p>상품 가격: {dtl.price}</p>
                        <p>사이즈 번호: {dtl.sizeId}</p>
                        <p>사이즈명: {dtl.size.sizeName}</p>
                        <p>실제 재고: {dtl.actualStock}</p>
                        <p>실제 재고 - 주문 재고: {dtl.tempStock}</p>
                        <p>---------------------------------------------</p>
                    </div>
                })}
                <button onClick={handleReturnToEditPageClick}>관리페이지</button>
            </div>
        </Mypage>
    );
}

export default JoinProductDetail;