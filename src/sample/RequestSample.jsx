import React from 'react';
import { addIncoming, getIncoming } from '../apis/api/incoming';
import { addOutgoing } from '../apis/api/outgoing';
import { addProductApi, getProductApi, getProductMstApi, getProductsApi, removeProductApi, updateProductApi } from '../apis/api/product';
import { addOrderApi } from '../apis/api/order';

function RequestSample(props) {




// ==========================  입 출고  ================================


    // 입고 조회 요청
    const testInt1 = 1; // productDtlId
    getIncoming(testInt1);



    // 입고 추가 요청
    const testInt2 = 1; // productDtlId
    const testCount1 = 1; // count
    addIncoming(testInt2, testCount1)



    // 출고 조회 요청
    const testInt3 = 1;
    getIncoming(testInt3);



    // 출고 추가 요청
    const testInt4 = 1; // productDtlId
    const testCount2 = 1; // count
    addOutgoing(testInt4, testCount2);










// ========================== 상품 ===========================================


    // 상품 Master Id로 조회 요청
    const testInt5 = 1; // productMstId
    getProductMstApi(testInt5);



    // 상품 Detail Id로 조회 요청
    const testInt6 = 1; // productDtlId
    getProductApi(testInt6)



    // 상품 복수 조회 요청
    const RequestBody1 = {
        petTypeName: "all", // "강아지", "고양이"
        productCategoryName: "all", // "home-living", "walk", "movement", "fashion", "toy"
        searchOption: "all", // "name", "number"
        searchValue: "",
        sortOption: "name", // "number"
        pageIndex: 1
    }
    getProductsApi(RequestBody1);



    // 관리자 상품 추가 요청
    const RequestBody2 = {
        productName: "",
        price: 0,
        petTypeId: 0,
        productCategoryId: 0,
        productDetailText: "",
        productThumbnailUrl: "",
        productDetailUrl: ""
    }
    addProductApi(RequestBody2);



    // 관리자 상품 수정 요청
    const RequestBody3 = {
        productMstId: 0,
        productName: "",
        productDetailText: "",
        productThumbnailUrl: "",
        productDetailUrl: "",
        no: "",  // 사이즈가 없는 항목은 비워서
        XS: "",  // 사이즈별 가격을 문자열로 보낼 것
        S: "",
        M: "",
        L: "",
        XL: "",
        XXL: ""
    }
    updateProductApi(RequestBody3);


    
    // 관리자 상품 삭제 요청
    const testInt7 = 1; // productMstId
    removeProductApi(testInt7);












// ================================ 주문 =========================================

   // 주문 추가 요청
    const option1 = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
    }
    const RequestBody4 = {
        userId: 0,
        shippingName: "",
        shippingPhone: "",
        shippingAddressNumber: "",
        shippingAddressName: "",
        shippingAddressDetailName: "",
        orderProductData: [
            {
                productDtlId: 0,
                count: 0
            }
        ]
    }
    addOrderApi(RequestBody4, option1);









    const handleSampleTestClick = async () => {
        const response = await getIncoming();
        console.log(response)
    }

    return (
        <div>
            <button onClick={handleSampleTestClick}>Request</button>
        </div>
    );
}

export default RequestSample;
