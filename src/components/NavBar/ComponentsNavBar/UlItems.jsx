import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import HomeIcon from "@mui/icons-material/Home";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Ulitems = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        variant="h6"
        component="div"
        width={300}
        marginLeft={5}
        marginRight={5}
        sx={{
          mr: 2,
          display: { xs: "flex", sm: "flex" },
          fontFamily: "monospace",
          fontWeight: 300,
          alignItems: "center",
          color: "inherit",
          gap: 10,
        }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Inicio
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          
        >
          Galeria
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
          
        >
          Resina
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Ulitems;
