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

export const STableBox = css`
    display: flex;
    align-items: start;
    justify-content: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.4); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    height:660px;
    width: 100%;
`;

export const SListTable = css`
    width: 1050px;
    border-collapse: collapse;

    & th, td, tr{
        text-align: center;
        height: 47px;
    }
    & td {
        cursor: pointer;
    }
`;

export const SThBox = css`
    height: 50px;
    width: 100%;

    &>th:nth-of-type(1){
        width: 10%;
    }
    &>th:nth-of-type(3){
        width: 20%;
    }
    &>th:nth-of-type(4){
        width: 20%;
    }
`;

export const STdBox = css`
    /* & > td {
        border-bottom: 1px solid black;
        padding: 10px 15px;
        text-align: center;
    }

    & > td > button {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5.5px;
        width: 85px;
        cursor: pointer;

        :hover {
            transition: 0.3s ease;
            background-color: #0064ff;
        }
    } */
`;

export const SProductImg = css`
    width: 150px;
`;
