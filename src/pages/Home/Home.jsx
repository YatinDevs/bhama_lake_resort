import React from "react";
import HeroBanner from "./HeroSection/HeroBanner";
import Rooms from "../Rooms/Rooms";
import VideoSection from "./VideoSection/VideoSection";

function Home() {
  return (
    <div>
      <HeroBanner />
      <VideoSection />
      <Rooms />
    </div>
  );
}

export default Home;
