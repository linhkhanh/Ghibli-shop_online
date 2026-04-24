import { Box, Typography, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import { useEffect, useRef, useState } from "react";

const BackDrop = () => {
   const [showInfo, setShowInfo] = useState(true);
   const lastScrollY = useRef(window.scrollY);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         if (currentScrollY < lastScrollY.current) {
            setShowInfo(true); // Scrolling up
         } else if (currentScrollY > lastScrollY.current) {
            setShowInfo(false); // Scrolling down
         }
         lastScrollY.current = currentScrollY;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <Box
         sx={{
            width: "100%",
            height: "600px",
            backgroundImage: `url(https://wallpapercat.com/w/full/1/d/e/128960-1920x1080-desktop-full-hd-my-neighbor-totoro-wallpaper-photo.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
         }}
      >
         <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            sx={{
               position: "absolute",
               bottom: 32,
               left: 0,
               width: "100%",
               justifyContent: "center",
               alignItems: "center",
               zIndex: 2,
               opacity: showInfo ? 1 : 0,
               transition: "opacity 0.4s",
               pointerEvents: showInfo ? "auto" : "none",
            }}
         >
            <Box
               sx={{
                  bgcolor: "rgba(255,255,255,0.85)",
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  boxShadow: 2,
                  minWidth: 220,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <LocalShippingIcon
                  color="primary"
                  sx={{ fontSize: 36, mb: 1 }}
               />
               <Typography variant="h6" color="primary" fontWeight={700}>
                  Free shipping
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  For orders over $50
               </Typography>
            </Box>
            <Box
               sx={{
                  bgcolor: "rgba(255,255,255,0.85)",
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  boxShadow: 2,
                  minWidth: 220,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
               }}
            >
               <ReplayIcon color="primary" sx={{ fontSize: 36, mb: 1 }} />
               <Typography variant="h6" color="primary" fontWeight={700}>
                  30-Day Return
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Return within 30 days for a full refund
               </Typography>
            </Box>
         </Stack>
      </Box>
   );
};

export default BackDrop;
