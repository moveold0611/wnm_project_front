import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';

function Mypage({ children }) {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    useEffect(() => {
        if(!principal.data) {
            alert("로그인 후 사용해주세요.")
            navigate("/auth/signin")
            return
        }
    }, [])

    if (principal?.data?.data?.roleName === 'ROLE_ADMIN') {
        return (
            <RootContainer>
                    <div css={S.SContainer}>
                        <h2>ADMIN PAGE</h2>
                            <div css={S.SSubConatainer}>
                                <ul>
                                    <li>
                                        <h4><Link to="/admin/users">회원 관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/order">회원 주문 관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/product">상품 등록</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/product/edit">상품 관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/incoming">입고 관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/outgoing">출고 관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/write/announcement">공지사항</Link></h4>
                                    </li>
                                </ul>
                                <div css={S.SChangeContainer}>
                                    {children}
                                </div>
                            </div>
                    </div>
            </RootContainer>
        );
    } else {
        return (
                <RootContainer>
                    <div css={S.SContainer}>
                        <h2>MY PAGE</h2>
                            <div css={S.SSubConatainer}>
                                <ul>
                                    <li>
                                        <h4><Link to={`/orders`}>주문내역조회</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to={`/useredit/${principal?.data?.data.userId}`}>회원정보</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/review">리뷰</Link></h4>
                                    </li>
                                </ul>
                                <div css={S.SChangeContainer}>
                                    {children}
                                </div>
                            </div>
                    </div>
                </RootContainer>
            );
    }
}

export default Mypage;
