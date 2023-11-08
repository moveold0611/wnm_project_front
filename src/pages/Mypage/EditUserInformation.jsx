import React, { useEffect, useRef, useState } from 'react';
import * as S from "./Style";
import { instance } from '../../apis/config/instance';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../apis/firebase/firebase';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */

function EditUserInformation(props) {

     // daum주소코드
        const sample6_execDaumPostcode = () => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
            new window.daum.Postcode({
            oncomplete: function(data) {
                console.log(data)
                var addr = '';
                var extraAddr = '';
    
                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }
                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                
                }
                console.log(data.zonecode)
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                setUserData({
                    ...userData,
                    defaultAddressNumber: data.zonecode,
                    defaultAddressName: addr
                });
                document.getElementById("sample6_detailAddress").focus();
            }
            }).open();
        };
    
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝

    const profileFileRef = useRef();
    const [uploadFiles, setUploadFiles] = useState([]);
    const [profileImgSrc, setProfileImgSrc] = useState(); 
    const { userId } = useParams();

    const [userData, setUserData] = useState({
        nickname: '',
        defaultAddressNumber: '',
        defaultAddressName: '',
        defaultAddressDetailName: '',
        profileUrl: ''
    });

    const [ user, setUser ] = useState({});

    const getUser = useQuery(["getUser"], async () => {
        try {
            return await instance.get(`/api/user/${userId}`);
        }catch(error) {
            console.log(error)
        }
    }, {
        refetchOnWindowFocus: false,
        onSuccess: userresponse => {
            setUser(userresponse.data)
            setUserData(userresponse.data)
            setProfileImgSrc(userresponse.data.profileUrl)
        }
    })


    const HandleUserEditChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        console.log(userData)
    }

    const HandleEditUser = async () => {
        try {
            const response = await instance.put(`/api/user/${userId}`, userData);
            if (response.status === 200) {
                alert("회원정보 수정이 완료되었습니다.");
            } else {
                throw new Error("회원정보 수정 실패");
            }
        } catch (error) {
            console.error(error);
            if (Object.keys(error.response.data).includes("nickname")) {
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
            }
        }
    }

        const HandleCancle = () => {
            window.location.replace("/");
        }
    

        const HandleDeleteUser = async () => {
            if(window.confirm("정말로 탈퇴하시겠습니까?")) {
            try {
                const response = await instance.delete(`/api/user/${userId}`);
                if (response.status === 200) {
                    alert("회원 탈퇴 처리가 완료되었습니다.");
                    window.location.replace("/");
                } else {
                    throw new Error("사용자 삭제 실패");
                }
            } catch (error) {
                console.error(error);
            }
            }else {
                return;
            }
        }
    

        const HandleProfileUploadClick = () => {
            if(window.confirm("프로필 사진을 변경하시겠습니까?")) {
                profileFileRef.current.click();
            }
        }
    

        const HandleProfileChange = (e) => {
            const files = e.target.files;

            setUploadFiles([files[0]]);
    
            const reader = new FileReader();
    
            reader.onload = (e) => {
                const profileImageUrl = e.target.result;
                setProfileImgSrc(profileImageUrl);
    
                const storageRef = ref(storage, `files/profile/${file.name}`);
    
                uploadBytesResumable(storageRef, file)
                .then((uploadTaskSnapshot) => {
                    getDownloadURL(storageRef)
                        .then((downloadUrl) => {
                            setUserData({
                                ...userData,
                                profileUrl: downloadUrl
                            })
                        })
                })
        };
    
        reader.readAsDataURL(file);
    };


    // const testButtonOnClick = () => {
    //     console.log(userId);
    // }

return (
    <div>
        <div css={S.SinfoHeader}>
            <div>
                <div css={S.SimgBox} onClick={HandleProfileUploadClick}>
                    <img src={profileImgSrc} alt="프로필 이미지" />
                </div>
                <input css={S.Sfile} type="file" onChange={HandleProfileChange} ref={profileFileRef} />
            </div>
        </div>
        <div>
            <div>닉네임 <input type="text" name='nickname' defaultValue={userData.nickname} onChange={HandleUserEditChange} /></div>
            <div>이름 <input type="text" defaultValue={user.name} disabled /></div>
            <div>이메일 <input type="text" defaultValue={user.email} disabled /></div>
            <div>휴대전화 <input type="text" defaultValue={user.phoneNumber} disabled /></div>
            <div>우편번호 <input type="text" disabled name='defaultAddressNumber' id="sample6_postcode" defaultValue={userData.defaultAddressNumber} onChange={HandleUserEditChange}/></div>
            <div><input type="button" name='findDefaultAddressNumber' onClick={sample6_execDaumPostcode} defaultValue="우편번호 찾기" css={S.Sbutton} /></div>
            <div>주소 <input type="text" disabled name='defaultAddressName' id="sample6_address" defaultValue={userData.defaultAddressName} onChange={HandleUserEditChange}/></div>
            <div>상세주소 <input type="text" name='defaultAddressDetailName' id="sample6_detailAddress" defaultValue={user.defaultAddressDetailName} onChange={HandleUserEditChange}/></div>
        </div>
        <div><button onClick={HandleEditUser}>회원정보수정</button></div>
        <div><button onClick={HandleCancle}>취소</button></div>
        <div><button onClick={HandleDeleteUser}>회원탈퇴</button></div>
        {/* <div><button onClick={testButtonOnClick}>테스트 버튼</button></div> */}
    </div>
    );
}
    


export default EditUserInformation;