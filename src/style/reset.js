import { css } from "@emotion/react";

export const reset = css`
/* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

    @font-face {
        font-family: 'BMJUA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: 'BMJUA';
        box-sizing: border-box;
        font-size: 16px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tfoot,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'BMJUA';
        box-sizing: border-box;
        font-size: 16px;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    html {
        background-color: #f1f1f1;
    }
    input:disabled {
        background-color: #f1f1f1;
    }
    button {
        border: none;
        border-bottom: 2px solid #dbdbdb;
        border-right: 2px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px;
        background-color: #fff;
        cursor: pointer;

        :hover {
            border-bottom: none;
            border-right: none;
            background-color: #f1f1f1;
        }
    }
`;