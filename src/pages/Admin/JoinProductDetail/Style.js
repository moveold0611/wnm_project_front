import { css } from '@emotion/react';

export const SContainer = css`
    justify-content: center;
    align-items: center;

    margin: 15px 0px;
    width: 95%;

    & > h2 {
        text-align: end;
        font-size: 20px;
    }
`;

export const SubContainer = css`
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    width: 100%;

    word-wrap: break-word;
    background-color: #fbfcff;
`;

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h2{
        padding: 25px 35px 25px 35px;
        border-top: 2px dotted black;
        border-bottom: 2px dotted black;
    }
`;

export const STopTableBox = css`
    margin-top: 20px;
    padding-bottom: 14px;
    width: 95%;
    border-bottom: 1px dashed black;

    & > tr > th {
        border: 1px solid black;
        padding: 10px 15px;
        width: 500px;
        font-size: 15px;
        text-align: center;

        background-color: darkgray;
    }

    & > tr > td {
        border: 1px solid black;
        padding: 10px 15px;
        font-size: 15px;
        text-align: center;

    }
`;

export const SBottomTableBox = css`
    margin-top: 15px;
    width: 95%;

    & > tr > th {
        border: 1px solid black;
        padding: 10px 15px;
        width: 500px;
        font-size: 15px;
        text-align: center;

        background-color: darkgray;
    }

    & > tr > td {
        border: 1px solid black;
        padding: 10px 15px;
        font-size: 15px;
        text-align: center;

    }
`;

export const SMidBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    & > p {
        margin: 0px;
        padding: 0px 10px 25px 10px;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        
    }
`;


export const SButton = css`
    margin: 30px 0px 75px;
    border: none;
    border-radius: 50px;
    padding: 15px 15px;
    width: 350px;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #333;
    color: #f9fbff;
    cursor: pointer;

    &:hover {
        background-color: #2b64fb;
        color: #f9fbff;
        font-weight: bold;
    }
`;