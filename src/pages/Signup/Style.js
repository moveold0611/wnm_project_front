import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
    width: 95%;
`;

export const SUserInfoContiner = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 15px 15px 0px 15px;
    width: 55%;

    & > h1 {
        font-size: 30px;
        margin-bottom: 25px;
    }
`;

export const SSubTitle = css`
    & > h3 {
        margin-bottom: 25px;
        font-size: 20px;
    }
`;

export const SUserInfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 12.5px;
    width: 55%;

    & > input {
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        width: 300px;
    }
`;

export const STitle = css`
    font-size: 20px;
`;

export const SAddressBox = css`
    display:  flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;

    & > input {
        margin: 12.5px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        width: 300px;
    }
`;

export const SAddressNumberBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12.5px;
    width: 300px;

    & > input {
        border-radius: 5px;
        border: 1px solid black;
        padding: 10px 0px 10px 10px;
        width: 200px;
    }
`; 

export const SAddressButtonBox = css`
    margin-left: 15px;

    & > button {
        
        :hover {
        background-color: #ffff;
        opacity: 60%;
        }
    }
`;


export const SSignupButton = css`
    margin: 30px 15px;
    border-radius: 50px;
    padding: 15px 15px;
    width: 200px;

    font-size: 20px;
    color: #f9fbff;
    background-color: #333;

    &:hover {
        color: #f9fbff;
        background-color: #2b64fb;
    }
`;

export const SCencelButton = css`
    margin: 30px 15px;
    border-radius: 50px;
    padding: 15px 15px;
    width: 200px;

    font-size: 20px;
    color: black;
    background-color: white;

    &:hover {
        background-color: #ffff;
        opacity: 60%;
    }
`;

