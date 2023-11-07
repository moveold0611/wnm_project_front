import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
<<<<<<< HEAD
import EditUserInformation from "./pages/Mypage/EditUserInformation";
import { useQuery } from "react-query";
import { instance } from "./apis/config/instance";
=======
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
>>>>>>> 86e53d2347052468d1890c72fc84b57bd7ee47e7

function App() {

  const getPrincipal = useQuery(["getPrincipal"], async () => {
    try{
      const option = {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        }
      }
      return await instance.get("/account/principal", option);

    }catch(error) {
      throw new Error(error);
    }
  }, {
    retry: 0,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

  if(getPrincipal.isLoading){
    return <></>
  }

  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
        <Route path="/auth/signin" element={ <Signin /> } />
<<<<<<< HEAD
        <Route path="/useredit/:userId" element={ <EditUserInformation /> } />
=======
        <Route path="/product/:productId" element={ < Product/> } />
>>>>>>> 86e53d2347052468d1890c72fc84b57bd7ee47e7
      </Routes>
  );
}

export default App;
