import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
        <Route path="/auth/signin" element={ <Signin /> } />
      </Routes>
  );
}

export default App;
