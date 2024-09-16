/** @format */

import React from "react";

const Meme = ({ memeData, seeMeme }) => {
  return (
    <div className="flex flex-col items-center text-center p-10 m-10">
      <img
        src={memeData}
        alt="meme"
        className="w-[500px] max-h-[400px] items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700 p-10"
      />
      <button
        className="bg-green-400 hover:bg-green-700 font-cursive text-white font-bold p-2 rounded mt-2 w-[500px]"
        onClick={() => seeMeme(false)}
      >
        Back
      </button>
    </div>
  );
};

export default Meme;
