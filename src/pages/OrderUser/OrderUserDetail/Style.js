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

export const SSubTitleBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 5px;
    width: 100%;

    & > h3 {
        margin-left: 20px;
        font-size: 17.5px;
    }

    & > button {
        margin-left: 15px;
    }
`;

export const STableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;
    margin-bottom: 25px;

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

export const SSettingBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > select {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        width: 85px;
    }

    & > button {
        margin: 5px auto;
        border: 1px solid black;
        border-radius: 10px;
        padding: 5.5px;
        width: 85px;
        cursor: pointer;

        :hover {
            transition: 0.3s ease;
            background-color: #fafafa;
        }
    }
`;

export const SImg = css`
    width: 100px;
`;

export const SBtnWrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
