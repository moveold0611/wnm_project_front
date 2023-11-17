import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";

import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import EditUserInformation from "./pages/Mypage/EditUserInformation";
import OAuth2Signin from "./pages/Signin/OAuth2Signin";
import BuyProduct from "./pages/BuyProduct/BuyProduct";
import { getPrincipalApi } from "./apis/api/account";
import MypageMain from "./pages/Mypage/MypageMain/MypageMain";
import ProductRegist from "./pages/ProductRegist/ProductRegist";
import BuyInfo from "./pages/BuyInfo/BuyInfo";
import CartProducts from "./pages/CartProducts/CartProducts";
import EditProduct from "./pages/EditProduct/EditProduct";
import Products from "./pages/Products/Products"
import EditProductDetailPage from "./pages/EditProduct/EditProductDetailPage/EditProductDetailPage";


function App() {

  const getPrincipal = useQuery(["getPrincipal"], async () => {
    try{

      const option = {
        headers: {
          Authorization: !!localStorage.getItem("accessToken")
          ? localStorage.getItem("accessToken") : ""
        }
      }

      const response = await getPrincipalApi(option);
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
    <RootLayout>
      <Routes>
        <Route path="/mypage" element={ <MypageMain /> }/>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
        <Route path="/auth/signin" element={ <Signin /> } />
        <Route path="/auth/oauth2/signin" element={ <OAuth2Signin /> } />
        <Route path="/useredit/:userId" element={ <EditUserInformation /> } />
        {/* :petType/:productCategory/:pageIndex */}
        <Route path="/products/" element={ <Products /> } />
        <Route path="/product/:productId" element={ <BuyProduct/> } />
        <Route path="/order/" element={ <BuyInfo/> } />
        <Route path="/product/cart/:userId" element={ <CartProducts/> } />
        <Route path="/admin/product" element={ <ProductRegist/> } />
        <Route path="/admin/product/edit/*" element={ <EditProduct/> }/>
        <Route path="/admin/edit/product/:productMstId" element={ <EditProductDetailPage/> }/>        
      </Routes>
    </RootLayout>
  );
}

export default App;