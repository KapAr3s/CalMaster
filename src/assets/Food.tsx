import { Link, } from "react-router-dom";



function Food() {

return(
    <>
        <div className="relative w-screen h-screen bg-gradient-to-b from-green-700 to-black">
            {/*Titlen*/}
            <div className="flex justify-center font-bold text-8xl text-gray-200 drop-shadow-md underline decoration-black">
             <h1>FitMaster</h1>
            </div>

            <div className="flex justify-center font-bold text-4xl text-white my-64">
             <h1>Hi, skriv bruger navn</h1>
            </div>

            {/*Hoved boksen*/}
            <div className="flex justify-center items-center h-full -mt-[600px]">
                <div className="flex flex-col items-center gap-4 p-6 border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px]">
                    
                    {/*Knap til at gå tilbage til start skærmen*/}
                    <div className="w-full">
                        <Link to="/start">
                            <button className="bg-white border-4 border-black text-lg py-2 rounded-xl w-full hover:bg-blue-500 hover:font-bold hover:text-white hover:text-xl">
                             Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>









        </div>
    </>
    )
}

export default Food;