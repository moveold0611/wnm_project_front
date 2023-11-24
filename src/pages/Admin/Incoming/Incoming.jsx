import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { getIncoming } from '../../../apis/api/incoming';
import { useNavigate } from 'react-router';
import Mypage from '../../Mypage/Mypage';
import { useQueryClient } from 'react-query';

function Incoming(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
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

    const handleGetIncomingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await getIncoming(parseInt(productDtlIdInput), option);
            setGetData(response?.data)
        } catch (error) {            
            console.log(error)
        }        
    }

    const handleNavigateAddIncomingPageClick = () => {
        navigate("/admin/incoming/add")
    }

    

    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>입고 조회</h2>
                상품 사이즈별 번호 : 
                <input value={productDtlIdInput} type='text' onChange={handleInputChange}/>
                <button onClick={handleGetIncomingClick}>입고 조회</button>
                <ul>
                    {getData.map(data => {
                        return <li>입고번호 : {data?.historyId} /
                        수량 : {data?.count} /
                        날짜: {data?.createDate}</li>                   
                    })}
                </ul>
                <button onClick={handleNavigateAddIncomingPageClick}>추가 입고</button>
            </div>
        </Mypage>
    );
}

export default Incoming;
