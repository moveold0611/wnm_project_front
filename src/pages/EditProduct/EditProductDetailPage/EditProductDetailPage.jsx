import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getProductApi, updateProduct } from '../../../apis/api/product';
import { useParams } from 'react-router-dom';

function EditProductDetailPage(props) {

    const params = useParams("productId")
    const productId = params.productId
    const petType = [
        { value: "1", label: "강아지"},
        { value: "2", label: "고양이"}
    ]
    const category = [
        { value: "1", label: "홈·리빙" },
        { value: "2", label: "산책" },
        { value: "3", label: "이동" },
        { value: "4", label: "패션" },
        { value: "5", label: "장난감" }
    ]

    const [ productData, setProductData ] = useState({});

    const getProduct = useQuery(["getProduct"], async () => {
        const response = await getProductApi(productId);
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            setProductData({
            productName: response?.data?.productName,
            productPrice: response?.data?.productPrice,
            productDetailText: response?.data?.productDetailText,
            productThumbnail: response?.data?.productThumbnail,
            productDetailImg: response?.data?.productDetailImg,
            petTypeId: response?.data?.petTypeId,
            productCategoryId: response?.data?.productCategoryId,
            noSize: response?.data?.noSize,
            productSizeXS: response?.data?.productSizeXS,
            productSizeS: response?.data?.productSizeS,
            productSizeM: response?.data?.productSizeM,
            productSizeL: response?.data?.productSizeL,
            productSizeXL: response?.data?.productSizeXL,
            productSizeXXL:response?.data?.productSizeXXL
        })}
    })



    if(getProduct.isLoading) {
        return <></>
    }

    const handleTestClick = () => {
        console.log(productData)
    }

    const handleProductDataOnChange = (e) => {
        setProductData({
            ...productData,
            [ e.target.name ]: e.target.value
        })
    }

    const handleCategoryChange = (e) => {
        setProductData({
            ...productData,
            noSize: 0,
            productSizeXS: 0,
            productSizeS: 0,
            productSizeM: 0,
            productSizeL: 0,
            productSizeXL: 0,
            productSizeXXL:0,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    const handleParseIntProductDataChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    const handleUpdateSubmit = async () => {
        try {
            await updateProduct(productId, productData);    
            alert("상품수정완료")
        } catch (error) {
            console.log(error.response.data)
        }
        
    }

    return (
        <div>
            <button onClick={handleTestClick}>test</button>

            <div>
                    <div>
                        <img src={productData.productThumbnail} alt='썸네일 이미지' onChange={handleProductDataOnChange}/>
                    </div>
                    <input  type="file" />
                    <div>
                        <img src={productData.productDetailImg} alt='상품 디테일 이미지' onChange={handleProductDataOnChange}/>
                    </div>
                    <input type="file"/>
                
                </div>
                <div >
                    <div>상품명 : <input type="text" name='productName' defaultValue={getProduct?.data?.data?.productName} onChange={handleProductDataOnChange}/></div>
                    <div>가격 : <input type="text" name='productPrice' defaultValue={getProduct?.data?.data?.productPrice} onChange={handleParseIntProductDataChange}/>원</div>
                    <div>상품설명 : <input type="text" name='productDetailText' defaultValue={getProduct?.data?.data?.productDetailText} onChange={handleProductDataOnChange}/></div>
                    <div>
                        카테고리 :
                        <select
                            options={category}
                            name='productCategoryId'
                            onChange={handleCategoryChange}
                            >
                            {category.map(ct=> {
                                return <option key={ct.value} value={ct.value} label={ct.label}>{ct.label}</option>
                            })}
                        </select> 
                    </div>
                    <div>사이즈 : </div>
                    <select option={petType}
                            name="petTypeId"
                            onChange={handleCategoryChange}>
                        {petType.map(type => {
                            return <option key={type.value} value={type.value} label={type.label}>{type.label}</option>
                        })}
                    </select>
                    {productData.petTypeId === 1 && productData.productCategoryId === 4 ? 
                        <div>
                            <input type="text" name='productSizeXS' placeholder='XS Size' onChange={handleParseIntProductDataChange} value={productData.productSizeXS}/>
                            <input type="text" name='productSizeS' placeholder='S Size' onChange={handleParseIntProductDataChange} value={productData.productSizeS}/>
                            <input type="text" name='productSizeM' placeholder='M Size' onChange={handleParseIntProductDataChange} value={productData.productSizeM}/>
                            <input type="text" name='productSizeL' placeholder='L Size' onChange={handleParseIntProductDataChange} value={productData.productSizeL}/>
                            <input type="text" name='productSizeXL' placeholder='XL Size' onChange={handleParseIntProductDataChange} value={productData.productSizeXL}/>
                            <input type="text" name='productSizeXXL' placeholder='XXL Size' onChange={handleParseIntProductDataChange} value={productData.productSizeXXL}/>
                        </div>
                        : 
                        <div>
                            <input type="text" name='noSize' placeholder='noSize' onChange={handleParseIntProductDataChange} value={productData.noSize}/>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleUpdateSubmit}>등록하기</button>
                </div>

        </div>
    );
}

export default EditProductDetailPage;