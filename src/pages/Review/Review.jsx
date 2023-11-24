import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import Mypage from '../Mypage/Mypage';
import ReviewList from '../../components/ReviewList/ReviewList';

function Review(props) {
    const{ userId, productMstId } = useParams();

    return (
        <Mypage>
            <div css={S.SContainer}>
                <ReviewList userId={userId} productMstId={productMstId} />
                <h1>야</h1>
            </div>
        </Mypage>
    );
}

export default Review;
