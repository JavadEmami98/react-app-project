import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TicketInside from "./TicketInside";



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

export default function TicketTab() {
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
          <Tab className="tab-edit" label="گفت و گو های فعال" {...a11yProps(0)} />
          <Tab className="tab-edit" label="گفت و گو های بسته شده" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <TicketInside />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TicketInside />
      </TabPanel>
    </div>
  );
}
