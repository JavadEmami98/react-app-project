import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="small-ft">
            <img src="/image/basket2.svg" alt="" />
            <p>مسئول خرید من</p>
          </div>
          <div className="small-ft">
            <img src="/image/report.svg" alt="" />
            <p>گزارشات</p>
          </div>
          <div className="small-ft">
            <img src="/image/classify.svg" alt="" />
            <p>دسته بندی</p>
          </div>
          <div className="small-ft">
            <img src="/image/shop.svg" alt="" />
            <p>فروشگاه ها</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
