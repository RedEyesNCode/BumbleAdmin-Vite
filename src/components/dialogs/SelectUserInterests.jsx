import { ToastContainer, toast } from "react-toastify";
import { getAllInterests } from "../../api/api_interface";
import { useEffect, useState } from "react";

function SelectUserInterests({ onCloseDialog, onSubmit }) {
  const [interestsData, setUserInterestsData] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const fetchAllInterests = async () => {
    try {
      const responseAllInterests = await getAllInterests();
      if (responseAllInterests.code == 200) {
        setUserInterestsData(responseAllInterests.data);
      } else {
        toast.dark("No interests found!");
      }
    } catch (error) {
      console.error("Error fetching interests:", error);
    }
  };

  useEffect(() => {
    fetchAllInterests();
  }, []);

  const toggleSelectInterest = (interest) => {
    const isAlreadySelected = selectedInterests.find(
      (item) => item.id === interest.id
    );
    if (isAlreadySelected) {
      setSelectedInterests((prev) =>
        prev.filter((item) => item.id !== interest.id)
      );
    } else {
      setSelectedInterests((prev) => [...prev, interest]);
    }
  };

  const isSelected = (id) => selectedInterests.some((item) => item.id === id);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/4 border-2 rounded-lg p-2 bg-white -translate-y-1/2 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-auto">
        <ToastContainer />

        <div className="flex flex-row justify-between items-center mb-4">
          <div className="font-mono font-semibold">Select User Interests</div>
          <button
            onClick={() => onCloseDialog()}
            className="text-red-500 hover:text-red-800 cursor-pointer"
          >
            ❌
          </button>
        </div>

        {interestsData && interestsData.length !== 0 ? (
          <div>
            <div className="overflow-x-auto px-4 py-2">
              <table className="table-auto border text-center border-gray-300 w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Interest ID</th>
                    <th className="border p-2">Interest Name</th>
                  </tr>
                </thead>
                <tbody>
                  {interestsData.map((interest) => (
                    <tr
                      onClick={() => toggleSelectInterest(interest)}
                      className={`cursor-pointer ${
                        isSelected(interest.id)
                          ? "bg-slate-600 text-white"
                          : "hover:bg-slate-200"
                      }`}
                      key={interest.id}
                    >
                      <td className="border p-2">{interest.id}</td>
                      <td className="border p-2">{interest.interestName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => onSubmit(selectedInterests)}
                className="bg-blue-600 w-full cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={selectedInterests.length === 0}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="my-2 text-black font-semibold font-mono text-[24px] ps-4">
              No Interests found!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectUserInterests;
