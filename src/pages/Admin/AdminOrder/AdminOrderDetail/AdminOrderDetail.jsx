import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrdersForAdmin, updateOrderStatus } from '../../../../apis/api/order';

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

    const handleNavigateAdminOrderClick = () => {
        navigate("/admin/order")
    }

    return (
        <div> 
            <div key={getProduct?.data?.data[0].orderId}>
                <p>주문번호: {getProduct?.data?.data[0].orderId}</p>
                <p>받는사람: {getProduct?.data?.data[0].shippingName}</p>
                <p>사용자번호: {getProduct?.data?.data[0].userId}</p>
                <p>전화번호: {getProduct?.data?.data[0].shippingPhone}</p>
                <p>주문일자: {getProduct?.data?.data[0].orderDate}</p>
                <p>배송상태: {getProduct?.data?.data[0].orderStatus === 0 && "배송준비"}
                {getProduct?.data?.data[0].orderStatus === 1 && "배송중"}
                {getProduct?.data?.data[0].orderStatus === 2 && "배송완료"}
                <select option={status} onChange={handleOrderStatusChange}>
                    {status.map(st => {
                        return <option key={st.value} value={st.value} label={st.label}></option>
                    })}
                </select>
                <button onClick={handleUpdateOrderStatusClick}>배송상태변경</button> </p>
                <p>우편번호: {getProduct?.data?.data[0].shippingAddressNumber}</p>
                <p>주소: {getProduct?.data?.data[0].shippingAddressName}</p>
                <p>상세주소: {getProduct?.data?.data[0].shippingAddressDetailName}</p>
                <p>주문총액: {totalPrice}</p>
                <p>------------------------------------------------------------------------------</p>
                {getProduct?.data?.data[0].getUserOrderProductsRespDtos.map(data => {
                    return <div key={data.orderProductsId}>
                        <p>개별주문번호: {data.orderProductsId}</p>
                        <p>상품번호: {data.productDtl.productDtlId}</p>
                        <img src={data.productDtl.productMst.productThumbnailUrl} alt='' width='60px'/>
                        <p>상품명: {data.productDtl.productMst.productName}</p>
                        <p>상품가격(개당): {data.productDtl.price}</p>
                        <p>주문수량: {data.count}</p>
                        <p>상품가격(총액): {data.productDtl.price * data.count}</p>
                        <p>사이즈명: {data.productDtl.size.sizeName}</p>
                        <p>사이즈 번호: {data.productDtl.size.sizeId}</p>
                        <p>상품재고(실재): {data.productDtl.actualStock}</p>
                        <p>상품재고(임시): {data.productDtl.tempStock}</p>
                        <p>-----------------------------------------------------------------------</p>
                    </div>
                })}
                <button onClick={handleNavigateAdminOrderClick}>주문 목록</button>
            </div>
        </div>
    );
}

export default AdminOrderDetail;