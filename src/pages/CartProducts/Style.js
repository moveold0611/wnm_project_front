import { css } from "@emotion/react";

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
        padding: 10px;
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

    & > td > img {
        width: 100px;
    }

    & > td > button {
        height: 35px;
        color: gray;
    }
`;

export const SProductImg = css`
    width: 150px;
`;

export const SPriceTableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;
    margin-bottom: 25px;

    width: 100%;
`;


export const SPriceTable = css`
    margin: 25px;
    width: 65%;
    border-collapse: collapse;
`;  

export const SPriceThBox = css`

    & > th {
        border: 1px solid black;
        padding: 10px;
        text-align: center;
        background-color: #f1f1f1;
    }
`;

export const SPriceTdBox = css`

    & > td {
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
`;

export const SButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 50px;
`;

export const SShowpingButton = css`
    margin: 25px;
    border-radius: 15px;
    width: 200px;
    height: 42px;
`;

export const SBuyButton = css`
    margin: 25px;
    border-radius: 15px;
    width: 200px;
    height: 42px;

    color: #fff;
    background-color: #272727;

    :hover {
        background-color: #2b64fb;
    }
`;


