import { Link } from "react-router-dom";

function Home () {
    return (
      <>
        <div className='bg-green-700 w-screen h-screen bg-gradient-to-t from-black'>
  
          {/* Title */}
          <div className='flex justify-center font-bold text-8xl text-slate-200 outline-4 drop-shadow-md underline decoration-black'>
          <h1>Welcome to CalMaster</h1>
          </div>
  
          {/* Login and Sign-up Buttons */}
          <div className='flex flex-col justify-center items-center h-[90%]'>
            <Link to="/login">
              <button className="bg-white ml-1 px-6 py-1 text-[30px] rounded-xl border-black border-2 text-4xl hover:animate-pulse hover:bg-green-500 hover:text-white hover:font-bold">
                Login
              </button> 
            </Link>

            <Link to="/signup">
              <button className="bg-white ml-1 px-2 py-1 text-[30px] rounded-xl border-black border-2 text-4xl hover:animate-pulse hover:bg-blue-600 hover:text-white hover:font-bold">
                Sign-up
              </button>
            </Link>
          </div>
  
          {/* About Us Button */}
          <div className='absolute -bottom-0.5 right-0'>
            <Link to="/aboutus">
              <button className="bg-transparent ml-1 px-1 py-1 text-[15px] rounded-xl text-white text-xl hover:bg-green-500 hover:text-white hover:font-bold my-1">
                About us
              </button>
            </Link>
          </div>
        </div>
      </>
    );
}

export default Home;