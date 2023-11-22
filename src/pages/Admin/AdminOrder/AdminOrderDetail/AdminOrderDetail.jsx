import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrdersForAdmin, updateOrderStatus } from '../../../../apis/api/order';
import Mypage from '../../../Mypage/Mypage';

function AdminOrderDetail(props) {
    const navigate = useNavigate()
    const param = useParams();
    const orderId = param.orderId;
    const [ totalPrice,setTotalPrice ] = useState(0);
    const [ orderStatus, setOrderStatus ] = useState(0)
    let price = 0;
    const status = [
        { value: 0, label:"배송준비" },
        { value: 1, label:"배송중" },
        { value: 2, label:"배송완료" }
    ]


    const getProduct = useQuery([], () => {
        return getOrdersForAdmin({
            searchOption: "주문번호",
            searchValue: parseInt(orderId),
            sortOption: ""
        });
    }, {
        refetchOnWindowFocus: false,
        retry: 0,
        onSuccess: response => {response?.data[0].getUserOrderProductsRespDtos.forEach(element => {
            price += element.productDtl.price * element.count
        })
        setTotalPrice(price)
    }
    })


    if(getProduct.isLoading) {
        return <></>
    }


    const handleOrderStatusChange = (e) => {
        setOrderStatus(parseInt(e.target.value))
    }

    const handleUpdateOrderStatusClick = async () => {
        try {
            if(getProduct?.data?.data[0].orderStatus === orderStatus) {
                alert("같은 상태로는 변경할 수 없습니다.")
                return;
            }
            await updateOrderStatus(parseInt(getProduct?.data?.data[0].orderId), parseInt(orderStatus))
            alert("배송상태 수정 완료")
            getProduct.refetch()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleUsersOrdersOnClick = () => {
        navigate(-1)
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>회원 주문 상세 정보</h2>
                <div css={S.SSubTitleBox}>
                    <h3>회원 주문 정보</h3>
                    <button onClick={handleUsersOrdersOnClick}>회원 주문 정보 리스트</button>
                </div>
                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>
                                주문 일자<br/>
                                [주문번호]
                            </th>
                            <th>주문자 번호</th>
                            <th>받는 사람</th>
                            <th>휴대전화</th>
                            <th>주소</th>
                            <th>배송 상태</th>
                            <th>배송 상태 설정</th>
                            <th>총 결제 금액</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key={getProduct?.data?.data[0].orderId} css={S.STdBox}>
                                <td>
                                    {getProduct?.data?.data[0].orderDate}<br/>
                                    [{getProduct?.data?.data[0].orderId}]
                                </td>
                                <td>{getProduct?.data?.data[0].userId}</td>
                                <td>{getProduct?.data?.data[0].shippingName}</td>
                                <td>{getProduct?.data?.data[0].shippingPhone}</td>
                                <td>
                                    우편번호 :[{getProduct?.data?.data[0].shippingAddressNumber}]<br/>
                                    {getProduct?.data?.data[0].shippingAddressName}<br/>
                                    {getProduct?.data?.data[0].shippingAddressDetailName}
                                </td>
                                <td>
                                    {getProduct?.data?.data[0].orderStatus === 0 && "배송준비"}
                                    {getProduct?.data?.data[0].orderStatus === 1 && "배송중"}
                                    {getProduct?.data?.data[0].orderStatus === 2 && "배송완료"}
                                </td>
                                <td>
                                    <div css={S.SSettingBox}>
                                        <select option={status} onChange={handleOrderStatusChange}>
                                            {status.map(st => {
                                                return <option key={st.value} value={st.value} label={st.label}></option>
                                            })}
                                        </select>
                                        <button onClick={handleUpdateOrderStatusClick}>배송상태변경</button>
                                    </div>
                                </td>
                                <td>
                                    {totalPrice.toLocaleString("ko-KR")}원
                                </td>
                            </tr>
                    </tbody>
                </table>
                <div>
                    <h3>회원 주문 상세 정보</h3>
                </div>
                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>개별 주문 번호</th>
                            <th>상품 번호</th>
                            <th>상품 이미지</th>
                            <th>상품 명</th>
                            <th>
                                사이즈 명<br/>
                                [사이즈 번호]
                            </th>
                            <th>주문 수량</th>
                            <th>
                                상품 가격<br/>
                                [총 금액]
                            </th>
                            <th>
                                상품 재고<br/>
                                (실제 재고)
                            </th>
                            <th>
                                상품 재고<br/>
                                (임시 재고)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getProduct?.data?.data[0].getUserOrderProductsRespDtos.map(data => {
                            return <tr key={data.orderProductsId} css={S.STdBox}>
                                <td>{data.orderProductsId}</td>
                                <td>{data.productDtl.productDtlId}</td>
                                <td>
                                    <img css={S.SImg}src={data.productDtl.productMst.productThumbnailUrl} alt="" />
                                </td>
                                <td>{data.productDtl.productMst.productName}</td>
                                <td>
                                    {data.productDtl.size.sizeName}<br/>
                                    [{data.productDtl.size.sizeId}]
                                </td>
                                <td>{data.count}</td>
                                <td>
                                    {data.productDtl.price.toLocaleString("ko-KR")}원<br/>
                                    [{(data.productDtl.price * data.count).toLocaleString("ko-KR")}원]
                                </td>
                                <td>{data.productDtl.actualStock}</td>
                                <td>{data.productDtl.tempStock}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Mypage>
    );
}

export default AdminOrderDetail;