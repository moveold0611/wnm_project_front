import { css } from '@emotion/react';

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 95%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }
`;

export const SubContainer = css`
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    width: 100%;
    background-color: #fbfcff;
`;

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SH1 = css`
    padding: 30px 80px;
    color: #333;
    font-weight: bold;
    border-bottom: 1px dotted #aeaeae;
    margin-bottom: 50px;
`;

export const SImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid black;
    width: 100%;
    
    & img {
        height: 700px;
        width: 700px;
    }
`

export const SInputBox = css`
    width: 500px;
    justify-content: flex-end;
`

export const Sfile = css`
    display: none;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    & > input { 
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 350px;
        font-size: 15px;
    }
    
    & > h4 {
        color: red;
    }
`;

export const SSelect = css`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 370px;
    font-size: 15px;
`;

export const SButton = css`
    margin: 15px 0 100px;
    padding: 12px 180px;
    background-color: #333;
    color: #f9fbff;
    cursor: pointer;
    font-size: 20px;
    border: none;
    font-weight: bold;
    border-radius: 50px;

    &:hover {
        background-color: #2b64fb;
        color: #f9fbff;
        font-weight: bold;
    }
    
`;