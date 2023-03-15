import React from "react";
import "./MenuBar.css";

function MenuBar() {
  return (
    <div>
      <input className="input" placeholder="جستجوی محصولات" />
      <div>
        <div className="menubar">
          <ul>
            <li><a href="www.google.com">حساب کاربری</a></li>
            <li><a href="www.google.com">مسئول خرید من</a></li>
            <li><a href="www.google.com">علاقه مندی</a></li>
            <li><a href="www.google.com">تماس با ما</a></li>
            <li><a href="www.google.com">وبلاگ</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
