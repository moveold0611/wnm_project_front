import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { css } from '@emotion/react';
import { useQuery, useQueryClient } from 'react-query';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductApi } from '../../apis/api/product';
import { addToCartApi } from '../../apis/api/cart';

function BuyProduct(props) {
    const navigate = useNavigate();

    const { productId } = useParams();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ product, setProduct ] = useState({});
    const [ selectedProducts, setSelectedProducts ] = useState([]);

    const getProduct = useQuery(["getProduct"], async () => {
        try {
            const response = getProductApi(productId);
            return await response
            
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setProduct(response.data)
        }
    })

    localStorage.removeItem("orderData")

    if(getProduct.isLoading) {
        return<></>
    }

    const selectOnChange = (option) => {
        if(product[option.value] === 0){
            alert("해당 상품은 품절입니다.");
            return;
        }
        if(selectedProducts.filter(selectedProduct => selectedProduct.value === option.value).length > 0){
            alert("해당 상품은 이미 선택된 상품 입니다.");
            return;
        }

        const newSelectedProduct = {
            size: option.value.replace("productSize", ""),
            count: 1,
            totalPrice: product.productPrice,
            productId: product.productId
        }
        setSelectedProducts([...selectedProducts, newSelectedProduct]);
    }


    const countOnChange = (value, index) => {
        const updateSelectedPorudcts = [...selectedProducts];
        updateSelectedPorudcts[index].count = parseInt(value);
        updateSelectedPorudcts[index].totalPrice = product.productPrice * parseInt(value);

        setSelectedProducts([...updateSelectedPorudcts]);
    }

    const handleDeleteProductOnClick = (index) => {
        
        const DeleteProduct = [...selectedProducts]

        DeleteProduct.splice(index, 1);

        setSelectedProducts(DeleteProduct);
    }

    const buyNowOnClick = () => {
        localStorage.setItem("orderData", JSON.stringify(selectedProducts));
        navigate("/order")
    }

    const handleAddToCartOnClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(window.confirm("해당 상품을 장바구니에 담겠습니까?")) {
                addToCartApi(principal.data.data.userId, [...selectedProducts], option);
                alert("장바구니에 상품이 정상적으로 담겼습니다.")
            } else {
                alert("취소되었습니다.")
            }

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div css={S.STopContainer} >
                <div css={S.SThumbnailBox}>
                    <img css={S.SThumbnailImg} src={product.productThumbnail} />
                </div>
                <div css={S.SOrderInfoBox}>
                    <h2>{product.productName}</h2>
                    <p dangerouslySetInnerHTML={{__html: product.productDetailText}}></p>
                    <div css={S.SSelectBox}>
                        {product.petTypeId === 1 && product.productCategoryId === 4 ? <Select css={S.SSelect} onChange={selectOnChange} options={
                            [
                                { value: 'productSizeXS', label: `XS${product.productSizeXS === 0 ? "(품절)" : ""}`},
                                { value: 'productSizeS', label: `S${product.productSizeS === 0 ? "(품절)" : ""}`},
                                { value: 'productSizeM', label: `M${product.productSizeM === 0 ? "(품절)" : ""}`},
                                { value: 'productSizeL', label: `L${product.productSizeL === 0 ? "(품절)" : ""}`},
                                { value: 'productSizeXL', label: `XL${product.productSizeXL === 0 ? "(품절)" : ""}`},
                                { value: 'productSizeXXL', label: `XXL${product.productSizeXXL === 0 ? "(품절)" : ""}`}
                            ]
                        }/> : <div>NoSize</div>}
                    </div>
                    <ul css={S.SOrderListBox}>
                        {selectedProducts.map((selectedProduct, index) => 
                            <li key={index}>
                                {product.productName}-{selectedProduct.size}
                                <input type="number" defaultValue={1} min={1} max={3} onChange={(e) => countOnChange(e.target.value, index)}/>
                                {selectedProduct.totalPrice.toLocaleString("ko-KR") + "원"}
                                <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                            </li>
                        )}
                    </ul>
                    <h3>{selectedProducts.reduce((total, selectedProduct) => {
                        return total += selectedProduct.totalPrice}, 0).toLocaleString("ko-KR")}원</h3>
                    <div>
                        <button onClick={buyNowOnClick}>BUY BOW</button>
                        <button onClick={handleAddToCartOnClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div css={S.SDetailContainer}>
                <img css={S.SDDetailImg} src={product.productDetailImg} alt="" />
            </div>
        </div>
    );
}

export default BuyProduct;