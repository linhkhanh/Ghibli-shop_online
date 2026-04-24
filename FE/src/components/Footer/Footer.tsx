import { Box, Typography, Link, Stack } from "@mui/material";

const Footer = () => {
   return (
      <footer>
         <Box
            sx={{
               backgroundColor: "#1976d2",
               color: "#fff",
               px: 3,
               py: 5,
            }}
         >
            <Stack
               direction={{ xs: "column", md: "row" }}
               spacing={8}
               justifyContent="space-between"
               alignItems={{ xs: "center", md: "flex-start" }}
               maxWidth={1200}
               mx="auto"
            >
               <Box>
                  <Typography
                     variant="h5"
                     sx={{
                        color: "#FFD700",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: 2,
                     }}
                     gutterBottom
                  >
                     MyGhibli
                  </Typography>
                  <Typography
                     variant="body2"
                     sx={{ color: "#e3f2fd", maxWidth: 320 }}
                  >
                     Bring the magic of Studio Ghibli to your doorstep with our
                     exclusive collection of merchandise inspired by your
                     favorite films.
                  </Typography>
               </Box>

               {/* Shop Info Links */}
               <Box>
                  <Typography
                     variant="subtitle1"
                     sx={{ color: "#ADFF2F", fontWeight: 600 }}
                     gutterBottom
                  >
                     Our Shop
                  </Typography>
                  <Stack spacing={1}>
                     <Link href="/about" underline="hover" color="#e3f2fd">
                        About Us
                     </Link>
                     <Link href="/policy" underline="hover" color="#e3f2fd">
                        Privacy Policy
                     </Link>
                     <Link href="/shipping" underline="hover" color="#e3f2fd">
                        Shipping & Returns
                     </Link>
                     <Link href="/contact" underline="hover" color="#e3f2fd">
                        Contact Us
                     </Link>
                  </Stack>
               </Box>

               {/* Shop Address & Contact */}
               <Box>
                  <Typography
                     variant="subtitle1"
                     sx={{ color: "#ADFF2F", fontWeight: 600 }}
                     gutterBottom
                  >
                     Location
                  </Typography>
                  <Stack spacing={1} sx={{ color: "#e3f2fd" }}>
                     <Box display="flex" alignItems="flex-start">
                        <span style={{ marginRight: 8 }}>📍</span>
                        123 Ghibli Lane, Singapore
                     </Box>
                     <Box display="flex" alignItems="center">
                        <span style={{ marginRight: 8 }}>📞</span>
                        +81 (0) 3-1234-5678
                     </Box>
                     <Box display="flex" alignItems="center">
                        <span style={{ marginRight: 8 }}>✉️</span>
                        support@ghiblimagic.com
                     </Box>
                  </Stack>
               </Box>
            </Stack>
         </Box>
         <Box
            sx={{
               maxWidth: 1200,
               mx: "auto",
               mt: 4,
               pt: 3,
               borderTop: "1px solid #90caf9",
               textAlign: "center",
               color: "#bdbdbd",
               fontSize: 13,
            }}
         >
            <Typography>
               © 2026 Ghibli Magic Shop. All rights reserved. Designed with ❤️
               for Ghibli fans.
            </Typography>
         </Box>
      </footer>
   );
};

export default Footer;
