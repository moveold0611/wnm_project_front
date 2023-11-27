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
    justify-content: space-between;
    align-items: center;

    margin: 0px auto;
    width: 100%;
`;

export const SRightSelectBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-bottom: 5px;
    width: 100%;

    & > p {
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

export const SLeftSelectBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 5px;
    width: 100%;

    & > p {
        margin-left: 10px;
        border-radius: 10px;
        padding: 5px;
        height: 28.5px;
    }

    & > input {
        margin-left: 15px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        height: 28.5px;
    }

    & > button {
        margin-left: 20px;
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
        padding: 10px;
        text-align: center;
        background-color: #dbdbdb;

        :nth-of-type(1) {
            width: 20%;
        }
        :nth-of-type(2) {
            width: 60%;
        }
        :nth-of-type(3) {
            width: 20%;
        }
    }
`;

export const STdBox = css`
    & > td {
        padding: 10px;
        border-bottom: 2px solid #dbdbdb;
        border-right: 2px solid #dbdbdb;
        border-radius: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }
`;

export const SInAddButton = css`
    margin: 15px 15px 0px 0px;
    border-radius: 30px;
    width: 150px;

    color: #f9fbff;
    background-color: #333;

    &:hover {
        color: #f9fbff;
        background-color: #2b64fb;
    }
`;