import { Box, Typography } from "@mui/material";
import BackDrop from "../../components/BackDrop/BackDrop";
import ProductsListByMovie from "../../components/ProductsListByMovie/ProductsListByMovie";

const LandingPage = () => {
   return (
      <div className="animate-fadeIn">
         <BackDrop />
         <Box sx={{ display: "flex", justifyContent: "center", pt: 3 }}>
            <Typography
               variant="h4"
               component="h2"
               gutterBottom
               sx={{
                  fontWeight: 900,
                  color: "#1976d2",
                  textShadow: "0 2px 12px #90caf9, 0 0px 2px #fff",
                  letterSpacing: 2,
                  textAlign: "center",
                  fontFamily: "Montserrat, Arial, sans-serif",
                  background:
                     "linear-gradient(90deg, #e3f2fd 0%, #fffde7 100%)",
                  borderRadius: 3,
                  p: 3,
                  display: "inline-block",
                  mx: "auto",
                  boxShadow: 3,
               }}
            >
               Top picks for you
            </Typography>
         </Box>
         <ProductsListByMovie movieId={1} key={1} />
         <ProductsListByMovie movieId={5} key={5} />
         <ProductsListByMovie movieId={3} key={3} />
      </div>
   );
};

export default LandingPage;
