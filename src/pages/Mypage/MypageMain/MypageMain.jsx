import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { getPrincipalApi } from '../../../apis/api/account';
import { tokenAuthenticate } from '../../../utils/Authenticate';

function MypageMain(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    useEffect(() => {
        tokenAuthenticate(principal);
    }, [])

    return (
        <div>
            <Link to={`/useredit/${principal?.data?.data?.userId}`} ><h3>회원 정보 수정</h3></Link>
        </div>
    );
}

export default MypageMain;