import React, { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Navigate, useSearchParams } from 'react-router-dom';

function OAuth2Signin(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const queryClient = useQueryClient();
    useEffect(() => {
        localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
        queryClient.refetchQueries("getPrincipal");
    }, []);

    return <Navigate to={"/"}/>
}

export default OAuth2Signin;