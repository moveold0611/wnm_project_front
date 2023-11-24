import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getOutgoing } from '../../../apis/api/outgoing';
import { useNavigate } from 'react-router';
import Mypage from '../../Mypage/Mypage';
import { useQueryClient } from 'react-query';

function Outgoing(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();
    const [ productDtlIdInput, setProductDtlIdInput ] = useState();
    const [ getData, setGetData ] = useState([]);
    const handleInputChange = (e) => {
        setProductDtlIdInput(e.target.value)
    }

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])

    const handleGetOutgoingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await getOutgoing(parseInt(productDtlIdInput), option);
            console.log(response)
            setGetData(response?.data)
        } catch (error) {            
            console.log(error)
        }        
    }

    const handleNavigateAddIncomingPageClick = () => {
        navigate("/admin/outgoing/add")
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
            <h2>출고 조회</h2>
                상품 사이즈별 번호 : 
                <input value={productDtlIdInput} type='text' onChange={handleInputChange}/>
                <button onClick={handleGetOutgoingClick}>출고 조회</button>
                <ul>
                    {getData.map(data => {
                        return <li>출고번호 : {data?.historyId} /
                        수량 : {data?.count} /
                        날짜: {data?.createDate}</li>                   
                    })}
                </ul>
                <button onClick={handleNavigateAddIncomingPageClick}>추가 출고</button>
            </div>
        </Mypage>
    );
}

export default Outgoing;
