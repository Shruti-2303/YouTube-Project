import React from "react";
import { useSelector } from "react-redux";

const SmallSideBar = () => {
  // const isSmallMenuOpen = useSelector(store=>store.app.isSmallMenuOpen);

  // if(!isSmallMenuOpen) return null;

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>You</li>
      </ul>
    </div>
  );
};

export default SmallSideBar;
