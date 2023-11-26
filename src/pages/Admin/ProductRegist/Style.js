import { css } from '@emotion/react';

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
    width: 95%;
`;

export const STopTitle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    margin-bottom: 25px;
    width: 100%;
    
    & > h2 {
        font-size: 20px;
    }
`;

export const SubContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
`;

export const SH1 = css`
    margin: 25px;
    padding: 0px 200px 25px;
    border-bottom: 2px dashed #aeaeae;

    font-size: 30px;
`;

export const SImgBox = css`
    
    & > img {
        width: 700px;
    }
`;


export const SButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        margin: 50px auto;
        border-radius: 50px;
        padding: 10px;
        width: 350px;

        font-size: 20px;
        color: #f9fbff;
        background-color: #333;

        &:hover {
            color: #f9fbff;
            background-color: #2b64fb;
        }
    }
`;

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

    & > h2 {
        margin: 15px 0px ;
        font-size: 22.5px;
    }

    & > input { 
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 350px;
        font-size: 15px;
    }

    & > select {
        width: 350px;
    }

    & > textarea {
        border-radius: 10px;
        padding: 10px;
        width: 350px;
        height: 300px;
        resize: none;
    }
    
    & > h4 {
        margin-top: 15px;
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
    border-radius: 50px;
    padding: 10px;
    width: 350px;

    font-size: 20px;
    color: #f9fbff;
    background-color: #333;

    &:hover {
        color: #f9fbff;
        background-color: #2b64fb;
    }
    
`;