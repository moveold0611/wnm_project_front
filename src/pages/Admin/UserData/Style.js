import { css } from "@emotion/react";

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


export const SSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 5px;
    width: 100%;

    & > select {
        margin-right: 10px;
        border-radius: 10px;
        padding: 5px;
        height: 28.5px;
    }

    & > input {
        margin-right: 15px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        height: 28.5px;
    }

    & > button {
        margin-right: 20px;
        padding: 5px;
        width: 75px;
    }
`;

export const STableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;

    width: 100%;
`;

export const STable = css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px;
`;

export const SThBox = css`
    & > th {
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        background-color: #dbdbdb;
    }

`;

export const STdBox = css`
    & > td {
        padding: 5px;
        border-radius: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }

    & > td > button {
        color: gray;
    }
`;


export const PageButton = () => css`
    margin: 5px;
    border: none;
    background-color: white;
    cursor: pointer;
`

export const selectedPageButton = () => css`
    margin: 5px;
    border: 1px solid wheat;
    border-radius: 50%;
    cursor: pointer;
`

export const SPageButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;