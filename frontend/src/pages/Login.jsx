import { useState } from "react";
import { Link } from "react-router";
import FormInput from "../components/FormInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // stops the browser from reloading the page
    // use validator
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setError("");
    console.log("form submitted");
    console.log(`Email is ${email}`);
  };

  return (
    <div className="w-full min-h-dvh flex items-center justify-center p-4 pb-32">
      <div className="w-full max-w-120 border border-gray-200 rounded-md shadow-xl bg-white">
        <h1 className="p-5 pl-6 pt-8 font-extrabold text-[24px]">
          Welcome back
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full p-4 space-y-8">
            <FormInput
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <FormInput
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col gap-6 p-4">
            <div className="text-right pr-4 text-blue-500 font-semibold">
              <Link to="/forgotpassword">Forgot password?</Link>
            </div>

            {error && <p className="text-red-500 font-bold">{error}</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white h-10 w-full font-bold rounded-md"
            >
              Log in
            </button>

            <div className="text-center">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 font-bold">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;