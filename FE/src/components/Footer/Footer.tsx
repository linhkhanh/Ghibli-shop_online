import { Box } from "@mui/material";

const Footer = () => {
   return (
      <footer>
         <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={8}
            sx={{
               backgroundColor: "#2E8B57",
               color: "#FFFFFF",
               padding: "40px 20px",
            }}
         >
            {/* Column 1: Shop Name & Description */}
            <div className="flex flex-col space-y-4">
               <h2 className="text-2xl font-bold text-[#FFD700] uppercase tracking-wider">
                  Ghibli Magic Shop
               </h2>
               <p className="text-gray-300 text-sm leading-relaxed">
                  Mang phép màu từ những bộ phim hoạt hình huyền thoại đến với
                  không gian sống của bạn. Chúng tôi cung cấp các sản phẩm chính
                  hãng lấy cảm hứng từ Studio Ghibli.
               </p>
            </div>

            {/* Column 2: Shop Info (Links) */}
            <div className="flex flex-col space-y-4">
               <h3 className="text-lg font-semibold text-[#ADFF2F]">
                  Thông Tin Cửa Hàng
               </h3>
               <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                     <a href="/about" className="hover:text-white transition">
                        Giới thiệu
                     </a>
                  </li>
                  <li>
                     <a href="/policy" className="hover:text-white transition">
                        Chính sách bảo mật
                     </a>
                  </li>
                  <li>
                     <a
                        href="/shipping"
                        className="hover:text-white transition"
                     >
                        Giao hàng & Đổi trả
                     </a>
                  </li>
                  <li>
                     <a href="/contact" className="hover:text-white transition">
                        Liên hệ hỗ trợ
                     </a>
                  </li>
               </ul>
            </div>

            {/* Column 3: Shop Location & Contact */}
            <div className="flex flex-col space-y-4">
               <h3 className="text-lg font-semibold text-[#ADFF2F]">
                  Vị Trí & Liên Hệ
               </h3>
               <div className="text-sm text-gray-300 space-y-3">
                  <p className="flex items-start">
                     <span className="mr-2">📍</span>
                     123 Đường Phép Màu, Quận Hoàn Kiếm, Hà Nội, Việt Nam
                  </p>
                  <p className="flex items-center">
                     <span className="mr-2">📞</span>
                     +84 (0) 9xx xxx xxx
                  </p>
                  <p className="flex items-center">
                     <span className="mr-2">✉️</span>
                     support@ghiblimagic.com
                  </p>
               </div>
            </div>
         </Box>

         {/* Bottom Copyright Bar */}
         <Box className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
            <p>
               © 2026 Ghibli Magic Shop. All rights reserved. Designed with ❤️
               for Ghibli fans.
            </p>
         </Box>
      </footer>
   );
};

export default Footer;
