import { Box, Typography, Paper } from "@mui/material";

const AboutUs = () => {
   return (
      <Box sx={{ maxWidth: 700, mx: "auto", mt: 6, mb: 6 }}>
         <Paper
            elevation={3}
            sx={{
               p: 4,
               borderRadius: 4,
               background: "linear-gradient(90deg, #e3f2fd 0%, #fffde7 100%)",
            }}
         >
            <Typography
               variant="h4"
               fontWeight={900}
               color="primary"
               gutterBottom
               sx={{ textAlign: "center", mb: 2 }}
            >
               About MyGhibli Shop
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: 18 }}>
               <b>MyGhibli Shop</b> was established in 2024 with a passion for
               bringing the magic of Studio Ghibli to fans everywhere. Our shop
               specializes in offering a wide range of officially licensed and
               uniquely designed merchandise inspired by beloved Ghibli movies.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: 18 }}>
               From plush toys, apparel, and accessories to home decor and
               collectibles, every item is carefully curated to delight Ghibli
               enthusiasts of all ages. Whether you're a fan of Totoro, Spirited
               Away, or any other Ghibli classic, you'll find something special
               at MyGhibli Shop.
            </Typography>
            <Typography
               variant="body2"
               color="text.secondary"
               sx={{ textAlign: "center", mt: 3 }}
            >
               Thank you for supporting our small business and sharing the
               Ghibli spirit with us!
            </Typography>
         </Paper>
      </Box>
   );
};

export default AboutUs;
