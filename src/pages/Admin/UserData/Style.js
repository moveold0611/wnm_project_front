import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 92%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }

    & > table {
        width: 100%;
    }
`;

export const SSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > select {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    & > input { 
        margin: 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5.25px;
    }

    & > button {
        margin: 5px 1px 5px 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        width: 50px;
        cursor: pointer;
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
        border: 1px solid red;
        border-radius: 10px;
        padding: 5px;
        width: 65px;
        
        color: red;
        cursor: pointer;

        :hover {
            transition: 0.3s ease;
            background-color: #fafafa;
        }
    }
`;