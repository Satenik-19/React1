import logotype from "../images/Logotype.svg";
import searchIMG from "../images/search.svg";
import { useState, useEffect } from "react";

function Header(props) {
  let { search, setSearch } = props;

  let [display, setDisplay] = useState({ display: "none" });
  let bool = true;

  useEffect(() => {
    document.querySelector(".clickToOpen").addEventListener("click", () => {
      document.querySelector("header").style.opacity = "0.3";
      document.querySelector("main").style.opacity = "0.3";
      document.querySelector(".menu").style.left = "0";
    });

    //

    let logotype = document.querySelector('header img[alt="logotype"]');
    window.addEventListener("click", (e) => {
      if (e.target.getAttribute("class") == "searchButton") {
        if (bool) {
          setDisplay({ display: "block" });
          logotype.style.display = "none";
          bool = false;
        } else {
          setDisplay({ display: "none" });
          logotype.style.display = "block";
          bool = true;
        }
      } else {
        if (e.target.getAttribute("class") == "searchInput") {
          setDisplay({ display: "block" });
          logotype.style.display = "none";
        } else {
          setDisplay({ display: "none" });
          logotype.style.display = "block";
        }
      }
    });
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="search">
        <div className="container search_inner">
          <div className="clickToOpen">
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div3"></div>
          </div>
          <img src={logotype} alt="logotype" />
          <form onSubmit={handleSubmit} style={display}>
            <input
              type="search"
              className="searchInput"
              placeholder="Search..."
              style={display}
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input type="submit" value="" />
          </form>
          <img src={searchIMG} alt="" className="searchButton" />
        </div>
      </div>
    </header>
  );
}

export default Header;
