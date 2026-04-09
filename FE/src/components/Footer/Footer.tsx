import { Box, Typography, Link, Stack } from "@mui/material";

const Footer = () => {
   return (
      <footer>
         <Box
            sx={{
               backgroundColor: "#1976d2",
               color: "#fff",
               px: 3,
               py: 5,
            }}
         >
            <Stack
               direction={{ xs: "column", md: "row" }}
               spacing={8}
               justifyContent="space-between"
               alignItems={{ xs: "center", md: "flex-start" }}
               maxWidth={1200}
               mx="auto"
            >
               {/* Shop Name & Description */}
               <Box>
                  <Typography
                     variant="h5"
                     sx={{
                        color: "#FFD700",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: 2,
                     }}
                     gutterBottom
                  >
                     Ghibli Magic Shop
                  </Typography>
                  <Typography
                     variant="body2"
                     sx={{ color: "#e3f2fd", maxWidth: 320 }}
                  >
                     Mang phép màu từ những bộ phim hoạt hình huyền thoại đến
                     với không gian sống của bạn. Chúng tôi cung cấp các sản
                     phẩm chính hãng lấy cảm hứng từ Studio Ghibli.
                  </Typography>
               </Box>

               {/* Shop Info Links */}
               <Box>
                  <Typography
                     variant="subtitle1"
                     sx={{ color: "#ADFF2F", fontWeight: 600 }}
                     gutterBottom
                  >
                     Thông Tin Cửa Hàng
                  </Typography>
                  <Stack spacing={1}>
                     <Link href="/about" underline="hover" color="#e3f2fd">
                        Giới thiệu
                     </Link>
                     <Link href="/policy" underline="hover" color="#e3f2fd">
                        Chính sách bảo mật
                     </Link>
                     <Link href="/shipping" underline="hover" color="#e3f2fd">
                        Giao hàng & Đổi trả
                     </Link>
                     <Link href="/contact" underline="hover" color="#e3f2fd">
                        Liên hệ hỗ trợ
                     </Link>
                  </Stack>
               </Box>

               {/* Shop Address & Contact */}
               <Box>
                  <Typography
                     variant="subtitle1"
                     sx={{ color: "#ADFF2F", fontWeight: 600 }}
                     gutterBottom
                  >
                     Vị Trí & Liên Hệ
                  </Typography>
                  <Stack spacing={1} sx={{ color: "#e3f2fd" }}>
                     <Box display="flex" alignItems="flex-start">
                        <span style={{ marginRight: 8 }}>📍</span>
                        123 Đường Phép Màu, Quận Hoàn Kiếm, Hà Nội, Việt Nam
                     </Box>
                     <Box display="flex" alignItems="center">
                        <span style={{ marginRight: 8 }}>📞</span>
                        +84 (0) 9xx xxx xxx
                     </Box>
                     <Box display="flex" alignItems="center">
                        <span style={{ marginRight: 8 }}>✉️</span>
                        support@ghiblimagic.com
                     </Box>
                  </Stack>
               </Box>
            </Stack>
         </Box>
         <Box
            sx={{
               maxWidth: 1200,
               mx: "auto",
               mt: 4,
               pt: 3,
               borderTop: "1px solid #90caf9",
               textAlign: "center",
               color: "#bdbdbd",
               fontSize: 13,
            }}
         >
            <Typography>
               © 2026 Ghibli Magic Shop. All rights reserved. Designed with ❤️
               for Ghibli fans.
            </Typography>
         </Box>
      </footer>
   );
};

export default Footer;
