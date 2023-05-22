import React from "react";
import { FaSignInAlt, FaHome, FaPlus } from "react-icons/fa";
const Product = () => {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>piadvservice</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="#">
              Advertise with us
            </a>
            <ul className="sub-ul">
              <li>
                <a href="">product</a>
              </li>
              <li>
                <a href="">company</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              services
            </a>
            <ul className="sub-ul">
              <li>
                <a href="">tec</a>
              </li>
              <li>
                <a href="">online</a>
              </li>
              <li className="mini-projects">
                <a href="">others&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <a className="main-link" href="#">
              price{" "}
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>Product</main>
      <div className="buttons">
        <button className="button">
          <FaPlus />
          نشر اعلان
        </button>
        <button className="button">
          <FaHome />
          الرئيسية
        </button>
        <button className="button">
          <FaSignInAlt />
          تسجيل الدخول
        </button>
      </div>

      <footer>
        Designed by pioneer
        <span>🧡</span>
      </footer>
    </>
  );
};

export default Product;