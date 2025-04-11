import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AiFillCode } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import AdminUser from "./components/AdminUser";
import AdminHome from "./components/AdminHome";
function App() {
  const [navigation, setNavigation] = useState("AdminHome");

  return (
    <div className=" flex flex-row bg-white h-screen">
      <div className="flex flex-col w-[20%] h-full bg-slate-800 justify-between overflow-auto">
        {/* Main content */}
        <div className="flex flex-col flex-grow">
          <div
            onClick={() => setNavigation("AdminHome")}
            className={`text-white font-kumbh cursor-pointer text-[18px] text-center p-2 hover:bg-yellow-600 rounded-md m-2 ${
              navigation == "AdminHome" ? "bg-yellow-600" : `bg-transparent`
            }`}
          >
            Home
          </div>
          <div
            onClick={() => setNavigation("UserModule")}
            className={`text-white font-kumbh cursor-pointer text-[18px] text-center p-2 hover:bg-yellow-600 rounded-md m-2 ${
              navigation == "UserModule" ? "bg-yellow-600" : `bg-transparent`
            }`}
          >
            User Module
          </div>
            
        </div>

        {/* Bottom Text */}
        <div className="text-white text-center text-sm p-4 items-center flex flex-row">
          <AiFillCode size={32} className=" animate-bounceUpDown" />
          <div className=" text-white font-semibold font-kumbh text-[12px] ps-4">
            git/RedEyesNCode
          </div>
          <DiGithubBadge size={16} />
        </div>
      </div>
      <div className="w-[80%] h-screen
       bg-white">
        {navigation === "UserModule" && <AdminUser />}
        {navigation === "AdminHome" && <AdminHome />}

        </div>
    </div>
  );
}

export default App;
