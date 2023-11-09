import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../Header/Header';

const SLayout = css`
    height: 100%;
    width: 100%;
`;

function RootLayout({ children }) {
    return (
        <div css={SLayout}>
            <Header />
            {children}
        </div>
    );
}

export default RootLayout;