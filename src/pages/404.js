import React from "react";
import { FaSignInAlt, FaHome, FaPlus } from "react-icons/fa";
import Header from "../comp/header";
import Footer from '../comp/footer';


const Erorr404 = () => {
  return (
    <>
  <Header/>
      <main><div className="not-found">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
    </div></main>
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

    <Footer/>
    </>
  );
};

export default Erorr404;
