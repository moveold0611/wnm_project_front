import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../apis/firebase/firebase';
import { addProductApi } from '../../../apis/api/product';
import Mypage from '../../Mypage/Mypage';

function ProductRegist(props) {
    
    const productThumnailImgRef = useRef();
    const productDetailImgRef = useRef();
    const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadDetailImgFile, setUploadDetailImgFile] = useState([]);
    const [productThumbnailUrlSrc , setProductThumbnailUrlSrc ] = useState(); 
    const [productDetailUrlSrc, setProductDetailUrlSrc] = useState();
    
    const reader = new FileReader();
    
    const petTypes = [
        { value: 1, label: "강아지" },
        { value: 2, label: "고양이" }
    ]
    
    const productDogCategoeies = [
        { value: 1, label: "홈·리빙" },
        { value: 2, label: "산책" },
        { value: 3, label: "이동" },
        { value: 4, label: "패션" },
        { value: 5, label: "장난감" },
    ]
    
    const productCatCategoeies = [
        { value: 1, label: "홈·리빙" },
        { value: 2, label: "산책" },
        { value: 3, label: "이동" },
        { value: 5, label: "장난감" },
    ]

    const [ product, setProduct ] = useState({
        productName: "",
        price: 0,
        productDetailText: "",
        productThumbnailUrl: "",
        productDetailUrl: "",
        // default값을 각 옵션들의 defalut값의 value로 맞춰놈
        petTypeId: 1,
        productCategoryId: 1
    })

    const handleProductDetailImgUploadClick = () => {
        if(window.confirm("상품 사진을 등록하시겠습니까?")) {
            productThumnailImgRef.current.click();
        }
    }

    const handleProductThumnailImgUploadClick = () => {
        if(window.confirm("상품 사진을 등록하시겠습니까?")) {
            productDetailImgRef.current.click();
        }
    }

    const handleProductThumnailImgChange = (e) => {
        const file = e.target.files[0];
        setProductThumbnailUrlSrc(file);

        if(file === "") {
            setUploadFiles([]);
            setProductThumbnailUrlSrc("");
            return;
        } 

        setUploadFiles([file]);

        reader.onload = (e) => {
            const productThumnailImageUrl = e.target.result;
            setProductThumbnailUrlSrc(productThumnailImageUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productThumbnailUrl: downloadUrl,
                            });
                        });
                });
            }
        }
        reader.readAsDataURL(file);
    }

    const handleProductDetailImgChange = (e) => {
        const file = e.target.files[0];
        setUploadDetailImgFile(file);

        if(file === "") {
            setUploadFiles([]);
            setProductDetailUrlSrc("");
            return;
        } 

        reader.onload = (e) => {
            const productDetaimgUrl = e.target.result;
            setProductDetailUrlSrc(productDetaimgUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productDetailUrl: downloadUrl,
                            });
                        });
                });
            }
        };
        reader.readAsDataURL(file);
    }

    const handleProductSubmitClick = async () => {
        console.log("post요청 직전" + product)
        try {
            const option = {
                headers: {
                    Authorization: !!localStorage.getItem("accessToken")
                    ? localStorage.getItem("accessToken") : ""
                }
            }
            await addProductApi(product, option);
        } catch (error) {
            console.error(error);
        }    
    }     

    const handleInputChange = (e) => {
        setProduct({
            ...product,
                [e.target.name]: e.target.value
        })
    }

    const handlePetTypeOptionChange = (e) => {
        setProduct({
            ...product,
            petTypeId: parseInt(e.target.value)
        })
    }

    const handleCategoryTypeOptionChange = (e) => {
        setProduct({
            ...product,
            productCategoryId: parseInt(e.target.value)
        })
        
    }
    console.log(product)

    return (
        <Mypage>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <h2 css={S.SH2}>상품 등록</h2>
                    <div>
                        <div css={S.SImgBox} onClick={handleProductDetailImgUploadClick}>
                            <img src={productThumbnailUrlSrc} alt='썸네일 이미지'/>
                        </div>
                        <div>
                            <input css={S.Sfile} type="file" onChange={handleProductThumnailImgChange} ref={productThumnailImgRef}/>
                        </div>
                        <div css={S.SImgBox} onClick={handleProductThumnailImgUploadClick}>
                            <img src={productDetailUrlSrc} alt='상품 디테일 이미지'/>
                        </div>
                        <div>
                            <input css={S.Sfile} type="file" onChange={handleProductDetailImgChange} ref={productDetailImgRef}/>
                        </div>
                    </div>
                    <div css={S.SInputBox}>
                        <div css={S.SInfoInput}>
                            <h2>상품명</h2> 
                            <input type="text" name='productName' onChange={handleInputChange}/>
                        </div>
                        <div css={S.SInfoInput}>
                            <h2>상품설명</h2>
                            <input type="text" name='productDetailText' onChange={handleInputChange}/>
                        </div>
                        <div css={S.SInfoInput}>
                            <h2>동물타입</h2> 
                            <select 
                                options={petTypes}
                                onChange={handlePetTypeOptionChange}
                                css={S.SSelect}>
                                
                                {petTypes.map(type => {
                                    return <option key={type.value} value={type.value} label={type.label}>{type.label}</option>
                                })}
                            </select>
                        </div>
                        {product.petTypeId === 1 ? 
                            <div css={S.SInfoInput}>
                                <h2>카테고리 </h2>
                                <select
                                    options={productDogCategoeies}
                                    onChange={handleCategoryTypeOptionChange}
                                    css={S.SSelect}
                                    >
                                    {productDogCategoeies.map(category => {
                                        return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                    })}
                                </select> 
                            </div>
                            :
                            <div css={S.SInfoInput}>
                                <h2>카테고리 </h2>
                                <select
                                    options={productCatCategoeies}
                                    onChange={handleCategoryTypeOptionChange}
                                    >
                                    {productCatCategoeies.map(category => {
                                        return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                                    })}
                                </select> 
                            </div>
                        }
                        <div css={S.SInfoInput}>
                            <input type="text" name='price' placeholder='가격' onChange={handleInputChange} />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleProductSubmitClick} css={S.SButton}>등록하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default ProductRegist;