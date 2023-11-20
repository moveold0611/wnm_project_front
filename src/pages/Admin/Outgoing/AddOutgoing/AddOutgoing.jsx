import React, { useState } from 'react';
import { addOutgoing } from '../../../../apis/api/outgoing';

function AddOutgoing(props) {
    const [ productDtlId, setProductDtlId ] = useState(); 
    const [ count, setCount ] = useState(); 

    const handleAddIncomingClick = async () => {
        try {

            const response = await addOutgoing(productDtlId, count);
            console.log(response) 
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
        <div>
            <input name='productDtlId' type='text' placeholder='productDtlId' onChange={handleInputChange} value={productDtlId}/>  
            <input name='count' type='text' placeholder='count' onChange={handleInputChange} value={count}/>
            <button onClick={handleAddIncomingClick}>추가 출고</button>
        </div>
    );
}

export default AddOutgoing;