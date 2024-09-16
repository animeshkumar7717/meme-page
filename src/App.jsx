/** @format */

import { useEffect, useState } from "react";
import Meme from "./component/Meme";
import Navbar from "./navbar/Navbar";

export default function App() {
  const [data, setData] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [itemData, setItemData] = useState();

  useEffect(() => {
    fetchDataApi();
  }, []);

  const fetchDataApi = async () => {
    const response = await fetch("https://meme-api.com/gimme/50");
    const data = await response.json();
    setData(data.memes);
  };

  const changeSetIsClick = (value) => {
    console.log("value", value);

    setIsClick(value);
  };

  const handleButtonClick = (item) => {
    setItemData(item.preview[2]);
    setIsClick(true);
  };

  return (
    <div className="bg-cyan-950 min-h-screen">
      <Navbar />
      {!isClick ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10 max-w-full items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700 p-2"
            >
              <img src={item.preview[2]} alt="meme" className="flex h-72 m-2" />
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-cursive font-bold p-2 rounded w-full mt-2"
                onClick={() => handleButtonClick(item)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Meme memeData={itemData} seeMeme={changeSetIsClick} />
        </div>
      )}
    </div>
  );
}
