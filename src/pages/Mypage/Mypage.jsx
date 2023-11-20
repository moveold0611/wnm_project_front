import React from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from './Style';

function Mypage(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    if (principal?.data?.data?.roleName === 'ROLE_ADMIN') {
        return (
            <div>
                <div css={S.STitle}>
                    <h2>My Page</h2>
                </div>
                <div css={S.SList}>
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
                            <h4><Link to="/admin/incoming">입고관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/outgoing">출고관리</Link></h4>
                        </li>
                        <li>
                            <h4><Link to="/admin/notices">공지사항</Link></h4>
                        </li>
                    </ul>
                </div>
                <div css={S.SContent}>
                </div>
            </div>
        );
    } else {
        return (
                <div>
                    <div css={S.STitle}>
                        <h2>My Page</h2>
                    </div>
                    <div css={S.SList}>
                        <ul>
                            <li>
                                <h4><Link to="/orders">주문내역조회</Link></h4>
                            </li>
                            <li>
                                <h4><Link to={`/useredit/${principal?.data?.data.userId}`}>회원정보</Link></h4>
                            </li>
                            <li>
                                <h4><Link to="/cart">장바구니</Link></h4>
                            </li>
                            <li>
                                <h4><Link to="/orderTracking">배송조회</Link></h4>
                            </li>
                            <li>
                                <h4><Link to="/review">리뷰</Link></h4>
                            </li>
                        </ul>
                    </div>
                    <div css={S.SContent}>
                    </div>
                </div>
            );
    }
}

export default Mypage;