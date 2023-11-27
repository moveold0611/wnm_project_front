import { css } from "@emotion/react";

export const STopContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px auto;
    height: 815px;
    background-color: #f5f5f5;
`;

export const SThumbnailBox = css`

`;

export const SThumbnailImg = css`
    width: 755px;
`

export const SOrderInfoBox = css`
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 480px;

    & > h2 {
        padding-bottom: 10px;

        font-size: 30px;
        font-weight: 500;
    }

    & > p {
        margin: 0px;
        padding: 30px 20px 30px 0px;
        font-size: 15px;
        white-space: normal;
    }

`
export const SSelectBox = css`
    display: flex;
`
export const SSelect = css`
    width: 100%;
`;

export const SOrderListBox = css`
    padding: 0px;

    & > li {
        padding: 5px 0px;
        list-style-type: none;
        
    }
`;

export const SPriceInfo = css`
    padding: 40px 0px 20px ;
    & > p {
        margin: 0px ;
        padding-bottom: 7px;

        font-size: 13px;
        font-weight: 700;

    }

    &  > h3 {
        margin: 0px;
    }
`;

export const SButtonBox = css`
    padding-top: 20px;

    & > button {
        margin: 0px 15px 5px 0px;
        border: none;
        border-radius: 10px;
        width: 215px;
        height: 46px;

        color: white;
        
        background-color: #272727;

    }
`;

export const SDetailContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SDDetailImg = css`
    width: 920px;
`;

export const SReviewContainer = css`
    border: 1px solid black;
    width: 100%;
`;
