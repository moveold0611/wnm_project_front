import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

    return (
        <>
            <div>홈</div>
            <Link to={"/useredit/:userId"}>사용자 수정</Link>
            <Link to={"/auth/signin"}>로그인</Link>
            <Link to={"/product/:productId"}>상품 구매 페이지</Link>            
        </>
    );
}

export default Home;