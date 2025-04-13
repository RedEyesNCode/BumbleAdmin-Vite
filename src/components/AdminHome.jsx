import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../api/api_interface";
import { toast, ToastContainer } from "react-toastify";
import CreateUserDialog from "./dialogs/CreateUserDialog";
import UpdateUserDialog from "./dialogs/UpdateUserDialog";

function AdminHome() {
  const [userData, setUserData] = useState([]);

  const [showCreateUserDialog, setshowCreateUserDialog] = useState(false);

  const [showUpdateUserDialog, setshowUpdateUserDialog] = useState(false);

  const fetchAllUsers = async () => {
    try {
      const responseAllUsers = await getAllUsers();
      if (responseAllUsers.code == 200) {
        toast.success(responseAllUsers.message);
        console.log(responseAllUsers);

        setUserData(responseAllUsers.data);
      } else {
        toast.dark("No users found !");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = async (_id) => {
    try {
      const rawJson = {
        userId: _id,
      };
      const deleteResponse = await deleteUser(rawJson);
      if (deleteResponse.code == 200) {
        toast.success("User deleted successfully !");
        fetchAllUsers();
      } else {
        toast.error("User profile not deleted !");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <div className="flex flex-row justify-between items-center">
        <div className="my-2 text-black font-semibold font-mono text-[24px] ps-4">
          Welcome, Admin!
        </div>
        <div
          onClick={() => {
            setshowCreateUserDialog(true);
          }}
          className="bg-amber-600 m-2 text-white rounded-xl  hover:bg-amber-500 cursor-pointer  p-2 font-mono font-semibold text-[22px]"
        >
          Create New User
        </div>
      </div>

      {userData && userData.length != 0 ? (
        <div>
          <div className="overflow-x-auto px-4 py-2">
            <table className="table-auto border text-center border-gray-300  items-center justify-center w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Actions</th>
                  <th className="border p-2">User ID</th>
                  <th className="border p-2">First Name</th>
                  <th className="border p-2">Last Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">User Name</th>
                  <th className="border p-2">Number</th>
                  <th className="border p-2">is-Matched</th>
                  <th className="border p-2">dateOfBirth</th>
                  <th className="border p-2">Age</th>
                  <th className="border p-2">Bio</th>
                  <th className="border p-2">Interested ID</th>
                  <th className="border p-2">Cover Image</th>
                  <th className="border p-2">Is Verified</th>
                  <th className="border p-2">Date Me ID</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td className="border p-2 items-center  justify-center">
                      <div className="flex gap-2 items-center justify-center">
                        <button
                          className="bg-red-500 hover:bg-red-800 cursor-pointer font-kumbh text-white px-2 py-1 rounded text-xs"
                          onClick={() => {
                            handleDeleteUser(user.user_id);
                          }}
                        >
                          Delete User
                        </button>
                        <button
                          className="bg-amber-500 hover:bg-amber-700 cursor-pointer font-kumbh font-semibold text-white px-2 py-1 rounded text-xs"
                          onClick={() => {
                            setshowUpdateUserDialog(true);
                          }}
                        >
                          Update User
                        </button>
                      </div>
                    </td>
                    <td className="border p-2">{user.user_id}</td>
                    <td className="border p-2">{user.first_name}</td>
                    <td className="border p-2">{user.last_name}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">{user.userName}</td>
                    <td className="border p-2">{user.number}</td>
                    <td className="border p-2">{user.isMatched}</td>
                    <td className="border p-2">{user.dateOfBirth}</td>
                    <td className="border p-2">{user.age}</td>
                    <td className="border p-2">{user.bio}</td>
                    <td className="border p-2">{user.interested_id}</td>
                    <td className="border p-2">
                      <img
                        src={user.interested_id}
                        alt="cover_img"
                        className="w-[56px] h-[56px]"
                      />
                    </td>
                    <td className="border p-2">{user.verified}</td>
                    <td className="border p-2">{user.date_ME_ID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="my-2 text-black font-semibold font-mono text-[24px] ps-4">
            No user found!
          </div>

          {showCreateUserDialog && (
            <CreateUserDialog
              onCloseDialog={() => {
                fetchAllUsers();

                setshowCreateUserDialog(false);
              }}
            />
          )}
          {showUpdateUserDialog && (
            <UpdateUserDialog
              onCloseDialog={() => {
                fetchAllUsers();
                setshowUpdateUserDialog(false);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default AdminHome;
