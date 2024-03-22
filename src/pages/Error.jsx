import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1 className="text-4xl uppercase font-bold text-blue-700">404</h1>
      <h3 className="text-3xl text-blue-600 uppercase underline font-bold">
        not found
      </h3>

      <Link
        to="/"
        className=" flex items-center justify-center text-sky-50 font-bold w-32 h-12  bg-blue-600  uppercase text-md rounded-md hover:bg-blue-500 transition ease-in-out duration-150"
      >
        back home
      </Link>
    </>
  );
};

export default Error;
