"use client";

import { useEffect, useState } from "react";
const USERID = "135932078486192128";

const Discord = () => {
  const [discord, setDiscordStatus] = useState(null);

  useEffect(() => {
    const fetchDiscordStatus = () => {
      fetch(`https://api.lanyard.rest/v1/users/${USERID}`)
        .then((response) => response.json())
        .then((data) => {
          setDiscordStatus(data.data.discord_status);
        });
    };

    fetchDiscordStatus();
    const intervalId = setInterval(fetchDiscordStatus, 5000); // Fetch data every 5 seconds
    // Clean up function
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex-wrap relative">
        <div className=" relative ">
            
            <div className= "relative bg-borderhover rounded-md w-72 h-24  top-40">
            <p className = "text-white pl-40 pb-0 text-sm pt-1 ">
            Prince Sonani
                </p>
                <p className = "text-white pl-40 font-semibold pt-1 text-xs pb-3">
                </p>
                <p className = "text-white pl-40 font-semibold pt-0 text-xs pb-0">
                Software Engineer
                </p>
                <p className = "text-white pl-40 font-semibold pt-0 text-xs ">
                Chicago, IL
                </p>
            </div>

        </div>
        <img
        className="mb-10 w-36 h-36 object-cover rounded-full border-4 drop-shadow-lg border-bordercolor hover:border-borderhover
    transition-all duration-300 ease-in-out z-0"
        // http://cloudinary.com/invites/lpov9zyyucivvxsnalc5/ldgg2il2ywtcplrssudv used cloudinary to "host" images on a website
        src="https://res.cloudinary.com/dyfkrpzfm/image/upload/v1711432119/Prince3_rhja7n.png"
      />
      <div
      title = {discord ? `${discord === "dnd" ? 'Do Not Disturb' : 'offline'}` : "Loading..."}
        className={`left-24 bottom-2 absolute w-9 h-9  border-4 rounded-full z-50 drop-shadow-xl ${
          discord === "online"
            ? "bg-green-600 border-green-700"
            : discord === "offline"
              ? "bg-gray-500 border-gray-600"
              : discord === "idle"
                ? "bg-yellow-600 border-yellow-700"
                : discord === "dnd"
                  ? "bg-red-500 border-red-600"
                  : "bg-grey-500 border-gray-600" // default color
        }`}
      >
        {" "}
      </div>

      {/* <p>{discord ? `User status: ${discord}` : "Loading..."}</p> */}
    </div>
  );
};

export default Discord;
