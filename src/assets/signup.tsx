import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
        <div className="bg-green-700 w-screen h-screen bg-gradient-to-l from-black">

            {/* Titlen */}
            <div className="flex justify-center font-bold text-8xl text-white outline-4 drop-shadow-md underline decoration-green-700">
                <h1>CalMaster</h1>
            </div>

            {/* Signup Boks */}
            <div className="flex justify-center items-center h-screen -my-10">
                <div className="flex flex-col items-center gap-4 p-6 border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px]">
                    
                    <input 
                        type="text" 
                        placeholder="Email"
                        className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" />

                     <input 
                        type="text" 
                        placeholder="Username"
                        className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" />  

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" />

                    <input 
                        type="password" 
                        placeholder="Repeat password"
                        className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" />

                    <div className="flex justify-between w-full space-x-4">
                        
                        <input
                            type="text"
                            placeholder="Age"
                            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
                        />
                    
                        <input
                            type="text"
                            placeholder="Weight"
                            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
                        />

                        <input
                            type="text"
                            placeholder="Height"
                            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
                        />

                    </div>

                    {/* knapper til at lave konto og gå tilbage */}
                    <div className="flex w-full justify-between gap-2">
                        <Link to="/" className="w-[48%]">
                            <button className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-blue-600 hover:text-white hover:font-bold">
                                Back
                            </button>
                        </Link>

                        <Link to="/start" className="w-[48%]">
                            <button className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-green-500 hover:text-white hover:font-bold">
                                Confirm account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;