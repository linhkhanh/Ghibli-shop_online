-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 14, 2026 lúc 04:11 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `CART`
--

CREATE TABLE `CART` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `CART`
--

INSERT INTO `CART` (`cart_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2026-04-12 19:28:56', NULL),
(2, 2, '2026-04-12 19:28:56', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `CART_ITEM`
--

CREATE TABLE `CART_ITEM` (
  `cart_item_id` int(11) NOT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `selected` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `CART_ITEM`
--

INSERT INTO `CART_ITEM` (`cart_item_id`, `cart_id`, `product_id`, `quantity`, `unit_price`, `selected`, `created_at`, `updated_at`) VALUES
(6, 1, 11, 2, 29.99, 1, NULL, NULL),
(7, 1, 12, 1, 19.99, 1, NULL, NULL),
(8, 1, 13, 3, 24.99, 1, NULL, NULL),
(9, 2, 14, 1, 14.99, 1, NULL, NULL),
(10, 2, 15, 1, 39.99, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `CATEGORY`
--

CREATE TABLE `CATEGORY` (
  `category_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `CATEGORY`
--

INSERT INTO `CATEGORY` (`category_id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'My Neighbor Totoro', '2026-04-12 11:58:33', NULL, NULL),
(2, 'Spirited Away', '2026-04-12 11:58:33', NULL, NULL),
(3, 'Princess Mononoke', '2026-04-12 11:58:33', NULL, NULL),
(4, 'Howl\'s Moving Castle', '2026-04-12 11:58:33', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ORDER`
--

CREATE TABLE `ORDER` (
  `order_id` int(11) NOT NULL,
  `order_code` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `shipping_fee` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `shipping_address` text DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ORDER`
--

INSERT INTO `ORDER` (`order_id`, `order_code`, `user_id`, `total_price`, `shipping_fee`, `status`, `payment_status`, `shipping_address`, `phone`, `note`, `created_at`, `updated_at`) VALUES
(1, 'ORD001', 1, 59.98, 30000.00, 'delivered', 'paid', NULL, NULL, NULL, '2026-04-12 19:41:30', NULL),
(2, 'ORD002', 2, 24.99, 30000.00, 'shipped', 'pending', NULL, NULL, NULL, '2026-04-12 19:41:30', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ORDER_ITEM`
--

CREATE TABLE `ORDER_ITEM` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ORDER_ITEM`
--

INSERT INTO `ORDER_ITEM` (`order_item_id`, `order_id`, `product_id`, `quantity`, `price`, `discount`) VALUES
(7, 1, 11, 2, 29.99, 10.00),
(8, 2, 12, 1, 19.99, 0.00);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PAYMENT`
--

CREATE TABLE `PAYMENT` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `failure_reason` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `paid_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `PAYMENT`
--

INSERT INTO `PAYMENT` (`payment_id`, `order_id`, `amount`, `payment_method`, `transaction_id`, `status`, `failure_reason`, `created_at`, `updated_at`, `paid_at`) VALUES
(4, 1, 59.98, 'COD', NULL, 'completed', NULL, '2026-04-12 19:48:36', NULL, NULL),
(5, 2, 24.99, 'BANKING', NULL, 'pending', NULL, '2026-04-12 19:48:36', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PRODUCT`
--

CREATE TABLE `PRODUCT` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sku` varchar(100) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `PRODUCT`
--

INSERT INTO `PRODUCT` (`product_id`, `name`, `sku`, `slug`, `price`, `description`, `is_active`, `stock`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(11, 'Totoro Plush Toy', 'SKU001', 'totoro-plush-toy', 29.99, 'A soft and cuddly Totoro plush toy.', 1, 0, 1, '2026-04-12 18:37:08', NULL, NULL),
(12, 'Spirited Away Art Book', 'SKU002', 'spirited-away-art-book', 19.99, 'A beautiful art book featuring scenes from Spirited Away.', 1, 0, 2, '2026-04-12 18:37:08', NULL, NULL),
(13, 'My Neighbor Totoro T-Shirt', 'SKU003', 'totoro-tshirt', 24.99, 'A stylish T-shirt with a Totoro design.', 1, 0, 1, '2026-04-12 18:37:08', NULL, NULL),
(14, 'Princess Mononoke Poster', 'SKU004', 'mononoke-poster', 14.99, 'A high-quality poster.', 1, 0, 3, '2026-04-12 18:37:08', NULL, NULL),
(15, 'Howl\'s Moving Castle Figurine', 'SKU005', 'howl-figurine', 39.99, 'A detailed figurine.', 1, 0, 4, '2026-04-12 18:37:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PRODUCT_IMAGE`
--

CREATE TABLE `PRODUCT_IMAGE` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `PRODUCT_IMAGE`
--

INSERT INTO `PRODUCT_IMAGE` (`product_image_id`, `product_id`, `image_url`, `is_primary`) VALUES
(5, 11, 'https://enez76gwp29.exactdn.com/wp-content/uploads/2020/04/productimage208903327_2nd.jpg?strip=all&lossy=1&ssl=1', 1),
(6, 12, 'https://www.japan-experience.com/sites/default/files/styles/scale_crop_480x250/public/legacy/japan_experience/1497286956997.jpg.webp?h=ddb1ad0c&itok=BAVNd_Zu', 1),
(7, 13, 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1200,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/539787-c-1988-studio-ghibli-1-99691298d234359b7ea9eccc5925b9f3.jpg', 1),
(8, 14, 'https://i.redd.it/ovfk3xy2o4q51.jpg', 1),
(9, 15, 'https://m.media-amazon.com/images/I/91400JsaK4L._AC_UF1000,1000_QL80_.jpg', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `PRODUCT_VIDEO`
--

CREATE TABLE `PRODUCT_VIDEO` (
  `product_video_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `PRODUCT_VIDEO`
--

INSERT INTO `PRODUCT_VIDEO` (`product_video_id`, `product_id`, `video_url`) VALUES
(1, 11, 'video1.mp4'),
(2, 12, 'video2.mp4'),
(3, 13, 'video3.mp4'),
(4, 14, 'video4.mp4'),
(5, 15, 'video5.mp4');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `USER`
--

CREATE TABLE `USER` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `USER`
--

INSERT INTO `USER` (`user_id`, `name`, `email`, `password`, `phone`, `address`, `role`, `status`, `created_at`, `updated_at`, `deleted_at`, `last_login`) VALUES
(1, 'Kay', 'kay@gmail.com', '123456', '0123456789', 'Binh Duong', 'user', 'active', '2026-04-12 11:27:38', NULL, NULL, NULL),
(2, 'Admin', 'admin@gmail.com', 'admin123', '0987654321', 'Ho Chi Minh', 'admin', 'active', '2026-04-12 11:27:38', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `WISHLIST`
--

CREATE TABLE `WISHLIST` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `WISHLIST`
--

INSERT INTO `WISHLIST` (`user_id`, `product_id`, `created_at`) VALUES
(1, 11, '2026-04-12 19:25:39');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `CART`
--
ALTER TABLE `CART`
  ADD PRIMARY KEY (`cart_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `CART_ITEM`
--
ALTER TABLE `CART_ITEM`
  ADD PRIMARY KEY (`cart_item_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `CATEGORY`
--
ALTER TABLE `CATEGORY`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `ORDER`
--
ALTER TABLE `ORDER`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `ORDER_ITEM`
--
ALTER TABLE `ORDER_ITEM`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `PAYMENT`
--
ALTER TABLE `PAYMENT`
  ADD PRIMARY KEY (`payment_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `PRODUCT`
--
ALTER TABLE `PRODUCT`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `sku` (`sku`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `PRODUCT_IMAGE`
--
ALTER TABLE `PRODUCT_IMAGE`
  ADD PRIMARY KEY (`product_image_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `PRODUCT_VIDEO`
--
ALTER TABLE `PRODUCT_VIDEO`
  ADD PRIMARY KEY (`product_video_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `WISHLIST`
--
ALTER TABLE `WISHLIST`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `CART`
--
ALTER TABLE `CART`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `CART_ITEM`
--
ALTER TABLE `CART_ITEM`
  MODIFY `cart_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `CATEGORY`
--
ALTER TABLE `CATEGORY`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `ORDER`
--
ALTER TABLE `ORDER`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `ORDER_ITEM`
--
ALTER TABLE `ORDER_ITEM`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `PAYMENT`
--
ALTER TABLE `PAYMENT`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `PRODUCT`
--
ALTER TABLE `PRODUCT`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `PRODUCT_IMAGE`
--
ALTER TABLE `PRODUCT_IMAGE`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `PRODUCT_VIDEO`
--
ALTER TABLE `PRODUCT_VIDEO`
  MODIFY `product_video_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `USER`
--
ALTER TABLE `USER`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `CART`
--
ALTER TABLE `CART`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `USER` (`user_id`);

--
-- Các ràng buộc cho bảng `CART_ITEM`
--
ALTER TABLE `CART_ITEM`
  ADD CONSTRAINT `cart_item_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `CART` (`cart_id`),
  ADD CONSTRAINT `cart_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`product_id`);

--
-- Các ràng buộc cho bảng `ORDER`
--
ALTER TABLE `ORDER`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `USER` (`user_id`);

--
-- Các ràng buộc cho bảng `ORDER_ITEM`
--
ALTER TABLE `ORDER_ITEM`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ORDER` (`order_id`),
  ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`product_id`);

--
-- Các ràng buộc cho bảng `PAYMENT`
--
ALTER TABLE `PAYMENT`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `ORDER` (`order_id`);

--
-- Các ràng buộc cho bảng `PRODUCT`
--
ALTER TABLE `PRODUCT`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `CATEGORY` (`category_id`);

--
-- Các ràng buộc cho bảng `PRODUCT_IMAGE`
--
ALTER TABLE `PRODUCT_IMAGE`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`product_id`);

--
-- Các ràng buộc cho bảng `PRODUCT_VIDEO`
--
ALTER TABLE `PRODUCT_VIDEO`
  ADD CONSTRAINT `product_video_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`product_id`);

--
-- Các ràng buộc cho bảng `WISHLIST`
--
ALTER TABLE `WISHLIST`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `USER` (`user_id`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `PRODUCT` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
