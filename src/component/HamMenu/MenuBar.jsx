import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div>
      <div className="input">
        <input placeholder="جستجوی محصولات" />
        <img src="/image/search.svg" alt="" />
      </div>
      <div>
        <div className="menubar">
          <ul>
            <li>
              <Link to={"/"}>حساب کاربری</Link>
            </li>
            <li>
              <Link to={"/"}>مسئول خرید من</Link>
            </li>
            <li>
              <Link to={"/"}>علاقه مندی</Link>
            </li>
            <li>
              <Link to={"/"}>تماس با ما</Link>
            </li>
            <li>
              <Link to={"/"}>وبلاگ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
