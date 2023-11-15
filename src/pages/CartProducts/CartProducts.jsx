import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteCartApi, getCartApi } from '../../apis/api/cart';

function CartProducts(props) {
    const navigate = useNavigate()
    const queryCient = useQueryClient();
    const principal = queryCient.getQueryState("getPrincipal");
    
    const [ cartProducts, setCartProducts ] = useState([]);
    const [ selectedCartProduct, setSelectedCartProduct ] = useState([]);
    const [ priceInfo, setPriceInfo ] = useState({
        cartPricetotal: 0,
        shippingCost: 0,
        finalPrice: 0
    });

    const getCartProducts = useQuery(["getCartProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getCartApi(principal.data.data.userId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCartProducts(response.data)
        }
    })

    useEffect(() => {
        const cartPricetotal = cartProducts.reduce((total, cartProduct) => total += cartProduct.productPrice * parseInt(cartProduct.count), 0)
        const shippingCost = cartPricetotal >= 50000 ? 0 : 5000;
        const finalPrice = (shippingCost + cartPricetotal);

        setPriceInfo({
            "cartPricetotal": cartPricetotal,
            "shippingCost": shippingCost,
            "finalPrice": finalPrice
        });
    }, [cartProducts])

    const handleCheckOnChange = (cartId, checked) => {
        if(checked) {
            setSelectedCartProduct([...selectedCartProduct].concat(cartProducts.filter(product => product.cartId === cartId)));
        }else {
            setSelectedCartProduct([...selectedCartProduct.filter(product => product.cartId !== cartId)]);
        }
    }

    const handleDeleteProductOnClick = async (index) => {
        
        if(window.confirm("선택하신 상품을 삭제하시겠습니까? ")) {
            try {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }

                console.log("삭제 전 상태:", cartProducts);
                const response = await deleteCartApi(cartProducts[index].cartId, option);
                if (response.data === true) {
                    console.log("서버 응답:", response);
                    const deleteProduct = [...cartProducts]
                    deleteProduct.splice(index, 1);
                    console.log("삭제 후 상태:", deleteProduct);
                    setCartProducts(deleteProduct);
                } else {
                    throw new Error("상품 삭제 실패")
                }
            } catch(error) {
                console.log(error)
            }
        }else {
            return;
        }
        
    }

    const handleShowpingOnClick = () => {
        navigate("/")
    }

    const handleBuyOnClick = () => {
        localStorage.setItem("orderData", JSON.stringify(selectedCartProduct))
        localStorage.setItem("isCart", true);
        navigate("/order")
    }

    if(getCartProducts.isLoading) {
        return <></>;
    }

    return (
        <div>
            <h2>장바구니</h2>
            <div>
                {cartProducts.map((cartProduct, index) => 
                    <li key={index}>
                        <input type="checkBox" onChange={(e) => handleCheckOnChange(cartProduct.cartId, e.target.checked)}/>
                        <img css={S.SProductImg} src={cartProducts?.filter(p => p.productId === cartProduct.productId)[0]?.productThumbnail}/>
                        <p>상품명 : {cartProduct.productName}</p>
                        <p>상품사이즈 : {cartProduct.size}</p>
                        <p>상품수량 : {cartProduct.count}</p>
                        <p>상품가격 : {cartProduct.productPrice * parseInt(cartProduct.count)}</p>
                        <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                    </li>
                )}

                <div>
                    <p>총 상품 가격 : {priceInfo.cartPricetotal}</p>
                    <p>배송비 : {priceInfo.shippingCost}</p>
                    <p>총 상품 가격 : {priceInfo.finalPrice}</p>
                </div>
                <button onClick={handleShowpingOnClick}>계속 쇼핑하기</button>
                <button onClick={handleBuyOnClick}>구매 하기</button>
            </div>
        </div>
    );
}

export default CartProducts;