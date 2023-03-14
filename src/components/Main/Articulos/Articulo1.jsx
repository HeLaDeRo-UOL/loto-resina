import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Articulo1(props) {
  return (
    <Card sx={{ maxWidth: 345, display: "box" }}>
      <CardMedia
        sx={{ height: 140, display: "flex" }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={'/ItemDetail/${element.id}'}> //configurar element para que navege a dicho elemento y usar backtics //
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Articulo1;
