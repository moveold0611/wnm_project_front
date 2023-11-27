import { css } from "@emotion/react";

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 90%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }

    & > table {
        width: 100%;
    }
`

export const SModalContainer = css`
    background-color: #ffffff;
    width:30vw;
    min-width: 200px;
    padding: 15px;
    height: 400px;
    border-radius: 10%;
`;

export const SModalHeader = css`
    display: flex;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
`;

export const SModalHeaderImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 100px;
    height: 100px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const SReviewImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-image: url(https://stylist-nagatomo.com/wp-content/uploads/2022/09/noimage-760x460.png);
    background-position: center;
    background-size: cover;
    margin: -25px 0;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
    & > img {
        width: 100%;
    }
`;

export const SModalBody = css`
    & > input[type="file"] {
        display: none;
    }

    & > textarea {
        width: 100%;
        height: 80px;
    }
`;

export const SModalSubmitButton = css`
    cursor: pointer;
    margin-left: auto;
`;