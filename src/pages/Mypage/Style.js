import { css } from '@emotion/react';

export const SContainer = css`
    justify-content: center;
    align-items: center;
    width: 1400px;

    & > h2 {
        margin: 15px 0px;
        padding-right: 35px;
        text-align: end;
        font-size: 30px;
    }
`;

export const SSubConatainer = css`
    display: flex;

    & > ul {
        margin-top: 0px;
        padding: 0px 15px;
    }
    
    & > ul > li {
        margin: 5px 0px;
        padding: 5px 0px;
        border-bottom: 2px solid #dbdbdb;
        border-radius: 15px;
        width: 125px;
        list-style-type: none;
        text-align: center;
        background-color: #fff;
    }

    & > ul > li > h4 {
        margin: 10px 0px;
    }

    & > ul > li > h4 > a {
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        color: black;
    }
    
`;

export const SChangeContainer = css`
    display: flex;
    justify-content: center;

    margin: 0px auto;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 100%;
    background-color: #fff;
`;