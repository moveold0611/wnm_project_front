import React, { useEffect } from 'react';
import Oauth2GoogleImg from '../../images/oauth2/google.png';
import Oauth2KakaoImg from '../../images/oauth2/kakao.png';
import Oauth2NaverImg from '../../images/oauth2/naver.png';
import * as S from "./Style";
import { reverseAuthenticate } from '../../utils/Authenticate';
/**@jsxImportSource @emotion/react */

function Signin(props) {

    useEffect(() => {
        reverseAuthenticate();
    }, [])

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    const handleKakaoLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    return (

        <div css={S.SLayout}>
            <div css={S.SContainer}>
                    <div css={S.SSignupText}>
                        <h1>로그인</h1>
                    </div>
                    <div>
                        <button onClick={handleGoogleLogin} css={S.SSignupGoogleButton}>
                            <img src={Oauth2GoogleImg} alt="구글 로그인" css={S.SSignupGoogleButtonImg} />
                            Google로 시작하기
                        </button>
                    </div>
                    <div>
                        <button onClick={handleKakaoLogin} css={S.SSignupkakaoButton}>
                            <img src={Oauth2KakaoImg} alt="카카오 로그인" css={S.SSignupkakaoButtonImg} />
                            카카오로 시작하기
                        </button>
                    </div>
                    <div>
                        <button onClick={handleNaverLogin} css={S.SSignupnaverButton}>
                            <img src={Oauth2NaverImg} alt="네이버 로그인" css={S.SSignupnaverButtonImg} />
                            네이버로 시작하기
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default Signin;