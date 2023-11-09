import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { instance } from '../../apis/config/instance';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../apis/firebase/firebase';
import { addProductApi } from '../../apis/api/product';

function ProductRegist(props) {
    
    const productThumnailImgRef = useRef();
    const productDetailImgRef = useRef();
    const [uploadFiles, setUploadFiles] = useState([]);
    const [uploadDetailImgFile, setUploadDetailImgFile] = useState([]);
    const [productThumbnailImgSrc , setProductThumbnailImgSrc ] = useState(); 
    const [productDetailImgSrc, setProductDetailImgSrc] = useState(); 
    
    const [ text, setText ] = useState({
        noSize: "",
        productSizeXS: "",
        productSizeS: "",
        productSizeM: "",
        productSizeL: "",
        productSizeXL: "",
        productSizeXXL: ""
    });

    const reader = new FileReader();

    const petTypes = [
        { value: 1, label: "강아지" },
        { value: 2, label: "고양이" }
    ]

    const categoeies = [
        { value: 1, label: "홈·리빙" },
        { value: 2, label: "산책" },
        { value: 3, label: "이동" },
        { value: 4, label: "패션" },
        { value: 5, label: "장난감" },
    ]

    const [ product, setProduct ] = useState({
        productName: "",
        productPrice: "",
        productDetailText: "",
        productThumbnail: "",
        productDetailImg: "",
        // default값을 각 옵션들의 defalut값의 value로 맞춰놈
        petTypeId: 1,
        productCategoryId: 1,
        noSize: "",
        productSizeXS: "",
        productSizeS: "",
        productSizeM: "",
        productSizeL: "",
        productSizeXL: "",
        productSizeXXL: "",
        stock: 0
    })

    useEffect(() => {
        setText({
            noSize: "",
            productSizeXS: "",
            productSizeS: "",
            productSizeM: "",
            productSizeL: "",
            productSizeXL: "",
            productSizeXXL: ""
        })
    }, [])

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
        console.log(file)
        setProductThumbnailImgSrc(file);

        if(file === "") {
            setUploadFiles([]);
            setProductThumbnailImgSrc("");
            return;
        } 
  
        setUploadFiles([file]);

        reader.onload = (e) => {
            const productThumnailImageUrl = e.target.result;
            setProductThumbnailImgSrc(productThumnailImageUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productThumbnail: downloadUrl,
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
            setProductThumbnailImgSrc("");
            return;
        } 

        reader.onload = (e) => {
            const productDetaimgUrl = e.target.result;
            setProductDetailImgSrc(productDetaimgUrl);

            if(!!uploadFiles) {
                const storageRef = ref(storage, `files/product/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setProduct({
                                ...product,
                                productDetailImg: downloadUrl,
                            });
                        });
                });
            }
        };
        reader.readAsDataURL(file);
    }

    const handleProductSubmitClick = async () => {
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

        setText({
            [e.target.name]: e.target.value
        })
    }

    const handleCategoryTypeOptionChange = (e) => {
        setProduct({
            ...product,
            productCategoryId: parseInt(e.target.value),
            noSize: "",
            productSizeXS: "",
            productSizeS: "",
            productSizeM: "",
            productSizeL: "",
            productSizeXL: "",
            productSizeXXL: ""
        })
        console.log("카테고리 바꾸고 나서");
        console.log(product)

        setText({
            noSize: "",
            productSizeXS: "",
            productSizeS: "",
            productSizeM: "",
            productSizeL: "",
            productSizeXL: "",
            productSizeXXL: ""
        })
  
    }

    const handlePetTypeOptionChange = (e) => {
        setProduct({
            ...product,
            petTypeId: parseInt(e.target.value),
            noSize: "",
            productSizeXS: "",
            productSizeS: "",
            productSizeM: "",
            productSizeL: "",
            productSizeXL: "",
            productSizeXXL: ""
        })

        setText({
            noSize: "",
            productSizeXS: "",
            productSizeS: "",
            productSizeM: "",
            productSizeL: "",
            productSizeXL: "",
            productSizeXXL: ""
        })
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div>
                    <div css={S.SImgBox} onClick={handleProductDetailImgUploadClick}>
                        <img src={productThumbnailImgSrc} alt='썸네일 이미지'/>
                    </div>
                    <input css={S.Sfile} type="file" onChange={handleProductThumnailImgChange} ref={productThumnailImgRef}/>
                    <div css={S.SImgBox} onClick={handleProductThumnailImgUploadClick}>
                        <img src={productDetailImgSrc} alt='상품 디테일 이미지'/>
                    </div>
                    <input css={S.Sfile} type="file" onChange={handleProductDetailImgChange} ref={productDetailImgRef}/>
                   
                </div>
                <div css={S.SInputBox}>
                    <div>상품명 : <input type="text" name='productName' onChange={handleInputChange}/></div>
                    <div>가격 : <input type="text" name='productPrice' onChange={handleInputChange}/></div>
                    <div>상품설명 : <input type="text" name='productDetailText' onChange={handleInputChange}/></div>
                    <div>
                        카테고리 :
                        <select
                            options={categoeies}
                            onChange={handleCategoryTypeOptionChange}
                            >
                            {categoeies.map(category => {
                                return <option key={category.value} value={category.value} label={category.label}>{category.label}</option>
                            })}
                        </select> 
                    </div>
                    <div>사이즈 : </div>
                    <select 
                        options={petTypes}
                        onChange={handlePetTypeOptionChange}>
                        
                        {petTypes.map(type => {
                            return <option key={type.value} value={type.value} label={type.label}>{type.label}</option>
                        })}
                    </select>
                    {product.petTypeId === 1 && product.productCategoryId === 4 ? 
                        <div>
                            <input type="text" name='noSize' placeholder='noSize' onChange={handleInputChange} disabled value={text.noSize}/>
                            <input type="text" name='productSizeXS' placeholder='XS Size' onChange={handleInputChange} value={text.productSizeXS}/>
                            <input type="text" name='productSizeS' placeholder='S Size' onChange={handleInputChange} value={text.productSizeS}/>
                            <input type="text" name='productSizeM' placeholder='M Size' onChange={handleInputChange} value={text.productSizeM}/>
                            <input type="text" name='productSizeL' placeholder='L Size' onChange={handleInputChange} value={text.productSizeL}/>
                            <input type="text" name='productSizeXL' placeholder='XL Size' onChange={handleInputChange} value={text.productSizeXL} />
                            <input type="text" name='productSizeXXL' placeholder='XXL Size' onChange={handleInputChange} value={text.productSizeXXL}/>
                        </div>
                        : 
                        <div>
                            <input type="text" name='noSize' placeholder='noSize' onChange={handleInputChange}  value={text.noSize}/>
                            <input type="text" name='productSizeXS' placeholder='XS Size' onChange={handleInputChange} disabled value={text.productSizeXS}/>
                            <input type="text" name='productSizeS' placeholder='S Size' onChange={handleInputChange} disabled value={text.productSizeS}/>
                            <input type="text" name='productSizeM' placeholder='M Size' onChange={handleInputChange} disabled value={text.productSizeM}/>
                            <input type="text" name='productSizeL' placeholder='L Size' onChange={handleInputChange} disabled value={text.productSizeL}/>
                            <input type="text" name='productSizeXL' placeholder='XL Size' onChange={handleInputChange} disabled value={text.productSizeXL} />
                            <input type="text" name='productSizeXXL' placeholder='XXL Size' onChange={handleInputChange} disabled value={text.productSizeXXL}/>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleProductSubmitClick}>등록하기</button>
                </div>
            </div>
        </div>
    );
}

export default ProductRegist;