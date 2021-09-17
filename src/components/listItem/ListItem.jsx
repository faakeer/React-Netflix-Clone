import React, { useState } from "react";

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";

import "./listItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 }}
      onMouseEnter={() => setIsHovered(true)}
      omMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 Hour 14 mins</span>
          <span className="limit">+16</span>
          <span>2000</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate
          voluptate beatae qui incidunt animi aliquam officiis expedita officia
          reiciendis?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};

export default ListItem;
