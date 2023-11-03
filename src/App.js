import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import EditUserInformation from "./pages/Mypage/EditUserInformation";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
        <Route path="/auth/signin" element={ <Signin /> } />
        <Route path="/auth/edituserinformation" element={ <EditUserInformation /> } />
      </Routes>
  );
}

export default App;
