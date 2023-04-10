import { Box } from "@mui/material";
import React from "react";
import Footer from "../../component/Footer/Footer";
import "./Orders.css";
import Search from "../../component/Search/Search";

function Orders() {
  return (
    <div className="order-all">
      <div className="orders-header">
        <Box
          component="img"
          src="./image/arrow.svg"
          width={24}
          height={24}
          alt=""
          sx={{
            position: "absolute",
            top: "30px",
            right: "20px",
          }}
        />
        <div className="financial-header">
          <p> سفارشات</p>
        </div>
      </div>
      <Search/>

      <div className="orders-b">
        <div className="line-one">
          <div className="in-sabad">
            <img src="/image/order.svg" alt="" />
            <div className="sabad">
              <p>سبد خرید تاریخ </p>
              <p>شنبه 23 شهریور </p>
            </div>
          </div>
          <div className="delivery">
            <p>تحویل داده شد </p>
          </div>
        </div>
        <div className="line-two">
          <p>21341 پرداختی</p>
          <p>1230,0000,0000</p>
        </div>
        <div className="buttons">
          <button>ثبت نظر</button>
          <button>مشاهده فاکتور</button>
        </div>
      </div>
      <div className="orders-b">
        <div className="line-one">
          <div className="in-sabad">
            <img src="/image/order.svg" alt="" />
            <div className="sabad">
              <p>فروشگاه آذر مرغ</p>
              <p>شنبه 23 شهریور </p>
            </div>
          </div>
          <div className="delivery2">
            <p>در انتظار تایید</p>
          </div>
        </div>
        <div className="line-two">
          <p>21341 پرداختی</p>
          <p>1230,0000,0000</p>
        </div>
        <div className="buttons">
          <button>ثبت نظر</button>
          <button>مشاهده فاکتور</button>
        </div>
      </div>
      <div className="orders-b">
        <div className="line-one">
          <div className="in-sabad">
            <img src="/image/order.svg" alt="" />
            <div className="sabad">
              <p>فروشگاه آذر مرغ</p>
              <p>شنبه 23 شهریور </p>
            </div>
          </div>
          <div className="delivery">
            <p>در حال پردازش </p>
          </div>
        </div>
        <div className="line-two">
          <p>21341 پرداختی</p>
          <p>1230,0000,0000</p>
        </div>
        <div className="buttons">
          <button>ثبت نظر</button>
          <button>مشاهده فاکتور</button>
        </div>
      </div>
      <div className="orders-b">
        <div className="line-one">
          <div className="in-sabad">
            <img src="/image/order.svg" alt="" />
            <div className="sabad">
              <p>فروشگاه آذر مرغ</p>
              <p>شنبه 23 شهریور </p>
            </div>
          </div>
          <div className="delivery3">
            <p>در مسیر</p>
          </div>
        </div>
        <div className="line-two">
          <p>21341 پرداختی</p>
          <p>1230,0000,0000</p>
        </div>
        <div className="buttons">
          <button>ثبت نظر</button>
          <button>مشاهده فاکتور</button>
        </div>
      </div>
      {/* <footer>
        <div className="footer3">
          <div className="small-ft3">
            <img src="/image/basket2.svg" alt="" />
            <p>مسئول خرید من</p>
          </div>
          <div className="small-ft3">
            <img src="/image/report.svg" alt="" />
            <p>گزارشات</p>
          </div>
          <div className="small-ft3">
            <img src="/image/classify.svg" alt="" />
            <p>دسته بندی</p>
          </div>
          <div className="small-ft3">
            <img src="/image/shop.svg" alt="" />
            <p>فروشگاه ها</p>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}

export default Orders;
