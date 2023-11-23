import React, { useState } from 'react';
import { getOutgoing } from '../../../apis/api/outgoing';
import { useNavigate } from 'react-router';
import Mypage from '../../Mypage/Mypage';

function Outgoing(props) {
    const navigate = useNavigate();
    const [ productDtlIdInput, setProductDtlIdInput ] = useState();
    const [ getData, setGetData ] = useState([]);
    const handleInputChange = (e) => {
        setProductDtlIdInput(e.target.value)
    }

    const handleGetOutgoingClick = async () => {
        try {
            const response = await getOutgoing(parseInt(productDtlIdInput));
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
        </Mypage>
    );
}

export default Outgoing;
