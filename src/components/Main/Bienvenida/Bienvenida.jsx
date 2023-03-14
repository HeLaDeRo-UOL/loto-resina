import { Typography } from "@mui/material";

function Bienvenida() {
  return (
    <Typography
      sx={{
        minWidth: 100,
        minHeight: 550,
        alignItems: "center",
        paddingTop: 10,
      }}
      variant="h1"
    >
      Bienvenido
    </Typography>
  );
}

export default Bienvenida;
