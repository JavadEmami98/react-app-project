import React from "react";
//import RandomTab from "../../RandomTab/RandomTab";
import "./InBack.css";

function InBack() {
  return (
    <div>
      <div className="back-g">
        <img src="/image/background.svg" alt="" />
        <div className="yellow-box">
          <img src="/image/YB.svg" alt="" />
          <button type="submit">دریافت امتیاز</button>
          <div className="img-person">
            <img src="/image/person.svg" alt=""/>
            <p>فروشگاه ایکس</p>
          </div>
          <div className="text-x">
            <p>تخفیف 30  درصدی نان و غلات</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی ...</p>
          </div>
          <div className="last-btn">
            <button type="submit">ادامه مطلب</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InBack;
