import React from "react";
import { Box, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";

const BRANDS = [
  {
    title: "بهداشتی",
    id: 0,
    brand: [
      { id: 5, title: "دستمال" },
      { id: 6, title: "دستمال1" },
      { id: 7, title: "دستمال2" },
      { id: 8, title: "دستمال3" },
      { id: 9, title: "دستمال4" },
    ],
  },
  {
    title: "لبنیات",
    id: 1,
    brand: [
      { id: 15, title: "ماست" },
      { id: 16, title: "ماست1" },
      { id: 17, title: "ماست2" },
      { id: 18, title: "ماست3" },
      { id: 19, title: "ماست4" },
    ],
  },
];

function InDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleClick = (name) => {
    setOpen(name === open ? "" : name);
  };
  return (
    <Box sx={{ fontSize: "15px" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "29px",
            mr: "15px",
            borderBottom: "1px solid #B4B4B4",
            mb: "13px",
          }}
        >
          فیلتر ها
        </Typography>
        <Box>
          {BRANDS?.map((item, index) => (
            <Box
              onClick={() => handleClick(item?.title)}
             /*  sx={{
                display: "flex",
                
                justifyContent: "space-between",
              }} */
              key={index}
            >
              <Typography sx={{ fontSize: "20px", mr: "17px" }}>
                {item?.title}
              </Typography>

              {open === item.title ? <ExpandLess /> : <ExpandMore />}
              <Box>
                <Collapse in={open === item.title} timeout="auto" unmountOnExit>
                  <div>
                    {item.brand.map((option, index) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          borderBottom: "1px solid #B4B4B4",
                          pt: "5px",
                          mr: "5px",
                        }}
                        key={index}
                      >
                        <Checkbox size="small" />
                        <Typography sx={{ fontSize: "18px" }}>
                          {option.title}
                        </Typography>
                      </Box>
                    ))}
                  </div>
                </Collapse>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default InDrawer;

