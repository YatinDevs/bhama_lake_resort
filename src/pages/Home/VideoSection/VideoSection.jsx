import React, { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import "./style.scss";
import { PlayIcon } from "./Playbtn";
import Img from "../../../components/lazyLoadImage/Img";
import { locationImg8 } from "../../../constants";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import ReactPlayer from "react-player/youtube";

function VideoSection() {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState("If3MwMB8Rxw");

  return (
    <div>
      <ContentWrapper>
        <div></div>
        <div className="flex flex-row mx-5 ">
          <div
            className="videoItem flex-1"
            onClick={() => {
              setShow(true);
            }}
          >
            <div className="videoThumbnail">
              <Img src={locationImg8} className=" h-96" />
              <PlayIcon />
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                width="100%"
                height="100%"
                // playing={true}
              />
            </div>
            <div className="videoTitle"> </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
}

export default VideoSection;
