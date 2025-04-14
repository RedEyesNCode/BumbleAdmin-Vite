import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AiFillCode } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import AdminHome from "./components/AdminHome";
import { toast, ToastContainer } from "react-toastify";
import AdminUserFeed from "./components/AdminUserFeed";
function App() {
  const [navigation, setNavigation] = useState("AdminHome");

  const [feedUser, setFeedUser] = useState("");

  return (
    <div className=" flex flex-row bg-white h-screen">
      <ToastContainer />
      <div className="flex flex-col w-[20%] h-full bg-slate-800 justify-between overflow-auto">
        {/* Main content */}
        <div className="flex flex-col flex-grow">
          <div
            onClick={() => {
              setNavigation("AdminHome");

              setFeedUser("");
            }}
            className={`text-white font-kumbh cursor-pointer text-[18px] text-center p-2 hover:bg-yellow-600 rounded-md m-2 ${
              navigation == "AdminHome" ? "bg-yellow-600" : `bg-transparent`
            }`}
          >
            Home
          </div>
          <div
            onClick={() => toast.info("Please select user first.")}
            className={`text-white font-kumbh cursor-pointer text-[18px] text-center p-2 hover:bg-yellow-600 rounded-md m-2 ${
              navigation == "UserModule" ? "bg-yellow-600" : `bg-transparent`
            }`}
          >
            User Feed : {feedUser.first_name}
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
      <div
        className="w-[80%] h-screen
       bg-white"
      >
        {navigation === "UserModule" && (
          <AdminUserFeed currentFeedUser={feedUser} />
        )}
        {navigation === "AdminHome" && (
          <AdminHome
            userFeedNavigate={(user) => {
              setNavigation("UserModule");
              setFeedUser(user);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
