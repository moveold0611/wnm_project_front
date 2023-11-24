import { css } from '@emotion/react';

export const SLayout = css`
    display: flex;
    flex-direction: column;
    
    margin: 20px auto 0px;
    height: 200px;
`;

export const STopContainer = css`
    display: flex;
    justify-content: center;

    margin: 0px auto;
    width: 100%;
    height: 130px;
`

export const SLogo = css`
    width: 150px;
    height: 70px;

    & > img {
        width: 100%;
        cursor: pointer;
    }
`;

export const SUserRelatedBox =css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 20px;
    right: 50px;   
    
    & > a {
        font-size: 13px;
        text-decoration: none;
        color: black;

        :hover {
            transition: color 0.5s ease;
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

    :hover {
            transition: color 0.5s ease;
            color: darkgray;
        }
        
`;

export const SBottomContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    border-bottom: 2px dashed black;
    width: 1350px;
    height: 70px;
`;

export const SFullMenuBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    list-style-type: none;
`;

export const SMenuBox = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    margin: 0px;
    padding: 0px;
    width: 550px;

    cursor: pointer;
    
    & > li {
        position: relative;

        font-size: 16px;
        line-height: 30px;
        list-style-type: none;
        
        :hover {
            transition: color 0.5s ease;
            color: darkgray;
        }
    }
`;

export const SSubMenuBox = (isSubMenu) => css`
    display: ${isSubMenu ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 60px;
    padding: 0px;
    
    transition: all 0.5s ease;
    opacity: ${isSubMenu ? 1 : 0};
    cursor: pointer;

    & > li {
        position: relative;
        font-size: 16px;
        line-height: 30px;
        transition: color 0.5s ease;
        list-style-type: none;
        
        :hover {
            color: darkgray;
        }

        & > h3 {
            margin: 5px auto;
        }
    }
`;