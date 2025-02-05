import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#000" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
              <CodeIcon />
              <Typography pl={1}>FLORENCE ADIKWU</Typography>    
            </Box>
            <Typography sx={{ textAlign: "left" }}>Frontend Engineer</Typography>
          </Box>
          <Button href="mailto:florenceadikwu@gmail.com" color="inherit">Contact me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
