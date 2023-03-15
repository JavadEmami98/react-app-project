import React, { Fragment } from "react";
import MenuBar from "./MenuBar";
import Drawer from "@mui/material/Drawer";

const Hammenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Fragment>
      <img onClick={() => setOpen(true)} src="/image/hamber.svg" />
      <div>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <MenuBar />
        </Drawer>
      </div>
    </Fragment>
  );
};

export default Hammenu;
