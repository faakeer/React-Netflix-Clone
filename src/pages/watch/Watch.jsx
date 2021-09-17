import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";

import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="http://techslides.com/demos/sample-videos/small.mp4"
        className="video"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
};

export default Watch;
