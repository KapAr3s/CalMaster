import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="bg-green-700 w-screen h-screen bg-gradient-to-r from-black">
                {/* Title */}
                <div className="flex justify-center font-bold text-8xl text-white outline-4 drop-shadow-md underline decoration-green-700">
                    <h1>CalMaster</h1>
                </div>
                
                {/* Login Box */}
                <div className="flex justify-center items-center h-screen -my-10">
                    <div className="flex flex-col items-center gap-4 p-6 border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px]">
                        
                        <input 
                            type="text" 
                            placeholder="Email or username"
                            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" 
                        />

                        <input 
                            type="password" 
                            placeholder="Password"
                            className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2" 
                        />

                        {/* Buttons */}
                        <div className="flex w-full justify-between">
                            <Link to="/" className="w-[48%]">
                                <button className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-blue-600 hover:text-white hover:font-bold">
                                    Back
                                </button>
                            </Link>

                            <Link to="/start" className="w-[48%]">
                                <button className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-green-500 hover:text-white hover:font-bold">
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;