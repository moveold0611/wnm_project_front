import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

function OAuth2Signin(props) {

    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(() => {
        localStorage.setItem("accessToken", "Bearer " + searchParams.get("token"));
    })

    return <Navigate to={"/"} />;
}

export default OAuth2Signin;