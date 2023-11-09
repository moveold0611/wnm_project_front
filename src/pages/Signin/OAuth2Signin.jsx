import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';

function OAuth2Signin(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();


    const login = useQuery(["login"], async () => {
        localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: () => window.location.replace("/")
    }
    )

    if(login.isLoading) {
        return <>로그인중...</>
    }
}

export default OAuth2Signin;