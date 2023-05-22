import React from "react";
import { FaSignInAlt, FaHome, FaPlus } from "react-icons/fa";
import Header from "../comp/header";
import Footer from '../comp/footer';


const Service = () => {
  return (
    <>
    <Header/>
      <main>Service</main>
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

export default Service;
