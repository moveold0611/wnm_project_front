import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;
    width: 1400px;

    & > h2 {
        text-align: end;
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
        border-radius: 3px;
        width: 30px;
        height: 30px;
        cursor: pointer;

    }
`;

export const SProductImg = css`
    width: 150px;
`;

export const SPriceTable = css`
    margin-top: 50px;
`;  

export const SPriceThBox = css`

    & > th {
        
        padding: 10px 15px;
        border: 1px solid black;
        border-radius: 5px;
        height: 50px;
        background-color: #fafafa;
    }
`;

export const SPriceTdBox = css`
    & > td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
        border-radius: 5px;
        padding: 10px 15px;
        height: 75px;
        text-align: center;
    }
`;

export const SButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 75px;
`;

export const SShowpingButton = css`
    margin: 25px;
    border: none;
    border-radius: 10px;
    width: 215px;
    height: 46px;

    color: black;
    cursor: pointer;
`;

export const SBuyButton = css`
    margin: 25px;
    border: none;
    border-radius: 10px;
    width: 215px;
    height: 46px;
    
    color: white;
    background-color: #272727;
    cursor: pointer;
`;


