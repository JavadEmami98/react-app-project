import React, { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import InDrawer from "./InDrawer";

const FilterPsh = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Fragment>
        <img onClick={() => setOpen(true)} src="/image/filter.svg" alt=""/>
        <div>
          <Drawer anchor={"bottom"} open={open} onClose={() => setOpen(false)}>
            <InDrawer/>
          </Drawer>
        </div>
      </Fragment>
    );
  };
  

export default FilterPsh;
