import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SContainer = css`
    display: flex;
    justify-content: center;
    width: 700px;
    height: 850px;
    
    margin-top: 50px;
`

export const SUserInfoContiner = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const SUserInfoBox = css`
    display: flex;
    align-items: center;
    width: 70%;

    & > input {
        margin: 10px 15px 10px 15px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 10px 10px 10px 15px;
        height: 22px;
        font-size: 18px;

        width: 100%;
    }
`;

export const STitle = css`
    padding-left: 20px;
    width: 115px;
`;

export const SShippingInfoInputBox = css`
    display: flex;
    align-items: center;
    width: 100%;

    & > input {
        margin: 10px 15px 10px 5px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 10px 10px 10px 15px;
        height: 22px;
        font-size: 18px;

        width: 100%;
    }
`;

export const SAddressBox = css`
    display: flex;
    flex-direction: column;

    width: 100%;
    & > input {
        margin: 10px 15px 10px 5px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 10px 10px 10px 15px;
        height: 22px;
        font-size: 18px;
    }
`;

export const SAddressNumberBox = css`
    display: flex;
    align-items: center;
    
    & > input {
        margin: 10px 5px 10px 5px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 10px 10px 10px 15px;
        height: 22px;
        font-size: 18px;

        width: 100%;
    }
`; 

export const SAddressButtonBox = css`
    padding-right: 15px;

    & > button {
        border: none;
        border-radius: 15px;
        width: 100px;
        height: 44px;
        background-color: darkgray;
        cursor: pointer;
    }
`;

export const SSignupButton = css`
    margin: 30px 15px 50px;
    border: none;
    border-radius: 50px;
    padding: 15px 15px;
    width: 200px;

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

export const SCencelButton = css`
    margin: 30px 15px 50px;
    border: 1px solid red;
    border-radius: 50px;
    padding: 15px 15px;
    width: 200px;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: black;
    background-color: white;
    cursor: pointer;

    &:hover {
        color: red;
        font-weight: bold;
    }
`;

