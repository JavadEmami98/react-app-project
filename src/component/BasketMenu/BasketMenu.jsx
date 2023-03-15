import React, { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import BasketBar from "./BasketBar";

const BasketMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <img onClick={() => setOpen(true)} src="/image/bag.svg" alt=""/>
      <div>
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <BasketBar />
        </Drawer>
      </div>
    </Fragment>
  );
};

export default BasketMenu;
