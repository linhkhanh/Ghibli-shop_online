import { Box, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import type { SxProps, Theme } from "@mui/material/styles";
import StyledLink from "../StyledLink/StyledLink";

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
      <StyledLink path="/">
         <Box display="flex" alignItems="center">
            <Logo />
            <Typography variant="h6" noWrap sx={shopNameStyle}>
               MyGhibli
            </Typography>
         </Box>
      </StyledLink>
   );
};

export default ShopNameLink;
