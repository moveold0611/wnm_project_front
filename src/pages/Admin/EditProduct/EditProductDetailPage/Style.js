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

export const SFile = css`
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
    width: 500px;
    justify-content: flex-end;
`;

export const SInfoNameInput = css`
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
    
`;

export const SInfoTextInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    & > h2 {
        margin: 15px 0px ;
        font-size: 22.5px;
    }

    & > textarea {
        border-radius: 10px;
        padding: 10px;
        width: 350px;
        height: 300px;
        resize: none;
    }
    
`;

export const SInfoSizeInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;

    & > h2 {
        margin: 15px 0px ;
        font-size: 22.5px;
    }

    & > ul {
        list-style-type: none;
    }

    & > ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin: 15px;
        width: 350px;
    }

    
    & > ul > li > label {
        font-size: 18px;
    }

    & > ul > li > input {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 250px;
        font-size: 15px;
    }

`;

export const SSubmit = css`
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



