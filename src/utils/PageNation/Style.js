import { css } from '@emotion/react';

export const PageButton = css`
    margin: 5px;
    border: none;
    background-color: white;
    cursor: pointer;

    &:focus {
        border: 1px solid #dbdbdb;
        border-radius: 50%;
        background-color: #dbdbdb;
    }
`