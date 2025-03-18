import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <> 
            <div className='bg-black w-screen h-screen bg-gradient-to-t from-green-700 relative'>
        
                {/* Titlen */}
                <div className="flex justify-center font-bold text-8xl text-white outline-4 drop-shadow-md underline decoration-green-700 mb-8">
                    <h1>FitMaster</h1>
                </div>

                {/* Center content above the bottom box */}
                <div className="flex justify-center items-center h-screen">
                </div>

                {/* Back knappen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <Link to="/" className="inline-block">
                        <button className="bg-transparent text-black border-black border-4 px-4 py-2 text-[20px] rounded-md hover:bg-blue-600 hover:text-white hover:font-bold">
                        Back
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AboutUs;