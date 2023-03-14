import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UlItems from "./ComponentsNavBar/UlItems";
import Cart from "./ComponentsNavBar/Cart";
import Logo from "./ComponentsNavBar/Logo";

const navbar = () => {
  return (
    <Box sx={{ minWidth: 80 }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          minWidth: 100,
          mr: 0.1,
          display: { xs: "flex", sm: "flex", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 500,
          alignItems: "center",
          color: "inherit",
        }}
      >
        <Toolbar
          sx={{
            minWidt: 100,
            mr: 0.1,
            display: { xs: "flex", sm: "flex", md: "flex" },
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 1,
              alignItems: "center",
              marginRight: 3,
              display: "flex",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Typography
            variant="h6"
            component="div"
            width={170}
            marginLeft={3}
            marginRight={3}
            sx={{
              mr: 0.1,
              display: { xs: "none", sm: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,

              color: "inherit",
            }}
          >
            Loto de Resina
          </Typography>
          <UlItems />
          <Button
            color="inherit"
            sx={{
              mr: -2,
              display: { xs: "none", sm: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              marginLeft: 20,
              color: "inherit",
            }}
          >
            Login
          </Button>
          <Cart />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default navbar;
