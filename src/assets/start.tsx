import { Link, useOutletContext } from "react-router-dom";

interface FormData {
  age: string;
  weight: string;
  height: string;
  username: string;
  email: string;
  password: string;
}

function Start() {
  const { formData } = useOutletContext<{ formData: FormData }>();

  return (
    <>
      <div className="relative w-screen h-screen bg-gradient-to-b from-black to-green-700">
        {/* Title */}
        <div className="flex justify-center font-bold text-8xl text-gray-200 drop-shadow-md underline decoration-green-700">
          <h1>CalMaster</h1>
        </div>

        {/* Main box */}
        <div className="flex justify-center items-center h-full -my-110">
          <div className="flex flex-col items-center gap-4 p-6 border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px]">

            {/* Welcome message */}
            <h2 className="text-3xl font-bold text-white drop-shadow-md">
              Welcome, {formData.username || "User"}!
            </h2>

            <div className="flex w-full justify-between space-x-4">
             <button className="bg-white border-4 border-black text-lg px-2 py-1 rounded-xl w-full hover:bg-green-500 hover:font-bold hover:text-white">
                 Calorie intake   
             </button>

             <button className="bg-white border-4 border-black text-lg px-2 py-1 rounded-xl w-full hover:bg-green-500 hover:font-bold hover:text-white">
                 Food ideas   
             </button>
            </div>

            <div className="flex w-full justify-between space-x-4">
             <button className="bg-white border-4 border-black text-lg px-2 py-1 rounded-xl w-full hover:bg-green-500 hover:font-bold hover:text-white">
                 Training exercises
             </button>

             <button className="bg-white border-4 border-black text-lg px-2 py-1 rounded-xl w-full hover:bg-green-500 hover:font-bold hover:text-white">
                 Extra training
             </button>
            </div>
            
            <button className="bg-white border-4 border-black text-lg px-2 py-1 rounded-xl w-full hover:bg-green-500 hover:font-bold hover:text-white">
                Workout schedule
            </button>

          </div>
        </div>

        {/* Profile box */}
        <div className="absolute top-5 right-4 flex flex-col items-center gap-4 p-6 border-4 border-transparent bg-transparent rounded-3xl w-40 lg:w-[75px] lg:h-[75px]">
          <Link to="/profile">
            <button className="bg-transparent border-4 border-white px-2 py-5 rounded-3xl -mt-7 text-white hover:bg-green-500 hover:animate-pulse">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start;
