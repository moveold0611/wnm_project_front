import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";

import RootLayout from "./components/RootLayout/RootLayout";
import Main from "./pages/Main/Main";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import OAuth2Signin from "./pages/Signin/OAuth2Signin";
import BuyProduct from "./pages/BuyProduct/BuyProduct";
import { getPrincipalApi } from "./apis/api/account";
import ProductRegist from "./pages/Admin/ProductRegist/ProductRegist";
import BuyInfo from "./pages/BuyInfo/BuyInfo";
import CartProducts from "./pages/CartProducts/CartProducts";
import EditProduct from "./pages/Admin/EditProduct/EditProduct";
import EditProductDetailPage from "./pages/Admin/EditProduct/EditProductDetailPage/EditProductDetailPage"
import EditUser from "./pages/EditUser/EditUser";
import Mypage from "./pages/Mypage/Mypage";
import ProductRoute from "./routes/ProductRoute/ProductRoute";

import OrderUser from "./pages/OrderUser/OrderUser";

import Incoming from "./pages/Admin/Incoming/Incoming";
import Outgoing from "./pages/Admin/Outgoing/Outgoing";
import AddIncoming from "./pages/Admin/Incoming/AddIncoming/AddIncoming";
import AddOutgoing from "./pages/Admin/Outgoing/AddOutgoing/AddOutgoing";
import JoinProductDetail from "./pages/Admin/JoinProductDetail/JoinProductDetail";
import AdminOrder from "./pages/Admin/AdminOrder/AdminOrder";
import AdminOrderDetail from "./pages/Admin/AdminOrder/AdminOrderDetail/AdminOrderDetail";
import OrderUserDetail from "./pages/OrderUser/OrderUserDetail/OrderUserDetail";
import WriteAnnouncement from "./pages/Admin/WriteAnnouncement/WriteAnnouncement";
import Announcement from "./pages/Announcement/Announcement";
import AnnouncementDetail from "./pages/Announcement/AnnouncementDetail/AnnouncementDetail";


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
    enabled: !!localStorage.getItem("accessToken"),
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

  if(getPrincipal.isLoading){
    return <>로딩</>
  }

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/mypage" element={ <Mypage /> }/>
        <Route path="/auth/signup" element={ <Signup /> } /> 
        <Route path="/auth/signin" element={ <Signin /> } />
        <Route path="/auth/oauth2/signin" element={ <OAuth2Signin /> } />
        <Route path="/useredit/:userId" element={ <EditUser /> } />
        <Route path="/products/:type/*" element={ <ProductRoute /> } />
        <Route path="/product/:productId" element={ <BuyProduct/> } />
        <Route path="/order" element={ <BuyInfo/> } />
        <Route path="/orders" element={ <OrderUser /> }/>
        <Route path="/orders/:orderId" element={ <OrderUserDetail /> }/>
        <Route path="/product/cart/:userId" element={ <CartProducts/> } />
        <Route path="/notice" element={<Announcement />} />
        <Route path="/notice/:announcementId" element={ <AnnouncementDetail />} />
        
        {/* 주소입력시 막기 */}
        <Route path="/admin/product" element={ <ProductRegist/> } />
        <Route path="/admin/product/edit/*" element={ <EditProduct/> }/>
        <Route path="/admin/edit/product/:productMstId" element={ <EditProductDetailPage/> }/> 
        <Route path="/admin/incoming" element={ <Incoming/> }/>       
        <Route path="/admin/incoming/add" element={ <AddIncoming/> }/>  
        <Route path="/admin/outgoing" element={ <Outgoing/> }/>       
        <Route path="/admin/outgoing/add" element={ <AddOutgoing/> }/>       
        <Route path="/admin/product/join/:productMstId" element={ <JoinProductDetail/> }/>  
        <Route path="/admin/order" element={ <AdminOrder/> }/>      
        <Route path="/admin/order/:orderId" element={ <AdminOrderDetail/> }/>   
        <Route path="/admin/write/announcement" element={ <WriteAnnouncement />} />
      </Routes>
    </RootLayout>
  );
}

export default App;