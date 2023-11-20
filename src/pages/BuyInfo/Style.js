import { css } from "@emotion/react";

export const SOrderHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1024px;
    color: white;
    background-color: black;
`;

export const SUserInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    background-color: #fafafa;

    & > h2 {
        padding-left: 20px;
    }
`;

export const InfoInputBox = css`
    display: flex;
    align-items: center;
`;


export const STitle = css`
    padding-left: 20px;
    width: 115px;
`;

export const SData = css`
    margin: 10px 15px 10px 15px;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 15px;
    
    width: 100%;
`;

export const SShippingInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    background-color: #fafafa;

    & > h2 {
        padding-left: 20px;
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
        margin: 10px 15px 10px 10px;
        border: 1px solid gray;
        border-radius: 15px;
        padding: 15px;
        height: 22px;
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
        height: 22px;
        font-size: 18px;

        width: 100%;
    }
`; 

export const SAddressButtonBox = css`
    padding-right: 300px;

    & > button {
        border: none;
        border-radius: 15px;
        width: 100px;
        height: 54px;
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
    background-color: #fafafa;
    
    list-style-type: none;

    & > h2 {
        padding-left: 20px;
    }
`;

export const SProduct = css`
    display: flex;
    align-items: center;

    margin: 0px 15px 15px 20px;
    border-top: 1px dotted black;
    padding-top: 15px;
    height: 130px;
`;

export const SProductImg = css`
    width: 90px;
    height: 90px;
    padding-right: 25px;
`;

export const SProductName = css`
    margin: 0px 0px 10px 0px;

    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
`;

export const SProductSize = css`
    margin: 0px 0px 0px 0px;

    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    color: #606060;
`;

export const SProductCount = css`
    margin: 0px 0px 10px 0px;

    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    color: #606060;
`;

export const SProductPrice = css`
    margin: 0px 0px 10px 0px;

    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
`;

export const SPriceInfoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    background-color: #fafafa;

    & > h2 {
        padding-left: 20px;
    }
`;

export const SBuyProductsBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
        list-style-type: none;
    }
`;

export const SPriceBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &  > p {
        margin: 5px ;
    }
`;

export const SPrice = css`
    padding-right: 15px;
`;

export const SPayMentBox = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 10px;
    padding-bottom: 20px;
    border: none;
    border-radius: 15px;
    background-color: #fafafa;

    & > h2 {
        padding-left: 20px;
    }
    
`;

export const SPayBox = css`
    display: flex;
    flex-direction: column;
`;

export const SKakaoPay = css`
    margin: 5px 15px 5px 20px;
    border: none;
    border-radius: 10px;
    height: 50px;
    
    font-size: 18px;
    color: #191919;
    background-color: #fee500;
`;

export const STossPay = css`
    margin: 5px 15px 5px 20px;
    border: none;
    border-radius: 10px;
    height: 50px;

    font-size: 18px;
    color: white;
    background-color: #0064ff;
`;

export const SCancelBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
    border: none;
    border-radius: 15px;
    background-color: #fafafa;
    margin-bottom: 25px;

    & > h2 {
        padding-left: 20px;
    }
    
`;

export const SCancel = css`
    display: flex;
    align-items: center;

    padding: 1px 0px;
    width: 100%;

& > button {
    margin: 5px 15px 5px 20px;
    border: none;
    border-radius: 10px;
    height: 35px;
    
    font-size: 18px;
    color: white;
    background-color: black;
    width: 100%;
}

`;
