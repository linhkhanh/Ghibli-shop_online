import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Box, Typography, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import { useEffect, useRef, useState } from "react";
import backdrop1 from "../../assets/imgs/backdrop1.jpg";
import backdrop2 from "../../assets/imgs/backdrop2.jpg";
import backdrop3 from "../../assets/imgs/backdrop3.jpg";
import backdrop4 from "../../assets/imgs/backdrop4.jpg";
import backdrop5 from "../../assets/imgs/backdrop5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BackDropCarousel = () => {
   const slides = [
      {
         id: 1,
         image: backdrop1,
         title: "My Neighbor Totoro",
         subtitle: "Discover the magic of the forest.",
      },
      {
         id: 2,
         image: backdrop2,
         title: "Spirited Away",
         subtitle: "A journey beyond your imagination.",
      },
      {
         id: 3,
         image: backdrop3,
         title: "Spirited Away",
         subtitle: "A journey beyond your imagination.",
      },
      {
         id: 4,
         image: backdrop4,
         title: "Spirited Away",
         subtitle: "A journey beyond your imagination.",
      },
      {
         id: 5,
         image: backdrop5,
         title: "Spirited Away",
         subtitle: "A journey beyond your imagination.",
      },
   ];

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
      <Swiper
         modules={[Autoplay, EffectFade, Navigation, Pagination]}
         effect="fade" // Smooth fade transition for Ghibli vibes
         speed={1000}
         autoplay={{ delay: 1000 }}
         loop={true}
         pagination={{ clickable: true }}
      >
         {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
               <Box
                  sx={{
                     width: "100%",
                     height: "600px",
                     backgroundImage: `url(${slide.image})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     position: "relative",
                  }}
               >
                  <Stack
                     direction="column"
                     spacing={2}
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
                     <Typography
                        variant="h6"
                        color="#fffde7"
                        fontWeight={900}
                        sx={{
                           textShadow:
                              "0 4px 24px #000, 0 2px 8px #a5d6a7, 0 0px 2px #fff",
                           letterSpacing: 2,
                           borderRadius: 3,
                           px: 4,
                           py: 2,
                           background:
                              "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                           boxShadow: 6,
                           fontFamily: "Montserrat, Arial, sans-serif",
                           textAlign: "center",
                           maxWidth: { xs: "90%", sm: "70%" },
                           transition: "border-color 0.3s",
                           cursor: "pointer",
                           "&:hover": {
                              boxShadow: "0 10px 20px rgba(0,0,0,0.9)",
                              backgroundColor: "rgba(255,255,255, 0.85)",
                              color: "rgb(25, 118, 210)",
                           },
                        }}
                     >
                        Discover fancy and cute merchandise - Specially designed
                        for Ghibli fans
                     </Typography>
                     <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={4}
                        sx={{
                           width: "100%",
                           justifyContent: "center",
                           alignItems: "center",
                        }}
                     >
                        <Box
                           sx={{
                              bgcolor: "rgba(255,255,255,0.85)",
                              px: 4,
                              p: 2,
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
                           <Typography
                              variant="h6"
                              color="primary"
                              fontWeight={700}
                           >
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
                           <ReplayIcon
                              color="primary"
                              sx={{ fontSize: 36, mb: 1 }}
                           />
                           <Typography
                              variant="h6"
                              color="primary"
                              fontWeight={700}
                           >
                              30-Day Return
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Return within 30 days for a full refund
                           </Typography>
                        </Box>
                     </Stack>
                  </Stack>
               </Box>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default BackDropCarousel;
