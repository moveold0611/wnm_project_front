import { css } from '@emotion/react';

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

export const SSubTitleBox = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 5px;
    width: 100%;

    & > h3 {
        margin-left: 20px;
        font-size: 17.5px;
    }

    & > button {
        margin-left: 15px;
    }
`;

export const STableBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 25px;

    width: 100%;
`;

export const SToptable = css`
    border-collapse: separate;
    border-spacing: 5px;
    width: 100%;
`;

export const SBottomTable = css`
    border-bottom: 2px dashed #aeaeae;
    border-collapse: separate;
    border-spacing: 5px;
    width: 100%;
`;

export const SThtdBox = css`

    & > th {
        border-radius: 10px;
        padding: 10px;
        width: 50%;
        height: 42px;
        text-align: center;
        background-color: #dbdbdb;
    }

    & > td {
        border-radius: 10px;
        padding: 10px;
        width: 50%;
        height: 42px;
        text-align: center;
        background-color: #f1f1f1;
    }
`;

export const SImgContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
`;

export const SH2 = css`
    margin: 25px;
    padding: 0px 200px 25px;
    border-bottom: 2px dashed #aeaeae;

    font-size: 30px;
`;

export const SMidBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h3 {
        padding: 15px;
        font-size: 22.5px;
    }
    

    & > div {
        margin-bottom: 50px;
        width: 100%;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        text-align: center;
    }
`;

export const SButton = css`
    margin-bottom: 50px;
    padding: 15px;
    width: 350px;
`;