import { Typography } from "@mui/material";
import React from "react";

const Separador = (props) => {
  return (
    <Typography
      sx={{
        minHeight: 50,
        minWidth: 100,
        backgroundColor: "#888",
        alignItems: "center",
        border: "2px solid black",
        marginTop: 1,
        marginBottom: 1,
      }}
      variant="h5"
    >
      {props.seccion}
    </Typography>
  );
};

export default Separador;
