import { Box } from "@mui/material";

const BackDrop = () => {
   return (
      <Box
         sx={{
            width: "100%",
            height: "600px",
            backgroundImage: `url(https://wallpapercat.com/w/full/1/d/e/128960-1920x1080-desktop-full-hd-my-neighbor-totoro-wallpaper-photo.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      ></Box>
   );
};

export default BackDrop;
