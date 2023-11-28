import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
    width: 95%;
`;

export const STopTitle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    margin-bottom: 25px;
    width: 100%;
    
    & > h2 {
        font-size: 20px;
    }
`;

export const SProfilContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
        margin: 10px 10px 10px 25px;
        font-size: 17.5px;
    }
`;

export const SImgBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;

    & > img {
        width: 100px;
        height: 100px;
        cursor: pointer;
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

    margin: 15px 15px 0px 15px;
    width: 65%;
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
`;

export const SEditButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const SEditButton = css`
    margin-right: 15px;
    border-radius: 30px;
    width: 150px;

    color: #f9fbff;
    background-color: #333;

    &:hover {
        color: #f9fbff;
        background-color: #2b64fb;
    }
`;

export const SCancelbutton = css`
    margin-right: 15px;
    border-radius: 30px;
    width: 150px;

    color: black;
    background-color: white;
`;

export const SDeleteButtonBox = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
    margin-top: 25px;
    width: 100%;
    
    & > button {
        width: 100px;
        color: gray;
    }
`;
