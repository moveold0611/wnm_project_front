import { css } from '@emotion/react';

export const STitle = css`
    position: absolute;
    right: 240px;
    font-size: 20px;
    color: #333;
`;

export const SList = css`
    position: absolute;
    top: 300px;
    left: 100px;

    & > ul > li {
            list-style: none;
            cursor: pointer;
            padding: 8px 0;
            transition: color 0.5s ease;

        & > h4 > a {
            text-decoration: none;
            color: #333;
            font-size: 19px;
            &:hover {
            color: #dfdfdf;
        }
        }
    }
`;

export const SContent = css`
    width: 1100px;
    height: 500px;
    position: absolute;
    top: 320px;
    right: 220px;
    border: 1px solid #dbdbdb;
`;