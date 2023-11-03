import React, { useEffect } from 'react';
import * as S from "./Style";
/**@jsxImportSource @emotion/react */

function Signin(props) {

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }


    const handleKakaoLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    useEffect(() => {
        if(window.confirm("등록되지 않은 간편로그인 사용자입니다. 회원등록 하시겠습니까?")){
            window.location.replace("/auth/signup");
        }
    }, [])

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div>
                    <div css={S.SSignupText}><h1>로그인</h1></div>
                    <div><button onClick={handleGoogleLogin} css={S.SSignupGoogleButton}><img src="/images/oauth2/google.png" alt="구글 로그인" css={S.SSignupGoogleButtonImg} />Google로 시작하기</button></div>
                    <div><button onClick={handleKakaoLogin} css={S.SSignupkakaoButton}><img src="/images/oauth2/kakao.png" alt="카카오 로그인" css={S.SSignupkakaoButtonImg} />카카오로 시작하기</button></div>
                    <div><button onClick={handleNaverLogin} css={S.SSignupnaverButton}><img src="/images/oauth2/naver.png" alt="네이버 로그인" css={S.SSignupnaverButtonImg} />네이버로 시작하기</button></div>
                </div>
            </div>
        </div>
    );
}

export default Signin;