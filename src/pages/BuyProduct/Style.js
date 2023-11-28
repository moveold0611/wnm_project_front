import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px auto;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 1400px;
    background-color: #fff;
`;

export const STopContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px auto;
    height: 815px;
`;

export const SThumbnailImg = css`
    border-radius: 35px;
    width: 755px;
`

export const SOrderInfoBox = css`
    margin-top: 50px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    width: 480px;

    & > h2 {
        padding-bottom: 10px;

        font-size: 30px;
    }

    & > p {
        margin: 0px;
        padding: 30px 20px 30px 0px;
        font-size: 17.5px;
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
    margin-top: 20px;

    & > li {
        padding: 10px 0px;
        width: 450px;
        list-style-type: none;
    }
`;

export const SListBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > input {
        margin: 0px 15px;
        padding: 5px;
        height: 25px;
    }

    & > button {
        margin-left: 15px;
        padding: 5px;
        width: 30px;
    }

    & > p {
        width: 100px;
    }
`;

export const SPriceInfo = css`
    margin-top: 30px;

    & > p {
        margin-bottom: 10px;
        font-size: 17.5px;
    }

    &  > h3 {
        font-size: 22.5px;
    }
`;

export const SButtonBox = css`
    padding-top: 20px;

        & > button {
        margin: 30px 15px 50px;
        border-radius: 50px;
        padding: 15px;
        width: 200px;

        text-align: center;
        font-size: 20px;
        background-color: #333;
        color: #f9fbff;

        &:hover {
            color: #f9fbff;
            background-color: #2b64fb;
        }
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
    border-top: 1px solid #dbdbdb;
    width: 91.4vw;
    margin: 50px 0 0 20px;
`;

export const SReviewList = css`
    width: 85vw;
    height: 100%;
    border-radius: 50px;
    padding: 30px;
    background-color: #fff;
    margin: 0 auto 5px;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 20px;
    width: 1400px;
`;

export const SreviewHeader = css`
    position: relative;

    & > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

export const SReviewImg = css`
    width: 200px;
    margin-right: 20px;
`;

export const SNickname = css`
    position: absolute;
    top: 18px;
    left: 90px;
    font-size: 18px;
`;

export const SProductSizeBox = css`
    display: flex;
    position: absolute;
    top: 45px;
    left: 90px;
    color: #6f6f6f;
`;

export const SReivewDate = css`
    color: #6f6f6f;
    position: absolute;
    top: 10px;
    right: 0px;
    
`;

export const SH1 = css`
    padding: 40px 180px;
    font-size: 25px;
`;

export const SReviewContentBox = css`
    display: flex;
    margin-top: 15px;
`;

export const SReviewContent = css`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    display: flex;
`;