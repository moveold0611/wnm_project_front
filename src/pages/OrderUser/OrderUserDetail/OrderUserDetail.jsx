import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { getUserOrderApi } from '../../../apis/api/order';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ReviewModal from '../../../components/Review/ReviewModal/ReviewModal';


function OrderUserDetail(props) {

    const navigate = useNavigate();
    const orderId = useParams();
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(null); 
    const modalBackground = useRef();
    
    let price = 0;

    const getOrderDtl = useQuery(["getOrderDtl"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getUserOrderApi({
                searchOption: "all",
                searchValue: "",
                sortOption: ""}, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    },{
        refetchOnWindowFocus: false,
        onSuccess: response => {response?.data[0].getUserOrderProductsRespDtos.forEach(elemnt => {
            price += elemnt.productDtl.price * elemnt.count
        })
        setTotalPrice(price)
        }
    }) 

    const handleUsersOrdersOnClick = () => {
        navigate(-1)
    }

    if(getOrderDtl.isLoading) {
        return <></>
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>주문 상세 정보</h2>
                <div css={S.SSubTitleBox}>
                    <h3>주문 정보</h3>
                    <button onClick={handleUsersOrdersOnClick}>주문 정보 리스트</button>
                </div>
                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>
                                주문일자<br/>
                                [주문번호]
                            </th>
                            <th>받는 사람</th>
                            <th>휴대전화</th>
                            <th>주소</th>
                            <th>주문 처리</th>
                            <th>총 결제 금액</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={getOrderDtl?.data?.data[0].orderId} css={S.STdBox}>
                                <td>
                                    {getOrderDtl?.data?.data[0].orderDate}<br/>
                                    [{getOrderDtl?.data?.data[0].orderId}]
                                </td>
                                <td>{getOrderDtl?.data?.data[0].shippingName}</td>
                                <td>{getOrderDtl?.data?.data[0].shippingPhone}</td>
                                <td>
                                    우편번호 : [{getOrderDtl?.data?.data[0].shippingAddressNumber}]<br/>
                                    {getOrderDtl?.data?.data[0].shippingAddressName}<br/>
                                    {getOrderDtl?.data?.data[0].shippingAddressDetailName}
                                </td>
                                <td>
                                    {getOrderDtl?.data?.data[0].orderStatus === 0 && "배송 준비"}
                                    {getOrderDtl?.data?.data[0].orderStatus === 1 && "배송 중"}
                                    {getOrderDtl?.data?.data[0].orderStatus === 2 && "배송 완료"}
                                </td>
                                <td>{totalPrice.toLocaleString('ko-KR')}원</td>
                            </tr>
                    </tbody>
                </table>
                <div>
                    <h3>회원 주문 상품 상세 정보</h3>
                </div>
                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>상품 이미지</th>
                            <th>상품 명</th>
                            <th>
                                사이즈 명<br/>
                            </th>
                            <th>주문 수량</th>
                            <th>
                                상품 가격<br/>
                                [총 금액]
                            </th>
                            <th>리뷰</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getOrderDtl?.data?.data[0].getUserOrderProductsRespDtos.map(data => {
                            return <tr key={data.orderProductsId} css={S.STdBox}>
                                <td>
                                    <img css={S.SImg}src={data.productDtl.productMst.productThumbnailUrl} alt="" />
                                </td>
                                <td>{data.productDtl.productMst.productName}</td>
                                <td>
                                    {data.productDtl.size.sizeName}<br/>
                                </td>
                                <td>{data.count}</td>
                                <td>
                                    {data.productDtl.price.toLocaleString("ko-KR")}원<br/>
                                    [{(data.productDtl.price * data.count).toLocaleString("ko-KR")}원]
                                </td>
                                <td>
                                    <div css={S.SBtnWrapper}>
                                        <button onClick={() => {
                                                setModalOpen(true);
                                                setSelectedProduct(data);
                                            }
                                        }>리뷰쓰기</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                        
                        {/* <div css={S.SModalContainer} ref={modalBackground} onClick={e => {
                            if (e.target === modalBackground.current) {
                                setModalOpen(false);
                            }}}>
                            <div css={S.SModalContent}>
                                <p>리뷰내용</p>
                                <button css={S.SModalButton} onClick={() => setModalOpen(false)}>
                                    리뷰 등록하기
                                </button>
                            </div>
                        </div> */}
                </table>
            </div>
            {modalOpen &&
                <ReviewModal isOpen={modalOpen} onRequestClose={() => {setModalOpen(false)}} product={selectedProduct}/>
            }
        </Mypage>
    );
}

export default OrderUserDetail;