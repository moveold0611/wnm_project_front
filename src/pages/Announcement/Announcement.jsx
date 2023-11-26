import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useQuery } from 'react-query';
import { deleteAnnouncementApi, getAnnouncementsApi } from '../../apis/api/announcement';
import { useNavigate } from 'react-router';

function Announcement(props) {

    const navigate = useNavigate();
    const [ announcemensList, setAnnouncemensList ] = useState([]);

    const getAnnouncements = useQuery(["getAnnouncements"], async () => {
        try {
            const response = await getAnnouncementsApi();
            console.log(response?.data);
            return  response;
        } catch (error) {
            console.log(error)
        }   
    },{
        retry: 0,
        onSuccess: response => {
            setAnnouncemensList(response?.data);
        }
    })

    const handleAnnouncementClick = (e) => {
        navigate(`/notice/${e.target.id}`)
    }

    const handleEditClick = (e) => {
        navigate(`/admin/edit/announcement/${e.target.id}`)
    }

    const handleDeleteClick = async (e) => {
        
        if(window.confirm("삭제 하시겠습니까?")) {
                const id = e.target.id;
            try {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                const response = await deleteAnnouncementApi(id, option);
                alert("삭제가 완료되었습니다.")
                return response;
            } catch (error) {
                alert(error.message)
            }   
        }
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div>공지사항</div>
                <ul css={S.SAnnouncementsBox}>
                    {!getAnnouncements.isLoading && announcemensList?.map(ann => {
                        return <li>
                                    <div css={S.SAnnouncement}>
                                        <div class='id'>
                                            {ann?.announcement_id}
                                        </div>
                                        <div class='title' id={ann?.announcement_id} onClick={handleAnnouncementClick}>
                                            {ann?.title}
                                        </div>
                                        <div class='content'>
                                            {ann?.content}
                                        </div>
                                        <div class='createDate'>
                                            {ann?.createDate}
                                        </div>
                                    </div>
                                    <div>
                                        <button id={ann?.announcement_id} onClick={handleEditClick}>수정</button>
                                        <button id={ann?.announcement_id} onClick={handleDeleteClick}>삭제</button>
                                    </div>
                                </li>
                    })}
                </ul>
            </div>
        </RootContainer>
    );
}

export default Announcement;