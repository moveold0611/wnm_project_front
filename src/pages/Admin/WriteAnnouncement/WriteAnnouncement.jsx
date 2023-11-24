import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { writeAnnouncementApi } from '../../../apis/api/announcement';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

function WriteAnnouncement(props) {
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const navigate = useNavigate();

    const [ announcementData, setAnnouncementData ]= useState({
        title: "",
        content: "",
        type: "공지사항"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnnouncementData({
            ...announcementData,
            [name]: value
        })
    }

    useEffect(() => {
        if(principal?.data?.data.roleName !== "ROLE_ADMIN" || !principal?.data) {
            alert("정상적인 접근이 아닙니다.")
            navigate("/")
        }
    }, [])

    const handleWriteClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            const response = await writeAnnouncementApi(announcementData, option)

            return response;
        } catch (error) {
            alert(error)
        }
    }


    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>공지사항 작성</h2>
                <div css={S.SubContainer}>
                    <div css={S.SuSubContainer}>
                        <h1>공지사항 등록</h1>
                        <input name='title' type="text" placeholder='제목' onChange={handleInputChange} />
                        <textarea name="content" id="" cols="30" rows="30" placeholder='내용' onChange={handleInputChange}></textarea>
                        <button onClick={handleWriteClick}>등록 하기</button>
                    </div>
                </div>
            </div>
        </Mypage>
    );
}

export default WriteAnnouncement;