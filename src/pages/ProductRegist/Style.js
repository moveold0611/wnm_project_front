import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    margin: 50px auto;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 100%;
`;

export const SImgBox = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    border: 1px solid black;
    width: 500px;
    height: 300px;
    
    & img {
        overflow: hidden;
        box-sizing: border-box;
        border: 1px solid black;
        width: 100%;
        height: 300px;
    }
`

export const SInputBox = css`
    width: 300px;
    justify-content: flex-end;

    & > div input {
        margin-bottom: 10px;
    }
`

export const Sfile = css`
    display: none;
`;