import React, { useState } from "react";
import manageTask from "../../assets/manageTask.json";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch(
        "https://task-api-eight-flax.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);

      setSuccess("Login successful ");
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side: Form */}
      <div className="flex flex-col justify-center w-full px-8 bg-white lg:w-1/2 md:px-24 lg:px-32">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-500 mb-8">Please enter login details below</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white px-1 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter the email"
                className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#114d33] focus:outline-none transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              {/* Label */}
              <label className="absolute -top-3 left-4 bg-white px-1 text-sm font-medium text-gray-600 z-10">
                Password
              </label>

              {/* Input */}
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter the Password"
                className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#114d33] focus:outline-none transition-all pr-12"
              />

              {/* Eye Icon Button */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#114d33] transition-colors focus:outline-none"
              >
                {showPassword ? <FiEyeOff size={20} /> : <BsEye size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button className="  px-12 py-3 bg-linear-to-r from-[#114d33] via-[#1d6b46] to-[#145a3a] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition-all">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <hr className="border-gray-300" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
              Or continue
            </span>
          </div>

          {/* Google Login */}
          <button className="flex items-center justify-center w-full py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors font-semibold text-gray-700">
            Log in with Google
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/" className="text-blue-400 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Lottie Animation & Promo */}
      <div className="hidden lg:flex flex-col items-center justify-center w-1/2 bg-[#114d33] p-12 text-white">
        <div className="w-full max-w-lg">
          {/* Lottie Animation - Replace src with your specific JSON link */}
          <Lottie
            loop
            animationData={manageTask}
            style={{ height: "380px", width: "380px" }}
          />
        </div>

        <div className="mt-8 text-center max-w-sm">
          <h2 className="text-2xl font-medium italic">
            "Manage your task in a easy and more efficient way with Tasky..."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
