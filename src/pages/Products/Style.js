import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 50px;
    width: 1400px;
`;

export const SSubContainer = css`
    display: flex;
    justify-content: flex-end;
    margin: 0px auto;
    width: 91%;
`;

export const SSelectBox = css`

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

export const SContainer = css`
    width: 700px;
    height: 850px;
    display: flex;
    justify-content: center;
`;

export const SCategoryBox = css`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 250px;
    list-style: none;

    & > li {
        padding: 10px;
        flex-direction: column;
        cursor: pointer;
    }
`;

export const SProductCategoryBox = css`
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    list-style: none;

    & > img {
        width: 100%;
    }
`;

export const SProductContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SProductBox = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-top: 20px;
    width: 330px;

    & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    & > ul > li {
        margin: 0 20px 20px 0;
        padding-bottom: 10px;
        width: calc(25% - 50px);
        height: 415px;
        cursor: pointer;
    }

    & > ul > li > img {
        border-radius: 10px;
        width: 300px;
        height: 300px;
        overflow: hidden;
    }

    & p {
        width: 300px;
    }
`;


export const SButtonBox = css`
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding-bottom: 20px;
        width: 400px;
`;