import { Link, useOutletContext } from "react-router-dom";

interface FormData {
  age: string;
  weight: string;
  height: string;
  username: string;
  email: string;
  password: string;
}

function Profile() {
  const { formData } = useOutletContext<{ formData: FormData }>();

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-black to-white">
      <div className="flex justify-center font-bold text-5xl text-gray-200 drop-shadow-md underline">
        <h1 className="my-10">Profile information</h1>
      </div>

      {/* boks til personlig information */}
      <div className="flex justify-center items-center h-full -my-14">
        <div className="flex flex-col items-center border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px] space-y-4 p-4">
          <input
            type="text"
            value={formData.username}
            readOnly
            placeholder="Username:"
            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
          />
          <input
            type="text"
            value={formData.email}
            readOnly
            placeholder="Email:"
            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
          />
          <input
            type="text"
            value={formData.password}
            readOnly
            placeholder="Password:"
            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
          />
          <input
            type="text"
            value={formData.age}
            readOnly
            placeholder="Age:"
            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
          />
          <div className="flex justify-between w-full space-x-4">
            <input
              type="text"
              value={formData.weight}
              readOnly
              placeholder="Weight:"
              className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
            />
            <input
              type="text"
              value={formData.height}
              readOnly
              placeholder="Height:"
              className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
            />
          </div>
          {/* knapper til lidt af hvert ;) */}
          <div className="flex justify-between w-full space-x-4">
            <button className="flex-grow bg-white border border-gray-300 rounded-md py-2 hover:bg-blue-500 hover:text-white">
              Change information
            </button>
            <Link to="/start">
              <button className="flex-grow bg-white border border-gray-300 rounded-md px-10 py-2 hover:bg-green-500 hover:text-white">
                Back
              </button>
            </Link>
            <Link to="/" className="flex-grow">
              <button className="w-full bg-white border border-gray-300 rounded-md px-8 py-2 hover:bg-red-600 hover:text-white">
                Log out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
