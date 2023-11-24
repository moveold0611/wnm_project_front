import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useQuery } from 'react-query';
import { getAnnouncementsApi } from '../../apis/api/announcement';
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

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div>공지사항</div>
                <ul css={S.SAnnouncementsBox}>
                    <li>1231234</li>
                    {!getAnnouncements.isLoading && announcemensList.map(ann => {
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
                                </li>
                    })}
                </ul>
            </div>
        </RootContainer>
    );
}

export default Announcement;