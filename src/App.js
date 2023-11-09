import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import EditUserInformation from "./pages/Mypage/EditUserInformation";
import { useQuery } from "react-query";
import { instance } from "./apis/config/instance";
import Product from "./pages/Product/Product";
import OAuth2Signin from "./pages/Signin/OAuth2Signin";

import RootLayout from "./components/RootLayout/RootLayout";
import BuyProduct from "./pages/BuyProduct/BuyProduct";
import { useQuery } from "react-query";
import { getPrincipalApi } from "./apis/api/account";
import MypageMain from "./pages/Mypage/MypageMain/MypageMain";


function App() {

  const getPrincipal = useQuery(["getPrincipal"], async () => {
    try{
      const response = await getPrincipalApi();
      console.log("로그인 상태")
      return response;
    }catch(error) {
      console.log("비로그인 상태")
      throw new Error(error);
    }
  }, {
    retry: 0,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

  if(getPrincipal.isLoading){
    return <>로딩</>
  }
  return (
      <Routes>
        <Route path="/mypage" element={ <MypageMain /> }/>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
        <Route path="/auth/signin" element={ <Signin /> } />
        <Route path="/auth/oauth2/signin" element={ <OAuth2Signin /> } />
        <Route path="/useredit/:userId" element={ <EditUserInformation /> } />
        <Route path="/product/:productId" element={ <Product/> } />
        <Route path="/admin/product" element={ <ProductRegist/> } />
      </Routes>
  );
}

export default App;
