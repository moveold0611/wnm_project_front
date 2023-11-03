import React, { useEffect, useState } from 'react';
import * as S from "../Signup/Style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from '../../apis/config/instance';
/**@jsxImportSource @emotion/react */

function Signup(props) {
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
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                document.getElementById("sample6_detailAddress").focus();
            }
            }).open();
        };
    
        return () => {
            document.body.removeChild(script);
        };
    } // daum 주소코드 끝
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();


    const user = {
        oauth2Id: searchParams.get("oauth2Id"),
        provider: searchParams.get("provider"),
        name: searchParams.get("name"),
        nickname: "",
        email: "",
        phoneNumber: "",
        defaultAddressNumber:"",
        defaultAddressName:"",
        defaultAddressDetailName:""
    }

    const [ signupUser, setSignupUser ] = useState(user);

    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSignupSubmit = async () => {
        try {
            await instance.post("/api/auth/signup", signupUser);
            alert("회원가입 완료");
            window.location.replace("/auth/signin");
        }catch(error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("nickname")) {
                alert("이미 사용중인 닉네임입니다. 다시 입력하세요.");
                }
            }
        }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div>
                    <div><h1>회원가입</h1></div>
                    <div><h3 css={S.Sh3}>회원이 되어 다양한 혜택을 경험해 보세요!</h3></div>
                    <div><h4 css={S.Sh4}>이름</h4></div>
                    <div><input type="text" name='name' placeholder='이름을 입력해주세요' onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><h4 css={S.Sh4}>이메일</h4></div>
                    <div><input type="email" name='email' placeholder='이메일을 입력해주세요' onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><h4 css={S.Sh4}>닉네임</h4></div>
                    <div><input type="text" name='nickname' placeholder='닉네임을 입력해주세요' onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><h4 css={S.Sh4}>전화번호</h4></div>
                    <div><input type="text" name='phonenumber' placeholder='전화번호를 입력해주세요' onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><h4 css={S.Sh4}>주소</h4></div>
                    <div><input type="text" name='defaultAddressNumber' id="sample6_postcode" placeholder="우편번호" onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><input type="button" name='findDefaultAddressNumber' onClick={sample6_execDaumPostcode} value="우편번호 찾기" css={S.Sbutton} /></div>
                    <div><input type="text" name='defaultAddressName' id="sample6_address" placeholder="주소" css={S.Sinput} onChange={handleInputChange} /></div>
                    <div><input type="text" name='defaultAddressDetailName' id="sample6_detailAddress" placeholder="상세주소" onChange={handleInputChange} css={S.Sinput} /></div>
                    <div><button onClick={handleSignupSubmit}>가입하기</button></div>
                </div>
            </div>
        </div>
        
    );
}

export default Signup;