import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="small-ft">
            <img
              src="/image/basket2.svg"
              alt=""
              onClick={() => navigate("/shops")}
            />
            <p>مسئول خرید من</p>
          </div>
          <div className="small-ft">
            <img
              src="/image/report.svg"
              alt=""
              onClick={() => navigate("/reports2")}
            />
            <p>گزارشات</p>
          </div>
          <div className="small-ft">
            <img
              src="/image/classify.svg"
              alt=""
              onClick={() => navigate("/categories")}
            />
            <p>دسته بندی</p>
          </div>
          <div className="small-ft">
            <img
              src="/image/shop.svg"
              alt=""
              onClick={() => navigate("/profileshop")}
            />
            <p>فروشگاه ها</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
