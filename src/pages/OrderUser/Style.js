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
        height: 42px;
        text-align: center;
        background-color: #dbdbdb;
    }
`;

export const STdBox = css`
    & > td {
        border-radius: 10px;
        padding: 5px;
        text-align: center;
        background-color: #f1f1f1;

    }
`;

export const SReviewBox = css`
    display: flex;
    flex-direction: column;

    & > button {
        padding: 5px;
        margin-top: 10px;
    }
`;

export const SProductImg = css`
    width: 100px;
`;
