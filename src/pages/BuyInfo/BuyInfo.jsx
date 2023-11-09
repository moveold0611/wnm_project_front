import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { buyProductListAtom } from '../../store/Atoms/productAtom';
import { useRecoilState } from 'recoil';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../apis/config/instance';
import { getProductApi } from '../../apis/api/product';

function BuyInfo(props) {

    const [ buyProductList, setBuyProductList ] = useRecoilState(buyProductListAtom);
    
    const [ products, setProducts ] = useState([]);

    const getProducts = useQuery(["getProducts"], async () => {
        try {
            const set = new Set(buyProductList.map(buyProduct => buyProduct.orderProductId));
            const buyProductIds = [...set];
            const promises = buyProductIds.map(productId => {
                return new Promise((resolve, reject) => {
                    resolve(getProductApi(productId));
                })
            })

            Promise.all(promises)
            .then(response => {
                setProducts(response.map(resp => resp.data));
            })
        } catch(error) {
            console.log(error)
        }
    })

    if(getProducts.isLoading) {
        return <></>;
    }

    return (
        <>
            <div css={S.SOrderHeader}>
                <h2>주문 / 결제</h2>
            </div>
            <div css={S.SUserInfoBox}>
                <h3>주문 정보</h3>
                <div css={S.InfoInputBox}>
                    <h4>주문자 : </h4><input type="text"/>
                </div>
                <div css={S.InfoInputBox}>
                    <h4>휴대전화 : </h4><input type="text"/>
                </div>
                <div css={S.InfoInputBox}>
                    <h4>주소 : </h4><input type="text" placeholder='우편번호'/>
                    <input type="text" placeholder='주소'/>
                    <input type="text" placeholder='상세주소'/>
                </div>
            </div>
            <div css={S.SBuyProductsBox}>
                <h3>주문 상품</h3>
                {buyProductList.map((product, index) => 
                <li key={index}>
                    <img css={S.SProductImg} src={products?.filter(p => p.productId === product.orderProductId)[0]?.productThumbnail} alt="" />
                    <p>상품 사이즈: {product.size}</p>
                    <p>상품 수량: {product.count}</p>
                    <p>가격: {product.totalPrice}원</p>
                </li>
                )}
            </div>
            <div css={S.SPayBox}>
                <h3>결제 정보</h3>
                <p>주문상품</p>
                <p>배송비: + 0</p>
                <p>최종금액 : { buyProductList.reduce((total, buyProducts) => {
                    return total += buyProducts.totalPrice}, 0).toLocaleString("ko-KR")}원 </p>
            </div>
            <button>결제하기</button>
        </>
    );
}

export default BuyInfo;