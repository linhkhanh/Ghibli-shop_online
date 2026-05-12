import {
   Box,
   Typography,
   Paper,
   List,
   ListItem,
   ListItemText,
} from "@mui/material";

const ShippingTermPage = () => {
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
               Shipping & Return Terms
            </Typography>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 2, mb: 1 }}>
               Delivery Terms
            </Typography>
            <List>
               <ListItem>
                  <ListItemText primary="Free shipping for orders from $50 and above." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="A flat delivery fee of $20 applies to orders under $50." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Orders are processed within 1-2 business days after payment confirmation." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Estimated delivery time: 3-7 business days depending on your location." />
               </ListItem>
            </List>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
               Return Policy
            </Typography>
            <List>
               <ListItem>
                  <ListItemText primary="30-day return policy: Items can be returned within 30 days of receipt for a full refund." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Returned items must be unused, in original packaging, and in resalable condition." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Return shipping costs are the responsibility of the customer, unless the item is defective or incorrect." />
               </ListItem>
               <ListItem>
                  <ListItemText primary="To initiate a return, please contact our customer service with your order details." />
               </ListItem>
            </List>
            <Typography
               variant="body2"
               color="text.secondary"
               sx={{ textAlign: "center", mt: 3 }}
            >
               For any questions regarding shipping or returns, please contact
               us at support@myghibli.com.
            </Typography>
         </Paper>
      </Box>
   );
};

export default ShippingTermPage;
