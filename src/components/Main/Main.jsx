import * as React from "react";

import Box from "@mui/material/Box";

import Articulo1 from "./Articulos/Articulo1";
import Bienvenida from "./Bienvenida/Bienvenida";
import Separador from "./Separador/Separador";

function Main() {
  return (
    <Box
      sx={{ alignItems: "center" }}
      backgroundColor="#666"
      minHeight="100vh"
      minWidth="100%"
    >
      <Bienvenida />
      <Separador seccion="Sección Resina" />
      <Articulo1 title="Ceniceros" description="algo" />
      <Articulo1 title="Lapiceras" description="algo" />
      <Articulo1 title="Dijes," description="algo" />
      <Articulo1 title="pulseras" description="algo" />
      <Articulo1 title="tablas" description="algo" />
      <Separador seccion="Galeria" />
    </Box>
  );
}

export default Main;
