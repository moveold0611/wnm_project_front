import React, { useState } from 'react';
import { getIncoming } from '../../../apis/api/incoming';
import { useNavigate } from 'react-router';
import Mypage from '../../Mypage/Mypage';

function Incoming(props) {
    const navigate = useNavigate();
    const [ productDtlIdInput, setProductDtlIdInput ] = useState();
    const [ getData, setGetData ] = useState([]);
    const handleInputChange = (e) => {
        setProductDtlIdInput(e.target.value)
    }

    const handleGetIncomingClick = async () => {
        try {
            const response = await getIncoming(parseInt(productDtlIdInput));
            console.log(response)
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
        </Mypage>
    );
}

export default Incoming;
