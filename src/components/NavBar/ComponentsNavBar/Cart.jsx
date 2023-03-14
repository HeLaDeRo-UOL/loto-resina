import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const cart = () => {
  return (
    <IconButton aria-label="cart" sx={{
      marginLeft: 8,
      minWidth: 100,
      display: "flex",
    }}>
      <StyledBadge badgeContent={0} color="secondary"
      >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default cart;
