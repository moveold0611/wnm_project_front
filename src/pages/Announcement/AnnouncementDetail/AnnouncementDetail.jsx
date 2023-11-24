import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getAnnouncementByIdApi } from '../../../apis/api/announcement';
import RootContainer from '../../../components/RootContainer/RootContainer';

function AnnouncementDetail(props) {
    
    const {announcementId} = useParams();
    console.log("2 아이디 들어오는거")
    console.log(announcementId)
    const [ announcementData, setAnnouncementData ] = useState();

    const getAnnouncementById = useQuery(["getAnnouncementById", announcementData], async () => {
        try {
            const response = await getAnnouncementByIdApi(announcementId);
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    {
        retry: 0,
        onSuccess: response => {
            setAnnouncementData(response.data)
        }
    })

    if(getAnnouncementById.isLoading) {
        return <div>로딩중</div>
    }

    return (
        <RootContainer>
            <div>
                {announcementData?.title}
            </div>
            <div>
                {announcementData?.content}
            </div>
        </RootContainer>
    );
}

export default AnnouncementDetail;