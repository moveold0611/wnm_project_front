import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

function MypageMain(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    
    useEffect(() => {
        console.log(principal.data.data)
        if(!principal.data) {
            alert("로그인 후 이용해주세요.")
            window.location.replace("/")
        }
    }, [])

    return (
        <div>
            <Link to={`/useredit/${principal.data.data.userId}`} ><h3>Cat(회원 정보 수정)</h3></Link>
        </div>
    );
}

export default MypageMain;