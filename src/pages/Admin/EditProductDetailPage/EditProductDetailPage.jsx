import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getProductApi, getProductMstApi, getProductsApi, updateProductApi } from '../../../apis/api/product';
import { useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../apis/firebase/firebase';
import RootContainer from '../../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function EditProductDetailPage(props) {


    const params = useParams("productDtlId")
    const productMstId = params.productMstId
    const [ productThumbnailFile, setProductThumbnailFile ] = useState();
    const [ productDetailImgFile, setProductDetailImgFile ] = useState();
    const [ productThumbnailSrc, setProductThumbnailSrc ] = useState("");
    const [ productDetailImgSrc, setProductDetailImgSrc ] = useState("");
    const searchData = {
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'number',
        searchValue: parseInt(productMstId),
        sortOption: 'number',
        pageIndex: 1}
    const [ productData, setProductData ] = useState({});
    console.log(productData)

    const getProduct = useQuery(["getProduct"], async () => {
        const response = await getProductsApi(searchData);
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            setProductThumbnailSrc(response?.data[0]?.productThumbnailUrl)
            setProductDetailImgSrc(response?.data[0]?.productDetailUrl);
            setProductData({
                productName: response?.data[0].productName,
                productDetailText: response?.data[0].productDetailText,
                productThumbnailUrl: response?.data[0].productThumbnailUrl,
                productDetailUrl: response?.data[0].productDetailUrl,
                no: response?.data[0].no,
                XS: response?.data[0].XS,
                S: response?.data[0].S,
                M: response?.data[0].M,
                L: response?.data[0].L,
                XL: response?.data[0].XL,
                XXL: response?.data[0].XXL
            })
            console.log(response?.data[0])
    }
    })
    if(getProduct.isLoading) {
        return <></>
    }


    const handleProductDataOnChange = (e) => {
        setProductData({
            ...productData,
            [ e.target.name ]: e.target.value
        })
    }



    const handleThumbnailChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        setProductThumbnailFile(file)
        reader.onload = (e) => {
            const productThumnailUrl = e.target.result;
            setProductThumbnailSrc(productThumnailUrl)
        }
        reader.readAsDataURL(file)
    }

    const handleDetailImgChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        setProductDetailImgFile(file)
        reader.onload = (e) => {
            const productDetailImgUrl = e.target.result;
            setProductDetailImgSrc(productDetailImgUrl)
        }
        reader.readAsDataURL(file)
    }



    const handleUpdateSubmit = async () => {
        try {
            if(!!productThumbnailFile) {
                const thumbnailStorageRef = ref(storage, `files/product/${productThumbnailFile?.name}`);
                await uploadBytesResumable(thumbnailStorageRef, productThumbnailFile);
                const downLoadURL = await getDownloadURL(thumbnailStorageRef);
                productData.productThumbnailUrl = downLoadURL;
            }

            if(!!productDetailImgFile) {
                const detailImgStorageRef = ref(storage, `files/product/${productDetailImgFile?.name}`);
                await uploadBytesResumable(detailImgStorageRef, productDetailImgFile);
                const downLoadURL = await getDownloadURL(detailImgStorageRef);
                productData.productDetailUrl = downLoadURL
            }

            await updateProductApi(productMstId, productData);
            alert("수정이 완료되었습니다.")
        }catch(error) {
            console.log(error.response.data)
        }
    }



    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SImg}>
                    <div><h1 css={S.SH1}>상품 메인 이미지 수정</h1></div>
                    <div>
                        <img src={productThumbnailSrc} alt='썸네일 이미지' width={'700px'} onChange={handleProductDataOnChange}/>
                    </div>
                    <div>
                        <input type="file" id="fileInput" onChange={handleThumbnailChange} css={S.SFileSelect} />
                        <label htmlFor="fileInput" css={S.SLabelUpload}>메인 이미지 수정 파일 업로드</label>
                    </div>
                    <div><h1 css={S.SH1}>상품 상세 이미지 수정</h1></div>
                    <div>
                        <img src={productDetailImgSrc} alt='상품 디테일 이미지' onChange={handleProductDataOnChange}/>
                    </div>
                    <div>
                        <input type="file" id="fileInput" onChange={handleDetailImgChange} css={S.SFileSelect} />
                        <label htmlFor="fileInput" css={S.SLabelUpload}>상세이미지 수정 파일 업로드</label>
                    </div>
                    <div><h1 css={S.SH1}>상품 정보 수정</h1></div>
                </div>
                <div css={S.SInformation}>
                    <div css={S.SInfoInput}>
                        <h2>상품명</h2>
                        <input type="text" name='productName' defaultValue={getProduct?.data?.data?.productName} onChange={handleProductDataOnChange}/>
                    </div>
                    <div css={S.SInfoInput}>
                        <h2>상품설명</h2>
                        <input type="text" name='productDetailText' defaultValue={getProduct?.data?.data?.productDetailText} onChange={handleProductDataOnChange}/>
                    </div>
                    <div css={S.SInfoInput}>
                        <h2>사이즈, 가격 </h2> 
                        <ul>
                        {productData.no === "" ?
                            <>
                                XS : <input value={productData.XS} type='text' name='XS' onChange={handleProductDataOnChange}/>
                                S : <input value={productData.S} type='text' name='S' onChange={handleProductDataOnChange}/>
                                M : <input value={productData.M} type='text' name='M' onChange={handleProductDataOnChange}/>
                                L : <input value={productData.L} type='text' name='L' onChange={handleProductDataOnChange}/>
                                XL : <input value={productData.XL} type='text' name='XL' onChange={handleProductDataOnChange}/>
                                XXL : <input value={productData.XXL} type='text' name='XXL' onChange={handleProductDataOnChange}/>
                            </> :
                            <>
                                no : <input value={productData.no} type='text' name='no' onChange={handleProductDataOnChange}/>
                            </>}
                        </ul>
                    </div>
                </div>
                <div css={S.SSubmit}>
                    <button onClick={handleUpdateSubmit} css={S.SLabelUpload}>등록하기</button>
                </div>
            </div>
        </RootContainer>
    );
}

export default EditProductDetailPage;