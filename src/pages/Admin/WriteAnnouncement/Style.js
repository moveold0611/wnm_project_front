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

export const SuSubContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        padding: 30px 80px;
        color: #333;
        font-weight: bold;
        border-bottom: 1px dotted #aeaeae;
        margin-bottom: 50px;
    }

    & > input {
        margin-bottom: 15px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 450px;
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