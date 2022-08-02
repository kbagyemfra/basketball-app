import React from "react";
import { MdSportsBasketball } from "react-icons/md";
import { ImHome } from "react-icons/im";

const Legend = () => {
  return (
    <section className="sidebar">
      <div className="top">
        <div className="brand">
          <a href="/">
            <MdSportsBasketball />
          </a>
          <a href="/">
            <span>Player Stats</span>
          </a>
        </div>
      </div>
      {/* Logout Btn */}
      <div className="right">
        <div className="home">
          <a href="/">
            <ImHome />
            <span>Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Legend;
