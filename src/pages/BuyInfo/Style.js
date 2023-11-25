import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 1024px;
    background-color: #fff;
`;

export const SOrderHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    width: 1024px;
    height: 60px;
    color: white;
    background-color: black;

    & > h2 {
        font-size: 25px;
    }
`;

export const SUserInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;

    & > h2 {
        margin-top: 15px;
        padding-left: 20px;
        font-size: 22.5px;
    }
`;

export const InfoInputBox = css`
    display: flex;
    align-items: center;
`;


export const STitle = css`
    padding-left: 20px;
    width: 150px;
    font-size: 17.5px;
`;

export const SData = css`
    margin: 10px 15px 10px 15px;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 15px;
    
    width: 100%;
    background-color: #f1f1f1;
`;

export const SShippingInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;

    & > h2 {
        margin-top: 15px;
        padding-left: 20px;
        font-size: 22.5px;
    }
`;

export const SShippingInfoInputBox = css`
    display: flex;
    align-items: center;
    width: 100%;

    & > input {
        margin: 10px 15px 10px 15px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 15px;
        height: 48px;
        font-size: 18px;

        width: 100%;
    }
`;

export const SAddressBox = css`
    display: flex;
    flex-direction: column;

    width: 100%;

    & > input {
        margin: 10px 15px 10px 10px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 15px;
        height: 48px;
        font-size: 18px;
    }
`;

export const SAddressNumberBox = css`
    display: flex;
    align-items: center;
    
    & > input {
        margin: 10px 5px 10px 10px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 15px;
        height: 48px;
        font-size: 18px;

        width: 100%;
    }
`; 

export const SAddressButtonBox = css`
    padding-right: 500px;

    & > button {
        border: none;
        border-radius: 15px;
        width: 100px;
        height: 48px;
        background-color: darkgray;
        cursor: pointer;
    }
`;

export const SProductsInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;

    list-style-type: none;

    & > h2 {
        margin-top: 15px;
        padding-left: 20px;
        font-size: 22.5px;
    }
`;

export const SProduct = css`
    display: flex;
    align-items: center;

    margin: 10px 0px 0px 20px;
    border-bottom: 1px dashed black;
    padding-top: 15px;
    height: 130px;
`;

export const SProductImg = css`
    margin: 0px 35px 10px 0px;
    width: 100px;
    height: 100px;
`;

export const SProductName = css`
    margin: 0px 0px 10px 0px;

    font-size: 16px;
`;

export const SProductSize = css`
    margin: 0px 0px 0px 0px;

    font-size: 15px;
    line-height: 22px;
    color: #606060;
`;

export const SProductCount = css`
    margin: 0px 0px 10px 0px;

    font-size: 15px;
    line-height: 22px;
    color: #606060;
`;

export const SProductPrice = css`
    margin: 0px 0px 10px 0px;

    font-size: 18px;
    line-height: 22px;
`;

export const SPriceInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;

    & > h2 {
        margin-top: 15px;
        padding-left: 20px;
        font-size: 22.5px;
    }
`;

export const SPriceBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 25px;
`;

export const SPriceTitle = css`
    padding-left: 20px;
    width: 150px;
    font-size: 20px;
`;

export const SPrice = css`
    padding-right: 15px;
    font-size: 20px;
`;

export const SPayMentBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;

    & > h2 {
        margin-top: 15px;
        padding-left: 20px;
        font-size: 22.5px;
    }
`;

export const SPayBox = css`
    display: flex;
    flex-direction: column;

    & > h3 {
        margin-top: 25px;
        padding-left: 20px;
        width: 150px;
        font-size: 17.5px;
    }
`;

export const SKakaoPay = css`
    margin: 25px 15px 5px 20px;
    border: none;
    border-radius: 10px;
    height: 50px;
    
    font-size: 18px;
    color: #191919;
    background-color: #fee500;

    :hover {
    }
`;

export const STossPay = css`
    margin: 5px 15px 5px 20px;
    border: none;
    border-radius: 10px;
    height: 50px;

    font-size: 18px;
    color: white;
    background-color: #0064ff;

    :hover {
        color: black;
    }
`;

export const SCancelBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 25px;
    margin-bottom: 25px;
`;

export const SCancel = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        width: 250px;
        height: 50px;
        font-size: 18px;
    }
`;
