import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { getProductApi, getProductMstApi, updateProductApi } from '../../../apis/api/product';
import { useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../apis/firebase/firebase';

function EditProductDetailPage(props) {

    const params = useParams("productDtlId")
    const productMstId = params.productMstId
    const [ productThumbnailFile, setProductThumbnailFile ] = useState();
    const [ productDetailImgFile, setProductDetailImgFile ] = useState();
    const [ productThumbnailSrc, setProductThumbnailSrc ] = useState("");
    const [ productDetailImgSrc, setProductDetailImgSrc ] = useState("");
    const [ InputStatus, setInputStatus ] = useState({});
    const [ priceList, setPriceList ] = useState([]);

    const [ productMstData, setProductMstData ] = useState({
        productName: "",
        productDetailText: "",
        productThumbnailUrl: "",
        productDetailUrl: "",
        createDate: ""
    });
    const [ productDtlData, setProductDtlData ] = useState([]);

    console.log(productMstData)
    console.log(productDtlData)
    


    useEffect(() => {
        setInputStatus(
            productDtlData.map(pdd => {
                const data = {[pdd.size.sizeName]: pdd.price}
                return data
            })
        )
    }, [productDtlData])



    console.log(InputStatus)
    
    const getProduct = useQuery(["getProduct"], async () => {
        const response = await getProductMstApi(parseInt(productMstId));
        return response;
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {
            setProductThumbnailSrc(response?.data?.productThumbnailUrl)
            setProductDetailImgSrc(response?.data?.productDetailUrl);
            setProductMstData({
                productName: response.data.productName,
                productDetailText: response.data.productDetailText,
                productThumbnailUrl: response.data.productThumbnailUrl,
                productDetailUrl: response.data.productDetailUrl,
                createDate: response.data.createDate
            })
            setProductDtlData(response.data.productDtlList)
    }
    })
    if(getProduct.isLoading) {
        return <></>
    }


    const handleProductDataOnChange = (e) => {
        setProductMstData({
            ...productMstData,
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
                productMstData.productThumbnailUrl = downLoadURL;
            }

            if(!!productDetailImgFile) {
                const detailImgStorageRef = ref(storage, `files/product/${productDetailImgFile?.name}`);
                await uploadBytesResumable(detailImgStorageRef, productDetailImgFile);
                const downLoadURL = await getDownloadURL(detailImgStorageRef);
                productMstData.productDetailUrl = downLoadURL
            }

            // await updateProductApi(productMstId, productData);
            alert("수정이 완료되었습니다.")
        }catch(error) {
            console.log(error.response.data)
        }
    }

    const testClick = () => {
        console.log(InputStatus)
    }

    const handlePriceChange = (pl) => {
        console.log(pl.price)
        const index = productDtlData.indexOf(pl);
        const testList = productDtlData;

        console.log("인덱스")
        console.log(index) // 문제없음

        console.log("====================")
        console.log(testList[index])
        testList[index] = pl;
        console.log(pl)
        console.log(testList[index])
        console.log("====================")
        // const change = priceList.filter((pl) => {
        //     return priceList[index] === pl;
        // })
        console.log(testList)
        setPriceList(testList)
    }



    return (
        <div>
            <button onClick={testClick}>test</button>
            <div>
                <div>
                    <img src={productThumbnailSrc} alt='썸네일 이미지' onChange={handleProductDataOnChange}/>
                </div>
                <input  type="file" onChange={handleThumbnailChange}/>
                <div>
                    <img src={productDetailImgSrc} alt='상품 디테일 이미지' onChange={handleProductDataOnChange}/>
                </div>
                <input type="file" onChange={handleDetailImgChange}/>
            </div>
                <div >
                    <div>상품명 : <input type="text" name='productName' defaultValue={getProduct?.data?.data?.productName} onChange={handleProductDataOnChange}/>
                    </div>


                    <div>상품설명 : <input type="text" name='productDetailText' defaultValue={getProduct?.data?.data?.productDetailText} onChange={handleProductDataOnChange}/></div>
                    <div>
            
                    </div>


                    <div>
                    사이즈, 가격 : 
                        <ul>
                        {productDtlData.map(pl => {
                            return <li key={pl}>
                                {pl.size.sizeName} / <input value='' name={productDtlData.indexOf(pl)} onChange={() => handlePriceChange(pl)}/>
                            </li>
                        })}
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={handleUpdateSubmit}>등록하기</button>
                </div>
        </div>
    );
}

export default EditProductDetailPage;