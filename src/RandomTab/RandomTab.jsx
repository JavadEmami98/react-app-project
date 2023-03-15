import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "./RandomTab.css";
import SwiperBuy from "../component/Swiper/Swiper";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RandomTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs
          className="tab-edit"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tab-edit" label="همه محصولات" {...a11yProps(0)} />
          <Tab className="tab-edit" label="سبزیجات" {...a11yProps(1)} />
          <Tab className="tab-edit" label="لبنیات" {...a11yProps(2)} />
          <Tab className="tab-edit" label="نان وغلات" {...a11yProps(3)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <SwiperBuy />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SwiperBuy />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SwiperBuy />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SwiperBuy />
      </TabPanel>
    </div>
  );
}
