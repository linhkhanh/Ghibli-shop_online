import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import StyledLink from "../StyledLink/StyledLink";

const images = [
   {
      url: "https://images6.alphacoders.com/135/thumb-350-1354046.webp",
      title: "My Neighbor Totoro",
      width: "30%",
   },
   {
      url: "https://wallup.net/wp-content/uploads/2016/05/14/40836-Studio_Ghibli-My_Neighbor_Totoro-Totoro.jpg",
      title: "Kiki's Delivery Service",
      width: "40%",
   },
   {
      url: "https://i.guim.co.uk/img/media/18e0b02b77238d312812c835c23144cc63baa86a/0_0_923_554/master/923.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c640a0f676e4a724c16e15624f4686a0",
      title: "Howl's Moving Castle",
      width: "30%",
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

const getMoviePath = (title: string) => {
   const formattedTitle = title.toLowerCase().split(" ");
   const movieId = formattedTitle
      .map((item) => item.split("'").join(""))
      .join("-");
   return `/products-by-movie/${movieId}`;
};

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
                     <StyledLink path={getMoviePath(image.title)}>
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
