import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import StyledLink from "../StyledLink/StyledLink";
import KiKi_film from "../../assets/imgs/Kiki_film.jpg";
import Totoro_film from "../../assets/imgs/Totoro_film.jpg";
import Moving_castle from "../../assets/imgs/Moving_castle.webp";

const images = [
   {
      url: KiKi_film,
      title: "Kiki's Delivery Service",
      width: "30%",
      movieId: 4,
   },
   {
      url: Totoro_film,
      title: "My Neighbor Totoro",
      width: "40%",
      movieId: 1,
   },
   {
      url: Moving_castle,
      title: "Howl's Moving Castle",
      width: "30%",
      movieId: 3,
   },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
   position: "relative",
   height: 200,
   [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
   },
   "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
         opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
         opacity: 0,
      },
      "& .MuiTypography-root": {
         border: "4px solid currentColor",
      },
   },
}));

const ImageSrc = styled("span")({
   position: "absolute",
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   backgroundSize: "cover",
   backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
   position: "absolute",
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
   position: "absolute",
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   backgroundColor: theme.palette.common.black,
   opacity: 0.4,
   transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
   height: 3,
   width: 18,
   backgroundColor: theme.palette.common.white,
   position: "absolute",
   bottom: -2,
   left: "calc(50% - 9px)",
   transition: theme.transitions.create("opacity"),
}));

export default function OtherMovies() {
   return (
      <Box>
         <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", mt: 4 }}
         >
            Other Movies
         </Typography>
         <Box
            sx={{
               display: "flex",
               flexWrap: "wrap",
               minWidth: 300,
               width: "100%",
            }}
         >
            {images.map((image) => (
               <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                     width: image.width,
                  }}
               >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                     <StyledLink path={`/products-by-movie/${image.movieId}`}>
                        <Typography
                           component="span"
                           variant="subtitle1"
                           color="inherit"
                           sx={(theme) => ({
                              position: "relative",
                              p: 4,
                              pt: 2,
                              pb: `calc(${theme.spacing(1)} + 6px)`,
                           })}
                        >
                           {image.title}
                           <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                     </StyledLink>
                  </Image>
               </ImageButton>
            ))}
         </Box>
      </Box>
   );
}
