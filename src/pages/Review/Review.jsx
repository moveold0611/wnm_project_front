import React, { useRef, useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Mypage from '../Mypage/Mypage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../apis/firebase/firebase';
import { getReviewByUserApi, removeReviewApi, updateReviewApi } from '../../apis/api/review'; // 필요한 API 함수 import
import { useQuery, useQueryClient } from 'react-query';
import ReviewUpdateModal from '../../components/Review/ReviewModal/ReviewUpdateModal';

function Review() {
    const params = useParams();
    const userId = params.userId
    const fileRef = useRef();
    const navigate = useNavigate();
    const [reviewfiles, setReviewFiles] = useState();
    const [previewImg, setPreviewImg] = useState("");
    const [editedReview, setEditedReview] = useState({});
    const [getReview, setGetReivew ] = useState([]);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const [ isOpen, setOpen ] = useState(false);
    const [ selectedReview, setSelectedReview ] = useState(null);


    const getReviewbyUser = useQuery(["getReviewbyUser", userId], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = getReviewByUserApi(userId, option);
            return await response;
        } catch(error) {
            console.log(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: data => {
            setGetReivew(data?.data)
        }
    })

    console.log("get" ,getReview)

    const handleEditClick = (review) => {
        setOpen(true);
        setSelectedReview(review);
    }

    if(getReviewbyUser.isLoading) {
        return <></>;
    }

    const handleDeleteClick = async (e) => {
        try {
            if(window.confirm("리뷰 삭제 하시겠습니까?")) {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken") || ""
                    }
                }
                await removeReviewApi(e.target.id, option);
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Mypage>
            <div css={S.SLayout}>
                {getReview?.map(rdata => {
                    return <div css={S.SModalContainer}>
                                <div css={S.SModalHeader}>
                                    <div css={S.SModalHeaderImg}>
                                        <img src={rdata.productThumbnailUrl} alt={rdata.productName} />
                                    </div>
                                    <div>
                                        <h3>{rdata.productName}</h3>
                                        <p>size: {rdata.sizeName}</p>
                                    </div>
                                </div>
                            
                                <div css={S.SModalBody}>
                                    <div css={S.SReviewImg}>
                                        <img src={previewImg || rdata.reviewImgUrl} alt="" />
                                    </div>
                                    <textarea disabled={true} css={S.SText} defaultValue={rdata.reviewContent}></textarea>
                                    <button id={rdata.reviewId} onClick={() => handleEditClick(rdata)} css={S.SButton}>수정하기</button>
                                    <button id={rdata.reviewId} onClick={handleDeleteClick} css={S.SButton}>삭제하기</button>
                                </div>
                            </div>
                })}
            </div>
            <ReviewUpdateModal isOpen={isOpen} onRequestClose={() => setOpen(false)} reviewData={selectedReview}/>
        </Mypage>
    );
}

export default Review;
