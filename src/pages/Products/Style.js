import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 960px;
`

export const SContainer = css`
    width: 700px;
    height: 850px;
    display: flex;
    justify-content: center;
`

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
`

export const SProductCategoryBox = css`
    display: flex;
    justify-content: space-evenly;
    padding: 15px 0px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    list-style: none;

    & > li {
        cursor: pointer;
    }
`

export const SProductContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1000px;
    height: 1000px;
`

export const SProductBox = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 0px 0px 0px;
    font-size: 12px;
    
    & > ul {
        list-style: none;
        width: 100%;
        height: 100%;
    }

    & > ul > li {
        margin: 0px 10px 15px 0px;
        padding-bottom: 10px;
        width: 240px;
        height: 100%;
        cursor: pointer;
    }

    & > ul > li > img {
        width: 240px;
        height: 240px;
        overflow: hidden;
    }
`

export const SButtonBox = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 400px;
`
