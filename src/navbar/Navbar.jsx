/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="p-1 bg-green-500 flex justify-between">
      <h1 className="font-bold font-cursive text-3xl text-white pl-12">
        MEME PAGE
      </h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2qsKSLLxOiCvtrb8IRSLpBTtVTcONes9IQ&s"
        alt="meme-logo"
        className="h-16 w-16 rounded-full"
      />
    </div>
  );
};

export default Navbar;
