import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import logo from '../../images/Logo/LongLogo.png'
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();


    const LogoOnClick = () => {
        navigate("/")
    }

    return (
        <div css={S.SHeader}>
            <div css={S.SLogoBox} onClick={LogoOnClick}>
                <img src={logo} />
            </div>
            <div css={S.SMenuBox}>
                <Link to={"/auth/signin"} ><h3>Dog(로그인)</h3></Link>
                <Link to={"/useredit/:userId"} ><h3>Cat(회원 정보 수정)</h3></Link>
                <Link to={"/product/:productId"} ><h3>Board(상품 구매 페이지)</h3></Link>
                <Link to={"/"} ><h3>Customer Service(홈)</h3></Link>
            </div>
        </div>
    );
}
export default Header;