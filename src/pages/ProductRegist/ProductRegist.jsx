import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { instance } from '../../apis/config/instance';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../apis/firebase/firebase';

function ProductRegist(props) {
    
    const profileFileRef = useRef();
    const [uploadFiles, setUploadFiles] = useState([]);
    const [profileImgSrc, setProfileImgSrc] = useState(); 

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
        petTypeId: 0,
        productCategoryId: "",
        noSize: 0,
        productSizeXS: 0,
        productSizeS: 0,
        productSizeM: 0,
        productSizeL: 0,
        productSizeXL: 0,
        productSizeXXL: 0,
        stock: 0
    })

    const handleProductImgUploadClick = () => {
        if(window.confirm("상품 사진을 등록하시겠습니까?")) {
            profileFileRef.current.click();
        }
    }

    const handleProductImgChange = (e) => {
        const files = [];
        files.push(e.target.files);
        console.log(files);
    
        if(!files.length) {
            setUploadFiles([]);
            setProfileImgSrc("");
            return;
        } 
    
        files.map(file => {
            setUploadFiles([file]);
        });

        const file = files.forEach(file => {

        })

        const reader = new FileReader();
    
        reader.onload = (e) => {
            const profileImageUrl = e.target.result;
            setProfileImgSrc(profileImageUrl);

            const storageRef = ref(storage, `files/product/${file.name}`);

            uploadBytesResumable(storageRef, file)
            .then((uploadTaskSnapshot) => {
                getDownloadURL(storageRef)
                    .then((downloadUrl) => {
                        setProduct({
                            ...product,
                            productThumbnail: downloadUrl,
                            productDetailImg: downloadUrl
                        })
                    })
            })
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

    const handleProductSubmitClick = async () => {
        // const option = {
        //     headers: {
        //         Authorization: "accessToken"
        //     }
        // }
        console.log(product)
        await instance.post("/api/admin/product", product)
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div>
                    <div css={S.SImgBox} onClick={handleProductImgUploadClick}>
                        <img src={profileImgSrc} />
                    </div>
                    <div>
                        <input css={S.Sfile} type="file" onChange={handleProductImgChange} ref={profileFileRef}/>
                    </div>
                </div>
                <div css={S.SInputBox}>
                    <div>상품명 : <input type="text" name='productName' onChange={handleInputChange}/></div>
                    <div>가격 : <input type="text" name='productPrice' onChange={handleInputChange}/></div>
                    <div>상품설명 : <input type="text" name='productDetailText' onChange={handleInputChange}/></div>
                    <div>
                        카테고리 :
                        <select>
                            {categoeies.map(category => {
                                return <option value={category.value} label={category.label}>{category.label}</option>
                            })}
                        </select> 
                    </div>
                    <div>사이즈 : </div>
                    <select 
                        options={petTypes}
                        onChange={handlePetTypeOptionChange}>
                        
                        {petTypes.map(type => {
                            return <option value={type.value} label={type.label}>{type.label}</option>
                        })}
                    </select>
                    {product.petTypeId === 2 ? 
                        <div>
                            <input type="text" name='noSize' placeholder='noSize' onChange={handleInputChange}/>
                        </div>
                        : 
                        <div>
                            <input type="text" name='productSizeXS' placeholder='XS Size' onChange={handleInputChange}/>
                            <input type="text" name='productSizeS' placeholder='S Size' onChange={handleInputChange}/>
                            <input type="text" name='productSizeM' placeholder='M Size' onChange={handleInputChange}/>
                            <input type="text" name='productSizeL' placeholder='L Size' onChange={handleInputChange}/>
                            <input type="text" name='productSizeXL' placeholder='XL Size' onChange={handleInputChange}/>
                            <input type="text" name='productSizeXXL' placeholder='XXL Size' onChange={handleInputChange}/>
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