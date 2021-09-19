import React from "react";

export default function Navbar(props) {
  React.useEffect(() => {
    const burger = document.querySelector(".burger");
    const links = document.querySelector(".links");

    burger.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }, []);

  return (
    <div>
      <nav>
        <nav>
          <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
}
