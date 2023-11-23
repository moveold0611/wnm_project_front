import { css } from '@emotion/react';

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

export const SubContainer = css`
    
    justify-content: center;
    align-items: center;
    

    border-radius: 20px;
    width: 100%;
    background-color: #fbfcff;

    & > input {
        width: 80%;
        height: 40px;
    }

    & > textarea {
        width: 80%;
    }
`;