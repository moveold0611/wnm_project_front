import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { css } from '@emotion/react';
import { useQuery, useQueryClient } from 'react-query';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductMstApi } from '../../apis/api/product';
import { addToCartApi } from '../../apis/api/cart';

function BuyProduct(props) {
    const navigate = useNavigate();

    const { productId } = useParams();
    const [ product, setProduct ] = useState({});
    const [ selectedProducts, setSelectedProducts ] = useState([]);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const getProduct = useQuery(["getProduct"], async () => {
        try {
            const response = getProductMstApi(productId);
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

    console.log(product)

    localStorage.removeItem("orderData")
    localStorage.removeItem("isCart")

    if(getProduct.isLoading) {
        return<></>
    }
    
    const selectOnChange = (option) => {
        const productDtl = product.productDtlList.filter(pdt => pdt.productDtlId === option.value)[0];

        if(productDtl.tempStock === 0) {
            alert("해당 상품은 품절입니다.");
            return;
        }

        if(selectedProducts.filter(selectedProduct => selectedProduct.productDtlId === productDtl.productDtlId).length > 0){
            alert("해당 상품은 이미 선택된 상품 입니다.");
            return;
        }

        const newSelectedProduct = {
            productDtlId: productDtl.productDtlId,
            sizeName: productDtl.size.sizeName,
            price: productDtl.price,
            count: 1,
            productDtl: {
                price: productDtl.price,
                size: {
                    sizeId: productDtl.size.sizeId,
                    sizeName: productDtl.size.sizeName
                },
                productMst: {
                    productName: product.productName,
                    productThumbnailUrl: product.productThumbnailUrl
                }
            },
        }
        setSelectedProducts([...selectedProducts, newSelectedProduct]);
        console.log(selectedProducts)
    }
    



    console.log(selectedProducts)


    const countOnChange = (value, index) => {
        const pdt = product.productDtlList.filter(pdt => pdt.productDtlId === selectedProducts[index].productDtlId)[0]; 
        const updateSelectedPorudcts = [...selectedProducts];
        updateSelectedPorudcts[index].count = parseInt(value);
        updateSelectedPorudcts[index].price = pdt.price * parseInt(value);

        setSelectedProducts([...updateSelectedPorudcts]);
    }

    const handleDeleteProductOnClick = (index) => {
        const DeleteProduct = [...selectedProducts]
        DeleteProduct.splice(index, 1);
        setSelectedProducts(DeleteProduct);
    }

    const buyNowOnClick = () => {
        localStorage.setItem("orderData", JSON.stringify(selectedProducts));
        localStorage.setItem("isCart", false);
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
                    <img css={S.SThumbnailImg} src={product.productThumbnailUrl} />
                </div>
                <div css={S.SOrderInfoBox}>
                    <h2>{product.productName}</h2>
                    <p dangerouslySetInnerHTML={{__html: product.productDetailText}}></p>
                    <div css={S.SSelectBox}>
                        <Select css={S.SSelect} onChange={selectOnChange} options={product.productDtlList.map(pdt => {
                            return { value: pdt.productDtlId, label: `${pdt.size.sizeName}${pdt.tempStock > 0 ? "(수량: " + pdt.tempStock + ")" : "(품절)"}` }
                        })
                        }/>
                    </div>
                    <ul css={S.SOrderListBox}>
                        {selectedProducts.map((selectedProduct, index) => 
                            <li key={index}>
                                {product.productName}-{selectedProduct.sizeName}
                                <input type="number" defaultValue={1} min={1} max={99} onChange={(e) => countOnChange(e.target.value, index)}/>
                                {selectedProduct.price}
                                <button onClick={() => handleDeleteProductOnClick(index)}>X</button>
                            </li>
                        )}
                    </ul>
                    <div css={S.SPriceInfo}>
                        <p>Total</p>
                        <h3>{selectedProducts.reduce((total, selectedProduct) => {
                            return total += selectedProduct.price}, 0).toLocaleString("ko-KR")}원</h3>
                    </div>
                    <div css={S.SButtonBox}>
                        <button onClick={buyNowOnClick}>BUY NOW</button>
                        <button onClick={handleAddToCartOnClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div css={S.SDetailContainer}>
                <img css={S.SDDetailImg} src={product.productDetailUrl} alt="" />
            </div>
        </div>
    );
}

export default BuyProduct;