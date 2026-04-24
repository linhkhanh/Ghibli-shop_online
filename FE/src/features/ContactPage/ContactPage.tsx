import { Box, Typography, Link, Stack } from "@mui/material";

const ContactPage = () => {
   return (
      <Box sx={{ maxWidth: 600, mx: "auto", py: 8, px: 2 }}>
         <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
         >
            MyGhibli
         </Typography>
         <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Contact us at support@ghiblimagic.com or visit one of our shop
            locations below:
         </Typography>
         <Box sx={{ mb: 4, borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
            <iframe
               title="Ghibli Magic Shop Singapore Location"
               src="https://maps.google.com/maps?q=123%20Ghibli%20Lane%20Singapore&t=&z=14&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="300"
               style={{ border: 0 }}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
         </Box>
         <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
               Shop Locations
            </Typography>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
               <li>
                  <Typography variant="body2">
                     <b>Singapore:</b> 123 Ghibli Lane, Singapore | +65 6123
                     4567
                  </Typography>
               </li>
               <li>
                  <Typography variant="body2">
                     <b>Tokyo:</b> 456 Totoro Ave, Tokyo, Japan | +81 (0)
                     3-1234-5678
                  </Typography>
               </li>
               <li>
                  <Typography variant="body2">
                     <b>Hanoi:</b> 123 Magic Street, Hanoi, Vietnam | +84 24
                     1234 5678
                  </Typography>
               </li>
            </ul>
         </Box>
         <Stack spacing={2}>
            <Link href="/about" underline="hover" color="primary">
               Introduction
            </Link>
            <Link href="/policy" underline="hover" color="primary">
               Policy and Terms
            </Link>
            <Link href="/shipping" underline="hover" color="primary">
               Shipping & Returns
            </Link>
            <Link href="/" underline="hover" color="primary">
               Back to Home
            </Link>
         </Stack>
      </Box>
   );
};

export default ContactPage;
