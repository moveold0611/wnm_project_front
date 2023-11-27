import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 1400px;
    background-color: #fff;
`;

export const STableBox = css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    margin-top: 25px;
    width: 80%;
`;

export const STable = css`
    border-collapse: separate;
    border-spacing: 5px;
    width: 100%;
`;

export const SThtdBox = css`

    & > th {
        border-radius: 10px;
        padding: 10px;
        width: 50%;
        height: 42px;
        text-align: center;
        background-color: #dbdbdb;

        :nth-of-type(1) {
            width: 10%;
        }
        :nth-of-type(2) {
            width: 10%;
        }
    }

    & > td {
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }
`;

export const STitleBox = css`
    & > th {
        border-radius: 10px;
        padding: 10px;
        width: 50%;
        height: 42px;
        text-align: center;
        background-color: #dbdbdb;

        :nth-of-type(1) {
            width: 10%;
        }
    }

    & > td {
        border-radius: 10px;
        padding: 10px;
        text-align: start;
        background-color: #f1f1f1;
    }
`;

export const SContentBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 25px;
    border-radius: 10px;
    width: 79%;
    height: 700px;

    background-color: #f1f1f1;

    & > p {
        width: 100%;
        padding: 25px;
        font-size: 25px;
        word-wrap: break-word;
        text-align: center;
    }
`;

export const SEditButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SEditButton = css`
    margin-right: 15px;
    border-radius: 30px;
    width: 150px;

    color: #f9fbff;
    background-color: #333;

    &:hover {
        color: #f9fbff;
        background-color: #2b64fb;
    }
`;

export const SCancelbutton = css`
    margin-right: 15px;
    border-radius: 30px;
    width: 150px;

    color: black;
    background-color: white;
`;

export const SDeleteButtonBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
    margin-top: 25px;
    width: 100%;
    
    & > button {
        margin: 25px;
        width: 150px;
        color: gray;
    }
`;
