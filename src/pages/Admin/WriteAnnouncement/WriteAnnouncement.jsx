import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { writeAnnouncementApi } from '../../../apis/api/announcement';
import { async } from 'q';

function WriteAnnouncement(props) {

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
                    <input name='title' type="text" placeholder='제목' onChange={handleInputChange} />
                    <textarea name="content" id="" cols="30" rows="30" placeholder='내용' onChange={handleInputChange}></textarea>
                    <button onClick={handleWriteClick}>작성하기</button>
                </div>
            </div>
        </Mypage>
    );
}

export default WriteAnnouncement;