import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { addIncoming } from '../../../../apis/api/incoming';
import Mypage from '../../../Mypage/Mypage';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

function AddIncoming(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();
    const [ productDtlId, setProductDtlId ] = useState(""); 
    const [ count, setCount ] = useState(""); 

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])

    const handleAddIncomingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await addIncoming(parseInt(productDtlId), parseInt(count), option);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleInputChange = (e) => {
        if(e.target.name === "count") {
            setCount(e.target.value)
        }else {
            setProductDtlId(e.target.value)
        }
    }

    return (
        <Mypage>
            <div css={S.SContainer}>
            <h2>입고 추가</h2>
                <input name='productDtlId' type='text' placeholder='productDtlId' onChange={handleInputChange} value={productDtlId}/>  
                <input name='count' type='text' placeholder='count' onChange={handleInputChange} value={count}/>
                <button onClick={handleAddIncomingClick}>추가 입고</button>
            </div>
        </Mypage>
    );
}

export default AddIncoming;