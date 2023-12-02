import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import RootContainer from '../../components/RootContainer/RootContainer';
import { useQuery } from 'react-query';
import { deleteAnnouncementApi, getAnnouncementsApi, getAnnouncementsCountApi } from '../../apis/api/announcement';
import { useNavigate } from 'react-router';
import PageNation from '../../utils/PageNation/PageNation';

function Announcement(props) {
    const navigate = useNavigate();
    const [ announcementsList, setAnnouncementsList ] = useState([]);
    const [ announcementsCount, setAnnouncementsCount ] = useState([]);
    const [ searchData, setSearchData ] = useState({
        petTypeName: "all",
        productCategoryName: "all",
        searchOption: 'all',
        searchValue: '',
        sortOption: 'number',
        pageIndex: 1});
        

    const getAnnouncements = useQuery(["getAnnouncements"], async () => {
        try {
            const response = await getAnnouncementsApi();
            return  response;
        } catch (error) {
            console.log(error)
        }   
    },{
        retry: 0,
        onSuccess: response => {
            setAnnouncementsList(response?.data);
        }
    })

    const getAnnouncementsCount = useQuery(["getAnnouncementsCount"], async () => {
        try {
            const response = await getAnnouncementsCountApi();
            return  response;
        } catch (error) {
            console.log(error)
        }   
    },{
        retry: 0,
        onSuccess: response => {
            setAnnouncementsCount(response?.data);
        }
    })

    const handleAnnouncementClick = (announcementId) => {
        navigate(`/notice/${announcementId}`)
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.STopTitle}>
                    <h2>공지사항</h2>
                </div>
                <div css={S.STableBox}>
                    <table css={S.STable}>
                        <thead>
                            <tr css={S.SThBox}>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!getAnnouncements.isLoading && announcementsList?.map(ann => {
                                return (
                                    <tr key={ann.announcementId} css={S.STdBox} onClick={() => handleAnnouncementClick(ann.announcementId)}>
                                        <td>{ann?.announcementId}</td>
                                        <td>{ann?.title}</td>
                                        <td>{ann?.createDate}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>      
                </div>
                <PageNation showCount={10} totalItemCount={announcementsCount} searchData={searchData} setSearchData={setSearchData} />

            </div>
        </RootContainer>
    );
}

export default Announcement;