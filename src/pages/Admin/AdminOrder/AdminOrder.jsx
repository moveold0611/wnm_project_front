import React, { useState } from 'react';
import { getOrdersForAdmin, getUserOrder, updateOrderStatus } from '../../../apis/api/order';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function AdminOrder(props) {
    const navigate = useNavigate()
    const [ orderStatus, setOrderStatus ] = useState(0)
    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
        sortOption: ""
    });
    const searchOption = [
        {value: "받는사람"},
        {value: "전화번호"},
        {value: "주소"},
        {value: "유저번호"},
        {value: "주문번호"}
    ]
    const sortOption = [
        {value: "일자내림차순"},
        {value: "일자올림차순"}
    ]
    const status = [
        { value: 0, label:"배송준비" },
        { value: 1, label:"배송중" },
        { value: 2, label:"배송완료" }
    ]

    const getOrders = useQuery(["getOrders"], () => {
        return getOrdersForAdmin(searchData);
    },{
        retry: 0,
        refetchOnWindowFocus: false
    })

    if(getOrders.isLoading) {
        return <></>
    }

    const handleSearchDataChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }

    const handleNavigateProductDetailClick = (orderId) => {
        navigate(`/admin/order/${orderId}`)
    }

    const handleOrderStatusChange = (e) => {
        setOrderStatus(parseInt(e.target.value))
    }

    const handleUpdateOrderStatusClick = async (data) => {
        try {
            if(data.orderStatus === orderStatus) {
                alert("같은 상태로는 변경할 수 없습니다.")
                return;
            }
            await updateOrderStatus(parseInt(data.orderId), parseInt(orderStatus))
            alert("배송상태 수정 완료")
            getOrders.refetch()
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleSearchOrderClick = () => {
        getOrders.refetch()
    }

    return (
        <div>
            <select option={searchOption} name='searchOption' onChange={handleSearchDataChange}>
                {searchOption.map(option => {
                    return <option key={option.value} value={option.value} label={option.value}></option>
                })}
            </select>
            <select option={sortOption} name='sortOption' onChange={handleSearchDataChange}>
                {sortOption.map(sort => {
                    return <option key={sort.value} value={sort.value} label={sort.value}></option>
                })}
            </select>
            <input type="text" name='searchValue' onChange={handleSearchDataChange}/>
            <button onClick={handleSearchOrderClick}>검색</button>
            <div>
                {getOrders?.data?.data.map(data => {
                    return <div key={data.orderId}>
                        <p>주문번호: {data.orderId}</p>
                        <p>받는사람: {data.shippingName}</p>
                        <p>사용자번호: {data.userId}</p>
                        <p>전화번호: {data.shippingPhone}</p>
                        <p>주문일자: {data.orderDate}</p>
                        <p>배송상태: {data.orderStatus === 0 && "배송준비"}
                        {data.orderStatus === 1 && "배송중"}
                        {data.orderStatus === 2 && "배송완료"}
                        <select option={status} onChange={handleOrderStatusChange}>
                        {status.map(st => {
                            return <option key={st.value} value={st.value} label={st.label}></option>
                        })}
                        </select>
                        <button onClick={()=>handleUpdateOrderStatusClick(data)}>배송상태변경</button> </p>
                        <p>우편번호: {data.shippingAddressNumber}</p>
                        <p>주소: {data.shippingAddressName}</p>
                        <p>상세주소: {data.shippingAddressDetailName}</p>
                        <button onClick={() => handleNavigateProductDetailClick(data.orderId)}>배송상세</button>                   
                        <p>-------------------------------------------------------------------------</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default AdminOrder;