import { Route, Routes } from "react-router-dom";
import Forgot from "./screens/forgot";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Profile from "./screens/profile/userProfile";
import Account from "./screens/account/account";
import Setting from "./screens/setting/setting";
import Home from "./screens/home/home";
import MyCourses from "./screens/myCourses/my_courses";
import MyCart from "./screens/myCart/myCart";
import Sidebar from "./screens/sidebar/sidebar";


import { Header } from "antd/es/layout/layout";


function App() {
  return (
    <>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<Forgot />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myCourses" element={<MyCourses />} />
            <Route path="/myCart" element={<MyCart />} />
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}



            <Route path="/header" element={<Header />} />


{/* <Header/> */}
          </Routes>
        </Sidebar>
    </>
  );
}
export default App;
