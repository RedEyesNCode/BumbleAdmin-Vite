import { ToastContainer } from "react-toastify";
import { updateProfile } from "../../api/api_interface";

function UpdateUserDialog({ onCloseDialog, user_id, userObj }) {
  const handleUpdateUser = async (_id) => {
    try {
      const rawJson = {
        userId: _id,
      };
      const updateResponse = await updateProfile(rawJson);
      if (updateResponse.code == 200) {
        toast.success("User updated successfully !");
        fetchAllUsers();
      } else {
        toast.error("User profile not deleted !");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className="fixed  inset-0 left-[20%] overflow-auto flex items-center justify-center">
      <div className="flex border-2 border-slate-600 flex-col bg-white rounded-lg shadow-md w-full max-w-3xl">
        <ToastContainer />

        <div className="flex flex-row justify-between align items-end me-2 mt-2">
          <div className="ms-2 font-mono font-semibold text-[18px] items-center">
            Create new user
          </div>
          <button
            onClick={() => onCloseDialog()}
            className="text-red-500 items-end hover:text-red-800 cursor-pointer"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserDialog;
