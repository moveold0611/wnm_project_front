import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #dbdbdb;
    border-radius: 30px;
    padding: 0px 20px;
    background-color: #fff;

`;

export const STopContainer = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 70px;
`

export const SLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    overflow: hidden;

    & > img {
        width: 100%;
        cursor: pointer;
    }
`;

export const SUserRelatedBox =css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    & > a {
        font-size: 13px;
        text-decoration: none;
        color: black;
        transition: color 0.1s ease;

        :hover {
            color: darkgray;
        }
    }

    & > a > h3 {
        margin: 0px;
        padding: 0px 8px;
    }
`;

export const SCartIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0px 8px;
    font-size: large;
    cursor: pointer;
    transition: color 0.1s ease;

    :hover {
            
            color: darkgray;
        }
        
`;

export const SBottomContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 1350px;
`;

export const SFullMenuBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    list-style-type: none;
    transition: text-shadow 0.2s ease;

    & > h3 {
        font-size: 20px;
    }
`;

export const SMenuBox = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    margin: 0px;
    padding: 0px;
    width: 550px;
`;

export const SSubMenuBox = (isSubMenu) => css`
    display: ${true ? 'flex' : 'none'};
    justify-content: flex-start;
    align-items: center;

    position: absolute;
    top: 25px;
    left: 50px;

    border-bottom: 2px solid #dbdbdb;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px;
    width: 450px;
    height: 50px;

    background-color: #fff;
    
    transition: all 0.5s ease;
    opacity: ${isSubMenu ? 1 : 0};

    & li h3 {
        margin: 0px 10px;
        font-size: 16px;
        transition: all 0.2s ease;
        list-style-type: none;
        cursor: ${isSubMenu ? "pointer" : "default"};

        &:hover {
            font-size: 20px;
        }
    }
`;