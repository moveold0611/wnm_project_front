import React, { useRef, useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Mypage from '../Mypage/Mypage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../apis/firebase/firebase';
import { getReviewByUserApi, removeReviewApi, updateReviewApi } from '../../apis/api/review'; // 필요한 API 함수 import
import { useQuery, useQueryClient } from 'react-query';

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

    const handleOpenFileClick = () => {
        fileRef.current.click();
    }

    const handleChangeFile = (e) => {
        setReviewFiles(e.target.files[0]);

        const reader = new FileReader();

        reader.onload = (e) => {
            setPreviewImg(e.target.result);
            console.log(e.target.result);
        }
        
        reader.readAsDataURL(e.target.files[0]);
    }
    

    const handleContentChange = (e) => {
        setEditedReview({
            ...editedReview,
            reviewContent: e.target.value
        });
    };


    const handleEditClick = async (e) => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken") || ""
                }
            }
            if (!!reviewfiles) {
                const reviewImgStorageRef = ref(storage, `files/review/${reviewfiles?.name}`);
                await uploadBytesResumable(reviewImgStorageRef, reviewfiles);
                const downLoadURL = await getDownloadURL(reviewImgStorageRef);
                setEditedReview({ ...editedReview, reviewImgUrl: downLoadURL });
            }
            await updateReviewApi(e.target.id, editedReview, option);
            alert("리뷰수정이 완료되었습니다!");
        } catch (error) {
            console.error(error);
        }
    };
    if(getReviewbyUser.isLoading) {
        return <></>;
    }

    const handleDeleteClick = async (e) => {
        try {
            if(window.confirm("리뷰삭제가 완료되었습니다!")) {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken") || ""
                    }
                }
                await removeReviewApi(e.target.id, option);
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Mypage>
            <div css={S.SModalContainer}>
                {getReview?.map(rdata => {
                    return <div key={rdata.reviewId}>
                            <h2>리뷰 상세 페이지</h2>
                        <div css={S.SModalHeader}>
                            <div css={S.SModalHeaderImg}>
                                <img src={rdata?.productThumbnailUrl} alt={rdata?.productDtlId} />
                            </div>
                            <div>
                                <h3>{rdata?.productName}</h3>
                                <p>size: {rdata?.sizeName}</p>
                            </div>
                        </div>
                    
                        <div css={S.SModalBody}>
                            <div css={S.SReviewImg} onClick={handleOpenFileClick}>
                                <img src={previewImg || rdata.reviewImgUrl} alt="" />
                            </div>
                            <input type="file" name="reviewFile" ref={fileRef} onChange={handleChangeFile} />
                            <textarea  onChange={handleContentChange} defaultValue={rdata.reviewContent}></textarea>
                            <button id={rdata?.reviewId} onClick={handleEditClick}>수정하기</button>
                            <button id={rdata?.reviewId} onClick={handleDeleteClick}>삭제하기</button>
                        </div>
                        </div>
                })}

            </div>
        </Mypage>
    );
}

export default Review;
