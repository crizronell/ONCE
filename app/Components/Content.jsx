import React from "react";
import Banner from "./Banner";
import BannerDetails from "./BannerDetails";
import About from "./About";

function Content() {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Banner />
        <BannerDetails />
        <About />
      </div>
    </>
  );
}

export default Content;
