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
`;

export const SProfilContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
        font-size: 18px;
        
    }
`;

export const SimgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;

    & > img {
        padding: 15px;
        width: 75px;
        height: 75px;
    }
`;

export const Sfile = css`
    display: none;
`;

export const SUserInfoContiner = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SUserInfoBox = css`
    display: flex;
    align-items: center;
    width: 50%;

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

export const SButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 25px 0px ;
`;

export const SEditButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
`;

export const SEditButton = css`
    margin: 10px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    color: white;
    background-color: #0064ff;
    cursor: pointer;
`;

export const SCancelbutton = css`
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    color: black;
    cursor: pointer;
`;

export const SDeleteButtonBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > button {
        margin: 10px;
        border: 1px solid red;
        border-radius: 10px;
        padding: 5px;
        width: 100px;
        font-size: 15px;
        color: red;
        cursor: pointer;
    }
`;