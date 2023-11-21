import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 90%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }

    & > table {
        width: 100%;
    }
`

export const SCartThBox = css`
    & > th {
        
        border: 1px solid black;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: darkgray;
    }
`;

export const SCartTdBox = css`
    & > td {
        border-bottom: 1px solid black;
        padding: 10px 15px;
        text-align: center;
    }

    & > td > button {
        border: none;
        border-radius: 10px;
        width: 100px;
        height: 50px;

        color: white;
        background-color: black;
        cursor: pointer;

        :hover {
            transition: 0.3s ease;
            background-color: #0064ff;
        }
    }
`;

export const SProductImg = css`
    width: 150px;
`;
