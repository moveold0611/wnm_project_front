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
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid black;
    width: 100%;
    
    & img {
        overflow: hidden;
        box-sizing: border-box;
        height: 300px;
        width: 300px;
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