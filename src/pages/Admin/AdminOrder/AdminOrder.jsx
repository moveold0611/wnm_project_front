import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import { getOrdersForAdmin, updateOrderStatus } from '../../../apis/api/order';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Mypage from '../../Mypage/Mypage';
import { async } from 'q';

function AdminOrder(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const option = {
        headers: {
            Authorization: localStorage.getItem("accessToken")
        }
    }
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
        { value: 2, label:"배송완료" },
        { value: 3, label:"구매확정" }
    ]

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])

    const getOrders = useQuery(["getOrders"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await getOrdersForAdmin(searchData, option);
        } catch (error) {
            alert(error.response.data)
        }
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
            await updateOrderStatus(parseInt(data.orderId), parseInt(orderStatus), option)
            alert("배송상태 수정 완료")
            getOrders.refetch()
        } catch (error) {
            alert(error.response.data)
        }
    }

    const handleSearchOrderClick = () => {
        getOrders.refetch()
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearchOrderClick();
        }
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
                <div css={S.STopTitle}>
                    <h2>회원 주문 정보 리스트</h2>
                </div>
                <div css={S.SSelectBox}>
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
                    <input type="text" name='searchValue' onKeyDown={handleOnKeyPress} onChange={handleSearchDataChange}/>
                    <button onClick={handleSearchOrderClick}>검색</button>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
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
                                <th>배송 상세 정보</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getOrders?.data?.data.map(data => {
                                return <tr key={data.orderId} css={S.STdBox}>
                                    <td>
                                        {data.orderDate}<br/>
                                        [{data.orderId}]
                                    </td>
                                    <td>{data.userId}</td>
                                    <td>{data.shippingName}</td>
                                    <td>{data.shippingPhone}</td>
                                    <td>
                                        우편번호 :[{data.shippingAddressNumber}]<br/>
                                        {data.shippingAddressName}<br/>
                                        {data.shippingAddressDetailName}
                                    </td>
                                    <td>
                                        {data.orderStatus === 0 && "배송준비"}
                                        {data.orderStatus === 1 && "배송중"}
                                        {data.orderStatus === 2 && "배송완료"}
                                        {data.orderStatus === 3 && "구매확정"}
                                    </td>
                                    <td>
                                        <div css={S.SSettingBox}>
                                            <select option={status} onChange={handleOrderStatusChange}>
                                                {status.map(st => {
                                                    return <option key={st.value} value={st.value} label={st.label}></option>
                                                })}
                                            </select>
                                            <button onClick={()=>handleUpdateOrderStatusClick(data)}>배송상태변경</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => handleNavigateProductDetailClick(data.orderId)}>배송상세</button>  
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Mypage>
    );
}

export default AdminOrder;