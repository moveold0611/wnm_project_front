import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 95%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }

    & > table {
        width: 100%;
    }
`;

export const SSubTitleBox = css`
    display: flex;
    align-items: center;

    & > button {
        margin: 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        width: 135px;
    }
`;

export const SThBox = css`
    & > th {
        border: 1px solid black;
        padding: 5px 5px;
        border-radius: 5px;
        background-color: darkgray;
        font-size: 15px;
        font-weight: 700;
    }
`;

export const STdBox = css`
    & > td {
        border-bottom: 1px solid black;
        padding: 10px 15px;
        font-size: 15px;
        text-align: center;
        
    }

    & > td > button {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        width: 65px;
        
        color: black;
        background-color: #efefef;
        cursor: pointer;

        :hover {
            transition: 0.3s ease;
            background-color: #fafafa;
        }
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