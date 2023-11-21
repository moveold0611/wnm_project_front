import React from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';

function Mypage({ children }) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    if (principal?.data?.data?.roleName === 'ROLE_ADMIN') {
        return (
            <RootContainer>
                    <div css={S.SContainer}>
                        <h2>Admin Page</h2>
                            <div css={S.SSubConatainer}>
                                <ul>
                                    <li>
                                        <h4><Link to="/admin/users">회원관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/orders">회원주문관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/product">상품등록</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/product/edit">상품관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/transactions">입출고관리</Link></h4>
                                    </li>
                                    <li>
                                        <h4><Link to="/admin/notices">공지사항</Link></h4>
                                    </li>
                                </ul>
                                <div css={S.SChangeContainer}>
                                    {children}
                                </div>
                            </div>
                    </div>
                </RootContainer>
        )
    } else {
        return (
                <RootContainer>
                    <div css={S.SContainer}>
                        <h2>My Page</h2>
                            <div css={S.SSubConatainer}>
                                <ul>
                                    <li>
                                        <h4><Link to={`/orders/${principal?.data?.data.userId}`}>주문내역조회</Link></h4>
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