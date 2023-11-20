import React, { useState } from 'react';
import { addIncoming } from '../../../../apis/api/incoming';

function AddIncoming(props) {
    const [ productDtlId, setProductDtlId ] = useState(); 
    const [ count, setCount ] = useState(); 

    const handleAddIncomingClick = async () => {
        try {
            const response = await addIncoming(productDtlId, count);
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
            <button onClick={handleAddIncomingClick}>추가 입고</button>
        </div>
    );
}

export default AddIncoming;