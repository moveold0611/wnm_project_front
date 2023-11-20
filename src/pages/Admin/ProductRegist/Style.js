import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    margin: 50px auto;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 100%;
`;

export const SImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid black;
    width: 100%;
    
    & img {
        overflow: hidden;
        box-sizing: border-box;
        height: 300px;
        width: 300px;
    }
`

export const SInputBox = css`
    width: 500px;
    justify-content: flex-end;
`

export const Sfile = css`
    display: none;
`;

export const SButton = css`
    padding: 12px 180px;
    background-color: #333;
    color: #f9fbff;
    cursor: pointer;
    font-size: 20px;
    margin: 30px 0 100px;
    border: none;
    font-weight: bold;
    border-radius: 50px;

    &:hover {
        background-color: #2b64fb;
        color: #f9fbff;
        font-weight: bold;
    }
`;

export const SH2 = css`
padding: 30px 80px;
color: #333;
font-weight: bold;
border-bottom: 1px dotted #aeaeae;
margin-bottom: 50px;
`;

export const SInfoInput = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0;

    & > h2 {
        width: 200px;
        margin-bottom: 20px;
    }
    
    & > input{
        width: 500px;
        height: 35px;
        font-size: 18px;
        padding-left: 20px;
    }
`;

export const SSelect = css`
    width: 520px;
    height: 40px;
    font-size: 18px;
`;