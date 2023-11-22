import { css } from '@emotion/react';

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 90%;

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

export const SImg = css`
    margin: 20px auto;
    & > div{
        display: flex;
        justify-content: center;
    }
`;

export const SFileSelect = css`
    display: none;
`;

export const SLabelUpload = css`
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

export const SInformation = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 750px;
    margin: 0 auto;
`;

export const SInfoInput = css`
    display: flex;
    justify-content: space-around;
    margin: 15px 0;

    & > h2 {
        width: 200px;
    }
    
    & > input{
        width: 500px;
        height: 45px;
        font-size: 18px;
        padding-left: 20px;
    }

    & > ul {

        & > li {
            list-style: none;
            margin-top: -18px;
        }
    
        & > li > input {
        width: 500px;
        height: 45px;
        font-size: 18px;
        padding-left: 20px;
        
    }
}
`;

export const SSubmit = css`
    display: flex;
    justify-content: center;
    margin-top: 80px;
`;

export const SH1 = css`
    padding: 30px 80px;
    color: #333;
    font-weight: bold;
    border-bottom: 1px dotted #aeaeae;
    margin-bottom: 50px;
`;



