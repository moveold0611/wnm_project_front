import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useQuery, useQueryClient } from 'react-query';
import Mypage from '../Mypage/Mypage';
import { getUserOrderApi } from '../../apis/api/order';
import { useParams } from 'react-router-dom';

function OrderUser(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = useParams();

    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
        sortOption: ""
    })

    const [ userOrder, setUserOrder ] = useState([])

    const getOrderUserProduct = useQuery(["getOrderUserProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getUserOrderApi(searchData, option);
            return await response;
        } catch(error){
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setUserOrder(response?.data)
        }
    })

    if(getOrderUserProduct.isLoading) {
        return <></>;
    }

    console.log(userOrder)


    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>주문내역 조회</h2>
                <table>
                    <thead>
                        <tr css={S.SCartThBox}>
                            <th>
                                주문일자<br/>
                                [주문번호]
                            </th>
                            <th>이미지</th>
                            <th>상품명</th>
                            <th>사이즈</th>
                            <th>상품구매금액</th>
                            <th>주문처리</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrder?.map(data => {
                            return <tr key={data.orderId} css={S.SCartTdBox}>
                                <td>
                                    {data.orderDate}<br/>
                                    [{data.orderId}]
                                    </td>
                                <td>
                                    <img css={S.SProductImg} src={0}/>
                                </td>
                                <td>상품명</td>
                                <td>M</td>
                                <td>300,000원</td>
                                <td>배송중</td>
                                <td>
                                    <button>리뷰쓰기</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Mypage>
    );
}

export default OrderUser;