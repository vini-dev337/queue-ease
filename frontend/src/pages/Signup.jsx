import { useState } from "react";
import { Link } from "react-router";
import FormInput from "../components/FormInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // stops the browser from reloading the page
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("signup form submitted");
    console.log(`Name is ${name}, email is ${email}`);
  };

  return (
    <div className="w-full min-h-dvh flex items-center justify-center p-4 pb-32">
      <div className="w-full max-w-120 border border-gray-200 rounded-md shadow-xl bg-white">
        <h1 className="p-5 pl-6 pt-8 font-extrabold text-[24px]">
          Create your account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full p-4 space-y-6">
            <FormInput
              label="Name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

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
              placeholder="Create a password"
            />

          </div>

          <div className="flex flex-col gap-6 p-4">
            {error && <p className="text-red-500 font-bold">{error}</p>}

            <button
              type="submit"
              className="bg-blue-500 text-white h-10 w-full font-bold rounded-md"
            >
              Sign up
            </button>

            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 font-bold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;