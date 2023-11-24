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
    margin: 30px 0px 100px;
    border: none;
    border-radius: 50px;
    padding: 15px 15px;
    width: 350px;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #333;
    color: #f9fbff;
    cursor: pointer;

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

export const SInfoNameInput = css`
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
    
`;

export const SInfoTextInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    & > textarea { 
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 350px;
        height: 250px;
        font-size: 15px;
        resize: none;
    }
    
`;

export const SInfoSizeInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    

    & > ul {
        margin-top: 0px;
        padding: 0px;
        list-style-type: none;
    }

    & > ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin: 15px;
        width: 250px;
    }

    
    & > ul > li > label {
        font-size: 17px;
    }

    & > ul > li > input {
        margin-left: 15px;
        border: 1px solid black;
        border-radius: 5px;
        height: 25px;
    }

`;

export const SSubmit = css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

export const SH1 = css`
    padding: 30px 80px;
    color: #333;
    font-weight: bold;
    border-bottom: 1px dotted #aeaeae;
    margin-bottom: 50px;
`;



