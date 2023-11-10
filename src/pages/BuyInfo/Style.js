import { css } from "@emotion/react";

export const SOrderHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: black;
`;

export const SUserInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h3 { 
        margin: 5px auto;
    }
`;

export const InfoInputBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > h4 {
        margin: 5px auto;
    }

    & > input {
        margin-left: 10px;
        height: 15px;
    }
`;

export const SBuyProductsBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
        list-style-type: none;
    }
`;

export const SPayBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &  > p {
        margin: 5px ;
    }
`;

export const SProductImg = css`
    width: 75px;
`;

export const SPayButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        margin: 5px ;
    }
`;

