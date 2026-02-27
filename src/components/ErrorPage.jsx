import React from "react";
import ErrorPageFiles from "../assets/404 not found.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Lottie animationData={ErrorPageFiles} loop={true}></Lottie>
      <Link
        to="/"
        className="  px-12 py-3 bg-linear-to-r from-[#114d33] via-[#1d6b46] to-[#145a3a] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition-all"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
