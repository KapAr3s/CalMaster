import { Link } from "react-router-dom";
import { MouseEvent, useState } from "react";
import CheckIfUserExistsInDatabase from "./Database";
import { useNavigate } from "react-router-dom";

const LoginEventHandler = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  setUserExists: React.Dispatch<React.SetStateAction<boolean>>,
  setUserHasTriedToLogin: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: ReturnType<typeof useNavigate>
) => {
  e.preventDefault();
  if (CheckIfUserExistsInDatabase(email, password)) {
    navigate("/start");
  } else {
    setUserHasTriedToLogin(true);
    setUserExists(false);
  }
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [userHasTriedToLogin, setUserHasTriedToLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <form>
      <div className="bg-green-700 w-screen h-screen bg-gradient-to-r from-black">
        {/* Title */}
        <div className="flex justify-center font-bold text-8xl text-white outline-4 drop-shadow-md underline decoration-green-700">
          <h1>FitMaster</h1>
        </div>

        {/* Login Box */}
        <div className="flex justify-center items-center h-screen -my-10">
          <div className="flex flex-col items-center gap-4 p-6 border-4 border-black bg-transparent rounded-lg w-80 lg:w-[500px]">
            <input
              type="text"
              name="email"
              placeholder="Email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md h-11 w-full placeholder-black placeholder-italic px-2"
            />
            {/* Error Message */}
            <div>
              {userHasTriedToLogin === true && userExists === false ? (
                <div>
                  <p className="text-red-500 text-2xl">
                    Something wen't wrong. Please try again.
                  </p>
                </div>
              ) : (
                <p className="text-white text-2xl">Please fill in the form</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex w-full justify-between">
              <Link to="/" className="w-[48%]">
                <button className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-blue-600 hover:text-white hover:font-bold">
                  Back
                </button>
              </Link>

              <Link to="/start" className="w-[48%]">
                <button
                  onClick={(e) =>
                    LoginEventHandler(
                      e,
                      email,
                      password,
                      setUserExists,
                      setUserHasTriedToLogin,
                      navigate
                    )
                  }
                  className="bg-white border border-gray-300 px-4 py-2 text-[20px] rounded-md w-full hover:animate-bounce hover:bg-green-500 hover:text-white hover:font-bold"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
