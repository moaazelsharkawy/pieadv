import React from 'react';
import { FaSignInAlt, FaHome, FaPlus } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <h2 className="title">pieadv</h2>
      <h3 className="desc">اعلن معانا عن خدماتك وادفع بالباي</h3>
      <div className="row">
        <div className="box">
          <img src="\src\assets\tec.png" alt="الخدمات الفنية"/>
        </div>
        <div className="box">
          <img src="image2.jpg" alt="خدمات الاونلاين" />
        </div>
      </div>
      <div className="row">
        <div className="box">
          <img src="image3.jpg" alt="خدمات المحمول" />
        </div>
        <div className="box">
          <img src="image4.jpg" alt="خدمات المحاماة" />
        </div>
      </div>
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
    </div>
  );
}

export default App;
