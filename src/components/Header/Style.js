import { css } from "@emotion/react";

export const SHeader = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    border-bottom: 2px solid black;
`;

export const SLogoBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 15px auto;

    & > img {
        cursor: pointer;
    }
`;

export const SMenuBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > a {
        margin: 0px 20px;
        text-decoration: none;
        font-size: 14px;
        color: black
    }
`;