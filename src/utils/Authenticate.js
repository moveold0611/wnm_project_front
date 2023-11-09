export const tokenAuthenticate = (principal) => {
    if(!localStorage.getItem("accessToken")) {
        alert("로그인 후 이용해주세요.")
        window.location.replace("/")
    }else if(!!!principal?.data?.data) {
        alert("사용자 인증에 실패하였습니다.")
        window.location.replace("/")
    }
}

export const reverseAuthenticate = () => {
    if(!!localStorage.getItem("accessToken")) {
        alert("이미 로그인 상태입니다..")
        window.location.replace("/")
    }
}