import { useState, useEffect } from "react";
import logotype from "../images/Logotype.svg";

function Menu() {
  let menuText = ["Demos", "Post", "Features", "Categories", "Shop", "Buy Now"];
  let subMenuText = [
    "Post Header",
    "Post Layout",
    "Share Buttons",
    "Gallery Post",
    "Video Post",
  ];
  useEffect(() => {
    let previousPosition = document.documentElement.scrollTop;

    window.addEventListener("scroll", () => {
      let currentPosition = document.documentElement.scrollTop;
      let menu = document.querySelector(".menu");

      if (previousPosition < currentPosition && currentPosition > 200) {
        menu.style.top = "-60px";
      } else {
        menu.style.top = "0";
      }
      previousPosition = currentPosition;
    });
    document.querySelector(".clickToClose").addEventListener("click", () => {
      document.querySelector("header").style.opacity = "1";
      document.querySelector("main").style.opacity = "1";
      document.querySelector(".menu").style.left = "-85%";
    });
  }, []);

  return (
    <div className="menu">
      <div className="open">
        <img src={logotype} alt="logotype" />

        <div className="clickToClose"></div>
      </div>
      <div className="container-small none">
        <ul>
          {menuText.map((item, index) => {
            if (index !== 1) {
              return <li key={`li-${index}`}>{item}</li>;
            } else {
              return (
                <li key={`li-${index}`}>
                  {item}
                  <ul>
                    {subMenuText.map((item, index) => {
                      return (
                        <li key={`li-inner-${index}`}>
                          <p>{item}</p>
                          <span></span>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
