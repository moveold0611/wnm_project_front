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
    
    justify-content: center;
    align-items: center;
    

    border-radius: 20px;
    width: 100%;
`;



export const SuSubContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        margin: 25px;
        padding: 0px 200px 25px;
        border-bottom: 2px dashed #aeaeae;

        font-size: 30px;
    }

    & > textarea {
        margin-bottom: 30px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 15px;
        width: 800px;

        font-size: 15px;
        resize: none;
    }

    & > button {
        margin: 30px 0px 30px;
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
    }
`;

export const STitle = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;

    &  > input {
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 450px;
    }
`;

export const SFixBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 15px;
`;