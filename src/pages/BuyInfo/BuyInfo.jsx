import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { getProductApi } from '../../apis/api/product';
import { useNavigate } from 'react-router-dom';
import { addOrderApi } from '../../apis/api/order';

function BuyInfo(props) {

    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ buyProductList, setBuyProductList ] = useState(JSON.parse(localStorage.getItem("orderData")));
    const [ products, setProducts ] = useState([]);

    const [ shippingUserInfo, setShippingUserInfo ] = useState({
        name: principal?.data?.data?.name,
        phone: principal?.data?.data?.phoneNumber,
        addressNumber: principal?.data?.data?.defaultAddressNumber,
        addressName: principal?.data?.data?.defaultAddressName,
        addressDetailName: principal?.data?.data?.defaultAddressDetailName
    });

    const [ priceInfo, setPriceInfo ] = useState({
        buyPricetotal: 0,
        shippingCost: 0,
        finalPrice: 0
    });

    const addressDetailNameRef = useRef();
    
    const getProducts = useQuery(["getProducts"], async () => {
        try {
            const set = new Set(buyProductList.map(buyProduct => buyProduct.productId));
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


    useEffect(() => {
        const iamprot = document.createElement("script");
        iamprot.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamprot);
        return () => {
            document.head.removeChild(iamprot);
        }
    }, [])

    useEffect(() => {
        const buyPricetotal = buyProductList.reduce((total, buyProducts) => total += buyProducts.totalPrice, 0)
        const shippingCost = buyPricetotal >= 50000 ? 0 : 5000;
        const finalPrice = (shippingCost + buyPricetotal);

        setPriceInfo({
            "buyPricetotal": buyPricetotal,
            "shippingCost": shippingCost,
            "finalPrice": finalPrice
        });
    }, [])
    

    const orderUserOnChange = (e) => {
        setShippingUserInfo({
            ...shippingUserInfo,
            [e.target.name]: e.target.value
        });
    }
    
    const handleFindAddressClick = () => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    var addr = '';
                    var extraAddr = '';
                    
                    if (data.userSelectedType === 'R') {
                        addr = data.roadAddress;
                    } else {
                        addr = data.jibunAddress;
                    }
                    if(data.userSelectedType === 'R'){
                        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                            extraAddr += data.bname;
                        }
                        if(data.buildingName !== '' && data.apartment === 'Y'){
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        if(extraAddr !== ''){
                            extraAddr = ' (' + extraAddr + ')';
                        }
                    }

                    setShippingUserInfo({
                        ...shippingUserInfo,
                        addressNumber: data.zonecode,
                        addressName: addr,
                        addressDetailName: ""
                    })

                    addressDetailNameRef.current.focus();
                }
            }).open();
        };
        
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝
    
    const handlePaymentSubmit = (provider) => {
        if(!window.IMP) {return} 
        const { IMP } = window;
        IMP.init("imp31774216");

        const paymentData = {
            pg: "",
            pay_method: "",
            merchant_uid: `mid_${new Date().getTime()}`, // 구매자 식별코드(결제날,시간)
            amount: priceInfo.finalPrice, // 금액
            name:  'Woof&Meow',// 상품이름
            buyer_name: principal?.data?.data?.name, // 구매자 이름
            buyer_email: principal?.data?.data?.email
        }

        switch(provider) {
            case "kakao": 
                paymentData.pg = "kakaopay";
                paymentData.pay_method = "kakaopay";
                break;
            case "toss": 
                paymentData.pg = "tosspay";
                paymentData.pay_method = "tosspay";
                break;
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }

                const order = {
                    userId: principal.data.data.userId,
                    shippingName: shippingUserInfo.name,
                    shippingPhone: shippingUserInfo.phone,
                    shippingAddressNumber: shippingUserInfo.addressNumber,
                    shippingAddressName: shippingUserInfo.addressName,
                    shippingAddressDetailName: shippingUserInfo.addressDetailName,
                    orderData: [...buyProductList]
                }

                addOrderApi(order, option)
                .then(response => {
                    alert("결제가 완료되었습니다.");
                    localStorage.removeItem("orderData")
                    navigate("/")
                    console.log(response);
                })
            } else {
                alert(error_msg)
            }
        });
    }
    
    if(getProducts.isLoading) {
        return <></>;
    }

    return (
        <>
            <div css={S.SOrderHeader}>
                <h2>주문 / 결제</h2>
            </div>

            <div css={S.SUserInfoBox}>
                <h3>주문자 정보</h3>
                <div css={S.InfoInputBox}>
                    <h4>이름 : {principal.data.data.name}</h4>
                </div>

                <div css={S.InfoInputBox}>
                    <h4>연락처 : {principal.data.data.phoneNumber}</h4>
                </div>

                <div css={S.InfoInputBox}>
                    <h4>이메일 : {principal.data.data.email}</h4>
                </div>
            </div>

            <div css={S.SUserInfoBox}>
                <h3>받는 사람 정보</h3>
                <div css={S.InfoInputBox}>
                    <h4>이름 : </h4>
                    <input type="text" 
                        name="name" 
                        value={shippingUserInfo.name} 
                        onChange={orderUserOnChange}/>
                </div>

                <div css={S.InfoInputBox}>
                    <h4>연락처 : </h4>
                    <input type="text"  
                    name="phone" 
                    value={shippingUserInfo.phone}
                    onChange={orderUserOnChange}/>
                </div>

                <div css={S.InfoInputBox}>
                    <h4>배송주소 : </h4>
                    <input type="text" 
                        placeholder='우편번호'
                        name="addressNumber" 
                        value={shippingUserInfo.addressNumber}
                        onChange={orderUserOnChange}/>
                    <div>
                        <button name='findDefaultAddressNumber' 
                            onClick={handleFindAddressClick} >우편번호찾기</button>
                    </div>
                    <input type="text" 
                        placeholder='주소' 
                        name="addressName" 
                        value={shippingUserInfo.addressName}
                        onChange={orderUserOnChange}/>
                    <input type="text" 
                        placeholder='상세주소' 
                        name="addressDetailName" 
                        value={shippingUserInfo.addressDetailName}
                        onChange={orderUserOnChange}
                        ref={addressDetailNameRef}/>
                </div>
            </div>
            
            <div css={S.SBuyProductsBox}>
                <h3>주문상세내역</h3>
                {buyProductList.map((product, index) => 
                <li key={index}>
                    <img css={S.SProductImg} src={products?.filter(p => p.productId === product.productId)[0]?.productThumbnail} alt="" />
                    <p>상품 사이즈: {product.size}</p>
                    <p>상품 수량: {product.count}</p>
                    <p>가격: {product.totalPrice}원</p>
                </li>
                )}
            </div>
            <div css={S.SPayBox}>
                <h3>결제 정보</h3>
                <p>주문상품: {priceInfo.buyPricetotal.toLocaleString("ko-KR")}원</p>
                <p>배송비: + {priceInfo.shippingCost.toLocaleString("ko-KR")}원</p>
                <p>최종금액 : {priceInfo.finalPrice.toLocaleString("ko-KR")}원 </p>
            </div>
            <div css={S.SPayButtonBox}>
                <button onClick={() => handlePaymentSubmit("kakao")}>카카오 결제하기</button>
                <button onClick={() => handlePaymentSubmit("toss")}>토스 결제하기</button>
            </div>
        </>
    );
}

export default BuyInfo;