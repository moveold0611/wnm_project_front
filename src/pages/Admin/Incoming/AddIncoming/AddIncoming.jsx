import React, { useState } from 'react';
import { addIncoming } from '../../../../apis/api/incoming';
import Mypage from '../../../Mypage/Mypage';

function AddIncoming(props) {
    const [ productDtlId, setProductDtlId ] = useState(); 
    const [ count, setCount ] = useState(); 

    const handleAddIncomingClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await addIncoming(productDtlId, count, option);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const handleInputChange = (e) => {
        if(e.target.name === "count") {
            setCount(parseInt(e.target.value))
        }else {
            setProductDtlId(parseInt(e.target.value))
        }
    }

    return (
        <Mypage>
            <input name='productDtlId' type='text' placeholder='productDtlId' onChange={handleInputChange} value={productDtlId}/>  
            <input name='count' type='text' placeholder='count' onChange={handleInputChange} value={count}/>
            <button onClick={handleAddIncomingClick}>추가 입고</button>
        </Mypage>
    );
}

export default AddIncoming;