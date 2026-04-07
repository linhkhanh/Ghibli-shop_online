import { Box, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import type { SxProps, Theme } from "@mui/material/styles";

const linkStyle: React.CSSProperties = {
   textDecoration: "none",
   color: "inherit",
};

const shopNameStyle: SxProps<Theme> = {
   mr: 2,
   display: { xs: "none", md: "flex" },
   fontFamily: "monospace",
   fontWeight: 700,
   letterSpacing: ".3rem",
   ":hover": {
      color: "#1976d2",
   },
};

const ShopNameLink = () => {
   return (
      <Link to="/" style={linkStyle}>
         <Box display="flex" alignItems="center">
            <Logo />
            <Typography variant="h6" noWrap sx={shopNameStyle}>
               MyGhibli
            </Typography>
         </Box>
      </Link>
   );
};

export default ShopNameLink;
