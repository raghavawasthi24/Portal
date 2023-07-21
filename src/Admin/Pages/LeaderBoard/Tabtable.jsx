import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Tabtable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: "rgba(222, 222, 222, 0.3)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab label="1" />
        <Tab label="2" />
        <Tab label="3" />
        <Tab label="4" />
        <Tab label="5" />
        <Tab label="6" />
        <Tab label="7" />
        <Tab label="8" />
        <Tab label="9" />
      </Tabs>
    </Box>
  );
};
export default Tabtable;
