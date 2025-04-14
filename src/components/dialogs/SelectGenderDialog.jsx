import { useEffect, useState } from "react";
import { getAllInterests, getGenders } from "../../api/api_interface";
import { ToastContainer, toast } from "react-toastify";

function SelectGenderDialog({ onCloseDialog, onSubmit }) {
  const [gendersData, setGendersData] = useState([]);

  const fetchAllGenders = async () => {
    try {
      const responseAllGenders = await getGenders();
      if (responseAllGenders.code == 200) {
        // toast.success(responseAllGenders.message);
        console.log(responseAllGenders);

        setGendersData(responseAllGenders.data);
      } else {
        toast.dark("No users found !");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAllGenders();
  }, []);

  return (
    <div className="fixed  inset-0 left-[20%] overflow-auto flex items-center justify-center">
      <div className="flex flex-col bg-white">
        <ToastContainer />

        <div className="flex flex-row justify-between">
          <div className="font-mono font-semibold">Select User Gender</div>
          <button
            onClick={() => onCloseDialog()}
            className="text-red-500 items-end hover:text-red-800 cursor-pointer"
          >
            ❌
          </button>
        </div>

        {gendersData && gendersData.length != 0 ? (
          <div>
            <div className="overflow-x-auto px-4 py-2">
              <table className="table-auto border text-center border-gray-300  items-center justify-center w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Gender ID</th>

                    <th className="border p-2">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {gendersData.map((gender) => (
                    <tr
                      onClick={() => {
                        onSubmit(gender);
                      }}
                      className="hover:bg-slate-500 text-black hover:text-white cursor-pointer"
                      key={gender.id}
                    >
                      <td className="border p-2">{gender.id}</td>

                      <td className="border p-2">{gender.genderName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="my-2 text-black font-semibold font-mono text-[24px] ps-4">
              No gender found!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectGenderDialog;
