import { css } from '@emotion/react';

export const SLayout = css`
    margin-top: 50px;
    width: 90%;
    height: 100%;

    & > ul {
        padding: 0px;
    }

    & > ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dbdbdb;
        padding: 0px 10px;
        width: 100%;
        height: 130px;  
        text-align: center;
        list-style: none;
    }

    & > ul > li .id {
        margin-right: 10px;
    }

    & > ul > li .title {
        margin-right: 10px;
        cursor: pointer;
    }

    & > ul > li .content {
        margin-right: 10px;
    }
`

export const SAnnouncementsBox = css`

`
export const SAnnouncement = css`
    display: flex;
    justify-content: center;
    align-items: center;
`