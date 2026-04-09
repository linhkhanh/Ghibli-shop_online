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
            Ghibli Magic Shop
         </Typography>
         <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            123 Magic Street, Hoàn Kiếm, Hà Nội, Việt Nam
         </Typography>
         <Box sx={{ mb: 4, borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
            <iframe
               title="Ghibli Magic Shop Location"
               src="https://maps.google.com/maps?q=123%20Magic%20Street%20Hanoi&t=&z=14&ie=UTF8&iwloc=&output=embed"
               width="100%"
               height="300"
               style={{ border: 0 }}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            />
         </Box>
         <Stack spacing={2}>
            <Link href="/about" underline="hover" color="primary">
               Giới thiệu
            </Link>
            <Link href="/policy" underline="hover" color="primary">
               Chính sách bảo mật
            </Link>
            <Link href="/shipping" underline="hover" color="primary">
               Giao hàng & Đổi trả
            </Link>
            <Link href="/" underline="hover" color="primary">
               Quay về Trang chủ
            </Link>
         </Stack>
      </Box>
   );
};

export default ContactPage;
