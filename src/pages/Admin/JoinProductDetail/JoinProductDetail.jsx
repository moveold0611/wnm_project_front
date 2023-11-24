import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductMstApi } from '../../../apis/api/product';
import Mypage from '../../Mypage/Mypage';

function JoinProductDetail(props) {
    const param = useParams()
    const productMstId = parseInt(param.productMstId)
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])

    const getProduct = useQuery(["getProduct"], () => {
        return getProductMstApi(productMstId);
    },{
        refetchOnWindowFocus: false,
        retry: 0
    })

    
    if(getProduct.isLoading) {
        return <></>
    }

    const handleReturnToEditPageClick = () => {
        navigate(-1);
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
            <h2>상품 상세 정보</h2>
                <div css={S.SubContainer}>
                    <div css={S.SLayout}>
                        <table css={S.STopTableBox}>
                            <tr>
                                <th>상품 추가 일자</th>
                                <td>{getProduct?.data?.data.createDate}</td>
                            </tr>
                            <tr>
                                <th>상품 이름</th>
                                <td>{getProduct?.data?.data.productName}</td>
                            </tr>
                            <tr>
                                <th>상품 설명</th>
                                <td>{getProduct?.data?.data.productDetailText}</td>
                            </tr>
                            <tr>
                                <th>동물 종류 이름[ID]</th>
                                <td>{getProduct?.data?.data.petTypeName}[{getProduct?.data?.data.petTypeId}]</td>
                            </tr>
                            <tr>
                                <th>카테고리 이름[ID]</th>
                                <td>{getProduct?.data?.data.productCategoryName}[{getProduct?.data?.data.productCategoryId}]</td>
                            </tr>
                            <tr>
                                <th>상품 마스터 ID</th>
                                <td>{productMstId}</td>
                            </tr>
                        </table>
                        {getProduct?.data?.data.productDtlList?.map(dtl => {
                        return <table key={dtl.productDtl} css={S.SBottomTableBox}>
                            <tr>
                                <th>상품 상세(사이즈별) ID</th>
                                <td>{dtl.productDtlId}</td>
                            </tr>
                            <tr>
                                <th>가격</th>
                                <td>{dtl.price}</td>
                            </tr>
                            <tr>
                                <th>사이즈[사이즈ID]</th>
                                <td>{dtl.size.sizeName}[{dtl.sizeId}]</td>
                            </tr>
                            <tr>
                                <th>실제 재고</th>
                                <td>{dtl.actualStock}</td>
                            </tr>
                            <tr>
                                <th>임시 재고(실제 재고 - 주문재고)</th>
                                <td>{dtl.tempStock}</td>
                            </tr>
                        </table>
                        })}
                        <h2>상품 썸네일 이미지</h2>
                        <img src={getProduct?.data?.data.productThumbnailUrl} alt='' width={'700px'}/>
                        <div css={S.SMidBox}>
                            <h3>상품 썸네일 이미지 URL</h3>
                            <p>{getProduct?.data?.data.productThumbnailUrl}</p>
                        </div>
                        <h2>상품 상세 정보 이미지</h2>
                        <img src={getProduct?.data?.data.productDetailUrl} alt='' width={'700px'}/>
                        <div css={S.SMidBox}>
                            <h3>상품 상세 정보 이미지 URL</h3>
                            <p>{getProduct?.data?.data.productDetailUrl}</p>
                        </div>
                    <button css={S.SButton} onClick={handleReturnToEditPageClick}>전체 상품 리스트</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default JoinProductDetail;