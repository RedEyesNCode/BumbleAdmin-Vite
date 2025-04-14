import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getUserFeed } from "../api/api_interface";

function AdminUserFeed({ currentFeedUser }) {
  const [userFeedData, setUserFeedData] = useState(null);
  const [dateMode, setDateMode] = useState(null);

  const fetchUserFeed = async () => {
    try {
      const rawJson = {
        currentUserId: currentFeedUser.user_id,
        dateMode: dateMode,
        interestedId: currentFeedUser.interested_id,
      };
      const responseUserFeed = await getUserFeed(rawJson);
      if (responseUserFeed.code == 200) {
        // toast.success(responseAllGenders.message);
        console.log(responseUserFeed.data);

        setUserFeedData(responseUserFeed.data);
      } else {
        toast.dark("No user feed found !");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUserFeed();
  }, []);

  return (
    <div className="flex flex-col">
      <ToastContainer />
    </div>
  );
}

export default AdminUserFeed;
