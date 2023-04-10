import React from "react";
import "./Festival.css";
import { Box, Button} from '@mui/material';


function Festival() {
  return (
    <div>
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
          fill: "white",
        }}
      />
      <img className="fes-img" src="/image/YB.svg" alt="" />
      <div className="under-fes">
        <div className="fes-right">
          <p>تخفیف 30 درصدی</p>
          <p>امتیاز مورد نیاز : 2345</p>
        </div>
        <div className="fes-left">
          <p>2345</p>
          <img src="/image/diamond.svg" alt="" />
        </div>
      </div>
      <div className="fes-text">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <Box sx={{
            position: "fixed",
            bottom: "30px",
            right: 0,
            width: "100%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            px: 2
          }}>
            <Button
            variant="contained"
            sx={{
              fontSize: "17px",
              width: "328px",
              height: "51px",
              color: "white",
              backgroundColor: "var(--primary-color)",
              border: 'none',
              borderRadius: "10px",
            }}
          >
            دریافت جایزه
          </Button>
          </Box>
    </div>
  );
}

export default Festival;
