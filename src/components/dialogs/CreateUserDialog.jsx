import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createNewUser } from "../../api/api_interface";
import SelectGenderDialog from "./SelectGenderDialog";
import SelectUserInterests from "./SelectUserInterests";

function CreateUserDialog({ onCloseDialog }) {
  const [userForm, setUserForm] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    userName: "",
    number: "",
    gender_id: 0,
    fcm_token: "",
    firebaseUID: "",
    bio: "",
    interested_id: 0,
    coverImg: "",
    lat_: "",
    userInterests: [0],
    long_: "",
    isVerified: "",
    dateOfBirth: "",
    date_ME_ID: "-1",
  });

  const [genderDialog, setGenderDialog] = useState(false);

  const [interestedGender, setInterestGender] = useState(false);
  const [userInterests, setUserInterests] = useState(false);

  const callCreateUserAPI = async () => {
    console.log("CREATE_USER_FORM", userForm);

    try {
      const responseCreateUser = await createNewUser(userForm);
      if (responseCreateUser.code == 200) {
        toast.success(responseCreateUser.message);
        console.log(responseCreateUser);
        onCloseDialog();
      } else {
        toast.dark("User not created !");
      }
    } catch (error) {
      console.error("Error creating users:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setForm({ ...form, [e.target.name]: e.target.value });
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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

        <div className="flex flex-col">
          <div className="grid grid-cols-3 ">
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">First Name</div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="border rounded-sm p-1"
                placeholder="Enter first name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Last Name</div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="border rounded-sm p-1"
                placeholder="Enter last name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Password</div>
              <input
                type="text"
                name="password"
                id="password"
                className="border rounded-sm p-1"
                placeholder="Enter password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Email</div>
              <input
                type="email"
                name="email"
                id="email"
                className="border rounded-sm p-1"
                placeholder="Enter email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Username</div>
              <input
                type="text"
                name="userName"
                id="userName"
                className="border rounded-sm p-1"
                placeholder="Enter user name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Number</div>
              <input
                type="number"
                name="number"
                id="number"
                className="border rounded-sm p-1"
                placeholder="Enter number"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Gender</div>
              <input
                type="number"
                name="gender_id"
                readOnly
                id="gender_id"
                className="border rounded-sm p-1"
                placeholder="Select Gender"
                onClick={() => {
                  setGenderDialog(true);
                }}
                value={userForm.gender_id}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Interested Gender</div>
              <input
                type="number"
                name="interested_id"
                readOnly
                id="interested_id"
                className="border rounded-sm p-1"
                placeholder="Select Intersted Gender"
                onChange={(e) => {
                  handleChange(e);
                }}
                onClick={() => {
                  setInterestGender(true);
                }}
                value={userForm.interested_id}
              />
            </div>

            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">User Interests</div>
              <input
                type="text"
                name="userInterests"
                readOnly
                id="userInterests"
                className="border rounded-sm p-1"
                placeholder="Select User Interests"
                onClick={() => {
                  setUserInterests(true);
                }}
                value={userForm.userInterests?.join(", ") || ""}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Profile Image</div>
              <input
                type="text"
                name="coverImg"
                id="coverImg"
                className="border rounded-sm p-1"
                placeholder="Paste Cover Image URL"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Profile Bio</div>
              <input
                type="text"
                name="bio"
                id="bio"
                className="border rounded-sm p-1"
                placeholder="Enter Profile Bio"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Latitude</div>
              <input
                type="text"
                name="lat_"
                id="lat_"
                className="border rounded-sm p-1"
                placeholder="Enter Latitude"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Longitude</div>
              <input
                type="text"
                name="long_"
                id="long_"
                className="border rounded-sm p-1"
                placeholder="Enter Longitude"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-row m-2 gap-4 font-kumbh items-center justify-start">
              <input
                type="checkbox"
                name="long_"
                id="long_"
                className="border rounded-sm p-1"
                placeholder="Enter Longitude"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <div className="my-2 text-black">Verifed User ?</div>
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Date of Birth</div>
              <input
                type="text"
                name="dateOfBirth"
                id="dateOfBirth"
                className="border rounded-sm p-1"
                placeholder="Enter Date of Birth"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Fcm Token</div>
              <input
                type="text"
                name="fcm_token"
                id="fcm_token"
                className="border rounded-sm p-1"
                placeholder="Enter FCM Token"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Firebase UID</div>
              <input
                type="text"
                name="firebaseUID"
                id="firebaseUID"
                className="border rounded-sm p-1"
                placeholder="Enter Firebase UID"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col m-2 font-kumbh">
              <div className="my-2 text-black">Date Me ID</div>
              <input
                type="text"
                name="date_ME_ID"
                id="date_ME_ID"
                className="border rounded-sm p-1"
                placeholder="Enter Date_ME_ID "
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <div
            onClick={() => {
              callCreateUserAPI();
            }}
            className="bg-amber-600 m-2 text-center text-white rounded-xl  hover:bg-amber-500 cursor-pointer  p-2 font-mono font-semibold text-[22px]"
          >
            Submit
          </div>
        </div>
      </div>

      {genderDialog && (
        <SelectGenderDialog
          onCloseDialog={() => setGenderDialog(false)}
          onSubmit={(gender_onsubmit) => {
            setGenderDialog(false);
            setUserForm((prev) => ({
              ...prev,
              gender_id: gender_onsubmit.id,
            }));
          }}
        />
      )}
      {interestedGender && (
        <SelectGenderDialog
          onCloseDialog={() => setInterestGender(false)}
          onSubmit={(gender_onsubmit) => {
            setInterestGender(false);
            setUserForm((prev) => ({
              ...prev,
              interested_id: gender_onsubmit.id,
            }));
          }}
        />
      )}
      {userInterests && (
        <SelectUserInterests
          onCloseDialog={() => setUserInterests(false)}
          onSubmit={(interest_onsubmit) => {
            setUserInterests(false);
            setUserForm((prev) => ({
              ...prev,
              userInterests: interest_onsubmit.map((item) => item.id), // only IDs
            }));
            console.log("USER_INTEREST_UPDATED", userForm);
          }}
        />
      )}
    </div>
  );
}

export default CreateUserDialog;
