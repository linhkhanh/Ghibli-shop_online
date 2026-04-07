import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
   {
      url: "https://images6.alphacoders.com/135/thumb-350-1354046.webp",
      title: "Breakfast",
      width: "40%",
   },
   {
      url: "https://wallup.net/wp-content/uploads/2016/05/14/40836-Studio_Ghibli-My_Neighbor_Totoro-Totoro.jpg",
      title: "Burgers",
      width: "30%",
   },
   {
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6136ddf-a28c-4fa8-817b-3d8c029562c6/d2vr71f-5ba229e4-a54d-46c9-8bd8-16af313ff557.jpg/v1/fill/w_900,h_563,q_75,strp/totoro___wallpaper_7_by_kookookchoo_d2vr71f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6Ii9mL2I2MTM2ZGRmLWEyOGMtNGZhOC04MTdiLTNkOGMwMjk1NjJjNi9kMnZyNzFmLTViYTIyOWU0LWE1NGQtNDZjOS04YmQ4LTE2YWYzMTNmZjU1Ny5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YfyNocu0LI7iZf-Gdg8GvU3F12S1garFqvm4gJPNHjI",
      title: "Camera",
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

export default function RelatedProducts() {
   return (
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
               </Image>
            </ImageButton>
         ))}
      </Box>
   );
}
