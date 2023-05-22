import React from "react";
import { FaSignInAlt, FaHome, FaPlus } from "react-icons/fa";
import Header from "../comp/header";

const Company = () => {
  return (
    <>
  <Header/>

      <main>company</main>
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

export default Company;
