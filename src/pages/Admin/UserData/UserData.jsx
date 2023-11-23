import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import Mypage from '../../Mypage/Mypage';
import { useQuery } from 'react-query';
import { deleteAdminToUserApi, getUsersApi } from '../../../apis/api/user';

function UserData(props) {
    const [ userData, setUserData ] = useState([])
    const [ searchData, setSearchData ] = useState({
        searchOption: "all",
        searchValue: "",
    })

    const [ searchInput, setSearchInput ] = useState('');

    const searchOption = [
        {value: "전체"},
        {value: "이름"},
        {value: "휴대전화"}
    ]

    const getUserData = useQuery(["getUserData"], async () => {
        try {
            const response = getUsersApi(searchData);
            return response;
        } catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setUserData(response)
        }
    });

    useEffect(() => {
        setSearchData({
            ...searchData,
            searchValue: searchInput
        })
    }, [searchInput])

    const handleSearchDataOnChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSearchInputOnChange = (e) => {
        setSearchInput(e.target.value)
    }
    
    const handleSearchOnClick = () => {
        getUserData.refetch();
    }

    const handleUserDeleteOnClick = async (userId) => {
        try {
            if(window.confirm("선택하신 회원님을 삭제시키겠습니까?")) {
                await deleteAdminToUserApi(userId)
                getUserData.refetch();
            } else {
                alert("회원 삭제가 취소되었습니다.")
            }
            
        } catch(error) {
            console.log(error)
        }
    }
    
    if(getUserData.isLoading) {
        return <></>
    }
    
    

    return (
        <Mypage>
            <div css={S.SContainer}>
                <h2>회원 정보 리스트</h2>
                <div css={S.SSelectBox}>
                    <select option={searchOption} name='searchOption' onChange={handleSearchDataOnChange}>
                        {searchOption.map(op => {
                            return <option key={op.value} value={op.value} label={op.value}/>
                        })}

                    </select>
                    <input type="text" name={searchOption} onChange={handleSearchInputOnChange}/>
                    <button onClick={handleSearchOnClick}>검색</button>
                </div>
                <table>
                    <thead>
                        <tr css={S.SThBox}>
                            <th>회원 번호</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>휴대전화</th>
                            <th>주소</th>
                            <th>
                                간편로그인<br/>
                                [제공사이트]
                            </th>
                            <th>탈퇴</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData?.data?.map(data => {
                            return <tr key={data.userId}css={S.STdBox}>
                                <td>{data.userId}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNumber}</td>
                                <td>
                                    우편번호: [{data.defaultAddressNumber}]<br/>
                                    {data.defaultAddressName}<br/>
                                    {data.defaultAddressDetailName}
                                </td>
                                <td>{data.provider}</td>
                                <td><button onClick={() => handleUserDeleteOnClick(data.userId)}>회원삭제</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </Mypage>
    );
}

export default UserData;