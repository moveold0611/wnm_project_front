import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SSignupText = css`
    & > h1 {
        margin: 175px auto 50px;
        font-size: 30px;
    }
`;

export const SSignupGoogleButton = css`
    width: 400px;
    height: 45px;
    background-color: #fff;
    position: relative;
`;

export const SSignupGoogleButtonImg = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
`;

export const SSignupkakaoButton = css`
    width: 400px;
    height: 45px;
    background-color: #ffeb00;
    position: relative;
    border: none;
    margin: 40px 0;
`;

export const SSignupkakaoButtonImg = css`
    position: absolute;
    top: 5px;
    left: 6px;
    width: 35px;
    height: 35px;
`;

export const SSignupnaverButton = css`
    width: 400px;
    height: 45px;
    background-color: #03C75A;
    position: relative;
    border: none;
`;

export const SSignupnaverButtonImg = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 43px;
    height: 43px;
`;