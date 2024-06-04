// import React from "react";

// import InfoCard from "../components/InfoCard";
import headshot from "../assets/headshot.png";

const MainPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 items-center gap-4 p-16 bg-blue-950 text-white">
        <div>
          <img
            src={headshot}
            width={300}
            height={300}
            className="rounded-full mx-auto w-30 border-white border-2 justify-center"
          />
        </div>
        <div className="text-left text-3xl md:text-5xl">
          Casey
          <br />
          Capetola
        </div>
      </div>
    </>
  );
};

export default MainPage;
