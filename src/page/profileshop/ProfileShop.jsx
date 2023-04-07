import React, { Fragment, useState } from "react";
import { Button } from "@mui/material";
import "./ProfileShop.css";
import Grid from "@mui/material/Grid";
import Card from "../../component/Card/Card";
import FilterPsh from "./FilterPsh";

const CATEGROY = [
  { title: "همه", id: 0 },
  { title: "پر سود ترین ها", id: 1 },
  { title: "کم سود ترین ها", id: 2 },
  { title: "پر فروش ترین", id: 3 },
];

const Product = [
  {
    title: "دستمال کاغذی رو میزی طرح نقره ای",
    src: "/image/dastmal.png",
    price: 19500,
    category: "کم سود ترین",
    label: 2,
  },
  {
    title: "دستمال حوله کاغذی آشپزخانه سافتلن",
    src: "/image/softlan.png",
    price: 45700,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده صورتی",
    src: "/image/maye.png",
    price: 29500,
    label: 3,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 3,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/softlan.png",
    price: 30500,
    label: 1,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 1,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/softlan.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/softlan.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/softlan.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 4,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 3,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/dastmal.png",
    price: 30500,
    label: 3,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 3,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 2,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/dastmal.png",
    price: 30500,
    label: 2,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 2,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 2,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/dastmal.png",
    price: 30500,
    label: 1,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/maye.png",
    price: 30500,
    label: 1,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/dastmal.png",
    price: 30500,
    label: 1,
  },
  {
    title: "مایع دستشویی با مرطوب کننده سفید",
    src: "/image/dastmal.png",
    price: 30500,
    label: 1,
  },
];

function ProfileShop() {
  const [active, setActive] = useState(0);

  /* const [searchTerm, setSearchTerm] = useState(""); */
  return (
    <div className="overfolw">
      <div className="container">
        <div className="banner">
          <img src="/image/profileshop.svg" alt="" loading="lazy" />
        </div>
        <div className="logo-c">
          <img src="/image/circlepic.svg" alt="" loading="lazy" />
        </div>
        <div className="shop-xx">فروشگاه ایکس</div>
        <div className="loc-x">
          <img src="/image/location.svg" alt="" loading="lazy" />
          <p>ولیعصر ، رودکی</p>
        </div>
      </div>
      <div className="btn-shop">
        {CATEGROY?.map((item, index) => (
          <Button
            onClick={() => setActive(item.id)}
            id="0"
            sx={{ height: "23.18px", maxWidth: "110px", fontSize: "11px" }}
            variant="contained"
            className={` ${active === item.id ? "orange" : "gray"}`}
            key={index}
          >
            {item?.title}
          </Button>
        ))}
      </div>
      <div className="filter-line">
        <div className="filter-ps">
          <FilterPsh />
          <p>مشاهده فیلتر ها</p>
        </div>

        <div className="search-ps">
          <input
            type="text"
            /* onChange={(event) => {
              setSearchTerm(event.target.value);
            }} */
          />
          {/*  {Product.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return <div key={key}>{val.title}</div>;
          })} */}
          <img src="/image/search.svg" alt="" loading="lazy" />
        </div>
      </div>
      <Grid container spacing={0.5}>
        {Product?.map((item, index) => (
          <Fragment key={index}>
            {active === 0 ? (
              <Grid item xs={6} key={index}>
                <Card title={item.title} src={item.src} price={item.price} />
              </Grid>
            ) : active === 1 && item.label === 1 ? (
              <Grid item xs={6} key={index}>
                <Card title={item.title} src={item.src} price={item.price} />
              </Grid>
            ) : active === 2 && item.label === 2 ? (
              <Grid item xs={6} key={index}>
                <Card title={item.title} src={item.src} price={item.price} />
              </Grid>
            ) : active === 3 && item.label === 3 ? (
              <Grid item xs={6} key={index}>
                <Card title={item.title} src={item.src} price={item.price} />
              </Grid>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default ProfileShop;

/* 
1 => Most Profit
2 => Most price
3 => Lowest Price
4 => Most Discount
*/
