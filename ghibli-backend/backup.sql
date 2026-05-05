-- MySQL dump 10.13  Distrib 8.4.8, for Linux (aarch64)
--
-- Host: localhost    Database: ghibli_backend
-- ------------------------------------------------------
-- Server version	8.4.8

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audit_logs`
--

DROP TABLE IF EXISTS `audit_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_logs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `record_id` bigint unsigned NOT NULL,
  `old_values` json DEFAULT NULL,
  `new_values` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `audit_logs_user_id_foreign` (`user_id`),
  CONSTRAINT `audit_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_logs`
--

LOCK TABLES `audit_logs` WRITE;
/*!40000 ALTER TABLE `audit_logs` DISABLE KEYS */;
INSERT INTO `audit_logs` VALUES (1,7,'updated','products',27,'{\"price\": 192.78, \"stock\": 45, \"title\": \"Totoro wallet\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Dolore voluptatem voluptatem a dolorem culpa. Eum optio pariatur odit omnis voluptas sed. Perferendis vitae pariatur excepturi inventore quam sint veritatis. Reprehenderit voluptas culpa repellendus dolor incidunt veniam.\"}','{\"price\": 15.00, \"stock\": 450, \"title\": \"Totoro wallet\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Dolore voluptatem voluptatem a dolorem culpa. Eum optio pariatur odit omnis voluptas sed. Perferendis vitae pariatur excepturi inventore quam sint veritatis. Reprehenderit voluptas culpa repellendus dolor incidunt veniam.\"}','2026-05-01 02:54:32','2026-05-01 02:54:32'),(2,7,'updated','orders',9,'{\"status\": \"shipped\"}','{\"status\": \"delivered\"}','2026-05-01 03:20:33','2026-05-01 03:20:33'),(3,NULL,'updated','products',38,'{\"price\": 192.85, \"stock\": 17, \"title\": \"Et qui nihil enim.\", \"discount\": 15.00, \"movie_id\": 4, \"description\": \"Placeat blanditiis qui ex consequatur et. Dolorem quos voluptas iure laudantium inventore voluptatem laudantium. At rerum repellat aperiam tempora. Sunt et est quia dicta et dolor. Excepturi amet nihil dolore delectus at.\"}','{\"price\": 192.85, \"stock\": 17, \"title\": \"Et qui nihil enim.\", \"discount\": 15.00, \"movie_id\": 4, \"description\": \"Placeat blanditiis qui ex consequatur et. Dolorem quos voluptas iure laudantium inventore voluptatem laudantium. At rerum repellat aperiam tempora. Sunt et est quia dicta et dolor. Excepturi amet nihil dolore delectus at.\"}','2026-05-02 11:54:52','2026-05-02 11:54:52'),(4,7,'updated','products',25,'{\"price\": 23.85, \"stock\": 19, \"title\": \"Kid bad\", \"discount\": 15.00, \"movie_id\": 3, \"description\": \"Voluptatem autem voluptatem sed est. Deserunt nostrum autem est aliquam quae iste. Sint doloribus dolor dolor et similique asperiores officia quia.\"}','{\"price\": 23.85, \"stock\": 19, \"title\": \"Kid bag\", \"discount\": 15.00, \"movie_id\": 3, \"description\": \"Voluptatem autem voluptatem sed est. Deserunt nostrum autem est aliquam quae iste. Sint doloribus dolor dolor et similique asperiores officia quia.\"}','2026-05-02 11:56:25','2026-05-02 11:56:25'),(5,NULL,'updated','products',30,'{\"price\": 127.68, \"stock\": 21, \"title\": \"Anime collection\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Qui voluptas amet totam error quo. Quia alias consequatur iure dolorem nam id. Deleniti id assumenda non blanditiis earum accusantium.\"}','{\"price\": 127.68, \"stock\": 20, \"title\": \"Anime collection\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Qui voluptas amet totam error quo. Quia alias consequatur iure dolorem nam id. Deleniti id assumenda non blanditiis earum accusantium.\"}','2026-05-02 11:57:15','2026-05-02 11:57:15'),(6,NULL,'updated','products',11,'{\"price\": 20.00, \"stock\": 300, \"title\": \"Calcifier\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Cute fire\"}','{\"price\": 20.00, \"stock\": 299, \"title\": \"Calcifier\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Cute fire\"}','2026-05-02 11:57:15','2026-05-02 11:57:15'),(7,NULL,'updated','products',17,'{\"price\": 175.35, \"stock\": 1, \"title\": \"Vitae similique ea quasi.\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Aut eveniet totam alias exercitationem sapiente necessitatibus ipsa. Cupiditate aut et velit quos voluptas. Quasi aut occaecati quae qui hic quaerat id. Nemo molestiae voluptas sed delectus.\"}','{\"price\": 175.35, \"stock\": 0, \"title\": \"Vitae similique ea quasi.\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Aut eveniet totam alias exercitationem sapiente necessitatibus ipsa. Cupiditate aut et velit quos voluptas. Quasi aut occaecati quae qui hic quaerat id. Nemo molestiae voluptas sed delectus.\"}','2026-05-02 11:57:15','2026-05-02 11:57:15'),(8,NULL,'updated','products',17,'{\"price\": 175.35, \"stock\": 0, \"title\": \"Vitae similique ea quasi.\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Aut eveniet totam alias exercitationem sapiente necessitatibus ipsa. Cupiditate aut et velit quos voluptas. Quasi aut occaecati quae qui hic quaerat id. Nemo molestiae voluptas sed delectus.\"}','{\"price\": 175.35, \"stock\": 0, \"title\": \"Vitae similique ea quasi.\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Aut eveniet totam alias exercitationem sapiente necessitatibus ipsa. Cupiditate aut et velit quos voluptas. Quasi aut occaecati quae qui hic quaerat id. Nemo molestiae voluptas sed delectus.\"}','2026-05-02 11:57:39','2026-05-02 11:57:39'),(9,NULL,'updated','products',72,'{\"price\": 34.00, \"stock\": 300, \"title\": \"Cute characters\", \"discount\": 0.00, \"movie_id\": 5, \"description\": \"Good for play or decoration\"}','{\"price\": 34.00, \"stock\": 300, \"title\": \"Cute characters\", \"discount\": 0.00, \"movie_id\": 5, \"description\": \"Good for play or decoration\"}','2026-05-02 12:39:51','2026-05-02 12:39:51'),(10,7,'updated','products',73,'{\"price\": 45.00, \"stock\": 300, \"title\": \"Cat calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"For JiJi fan\"}','{\"price\": 45.00, \"stock\": 300, \"title\": \"Cat calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"For JiJi fan\"}','2026-05-02 13:05:29','2026-05-02 13:05:29'),(11,NULL,'updated','products',74,'{\"price\": 55.00, \"stock\": 300, \"title\": \"Ceramic bow\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"For Calcifier fan\"}','{\"price\": 55.00, \"stock\": 298, \"title\": \"Ceramic bow\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"For Calcifier fan\"}','2026-05-02 13:08:06','2026-05-02 13:08:06'),(12,7,'updated','products',74,'{\"price\": 55.00, \"stock\": 298, \"title\": \"Ceramic bow\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"For Calcifier fan\"}','{\"price\": 55.00, \"stock\": 298, \"title\": \"Ceramic bow\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"For Calcifier fan\"}','2026-05-02 13:08:50','2026-05-02 13:08:50'),(13,7,'updated','products',48,'{\"price\": 102.80, \"stock\": 400, \"title\": \"Dignissimos quidem harum aut.\", \"discount\": 0.00, \"movie_id\": 5, \"description\": \"In aut dignissimos est optio nisi voluptatum eaque. Quo asperiores labore et natus pariatur ducimus. Quam maiores reprehenderit dolor minima asperiores velit suscipit. Aperiam beatae vitae distinctio voluptatem maiores voluptatibus. Quisquam repellendus tenetur omnis qui deleniti dolores.\"}','{\"price\": 102.80, \"stock\": 400, \"title\": \"Dignissimos quidem harum aut.\", \"discount\": 0.00, \"movie_id\": 5, \"description\": \"In aut dignissimos est optio nisi voluptatum eaque. Quo asperiores labore et natus pariatur ducimus. Quam maiores reprehenderit dolor minima asperiores velit suscipit. Aperiam beatae vitae distinctio voluptatem maiores voluptatibus. Quisquam repellendus tenetur omnis qui deleniti dolores.\"}','2026-05-02 13:29:29','2026-05-02 13:29:29'),(14,7,'soft_deleted','products',48,'{\"name\": \"Dignissimos quidem harum aut.\", \"deleted_at\": null}','{\"name\": \"Dignissimos quidem harum aut.\", \"deleted_at\": \"2026-05-02 13:29:29.000000\"}','2026-05-02 13:29:29','2026-05-02 13:29:29'),(15,7,'updated','products',75,'{\"price\": 77.00, \"stock\": 900, \"title\": \"Cute characters\", \"discount\": 0.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','{\"price\": 77.00, \"stock\": 900, \"title\": \"Cute characters\", \"discount\": 20.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','2026-05-02 13:32:11','2026-05-02 13:32:11'),(16,7,'updated','products',75,'{\"price\": 77.00, \"stock\": 900, \"title\": \"Cute characters\", \"discount\": 20.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','{\"price\": 30.00, \"stock\": 900, \"title\": \"Cute characters\", \"discount\": 20.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','2026-05-02 14:01:21','2026-05-02 14:01:21'),(17,7,'updated','orders',11,'{\"status\": \"pending\"}','{\"status\": \"processing\"}','2026-05-02 14:01:47','2026-05-02 14:01:47'),(18,7,'updated','products',76,'{\"price\": 71.00, \"stock\": 800, \"title\": \"Nice calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"for KiKi fan\"}','{\"price\": 71.00, \"stock\": 0, \"title\": \"Nice calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"for KiKi fan\"}','2026-05-02 14:08:43','2026-05-02 14:08:43'),(19,NULL,'updated','products',75,'{\"price\": 30.00, \"stock\": 900, \"title\": \"Cute characters\", \"discount\": 20.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','{\"price\": 30.00, \"stock\": 897, \"title\": \"Cute characters\", \"discount\": 20.00, \"movie_id\": 5, \"description\": \"Nice stuff for fan\"}','2026-05-02 15:24:45','2026-05-02 15:24:45'),(20,NULL,'updated','products',67,'{\"price\": 40.00, \"stock\": 300, \"title\": \"Totoro Characters\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"Cute design\"}','{\"price\": 40.00, \"stock\": 299, \"title\": \"Totoro Characters\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"Cute design\"}','2026-05-02 15:26:48','2026-05-02 15:26:48'),(21,7,'updated','orders',13,'{\"status\": \"pending\", \"payment_status\": \"unpaid\"}','{\"status\": \"processing\", \"payment_status\": \"unpaid\"}','2026-05-04 02:29:27','2026-05-04 02:29:27'),(22,7,'updated','orders',12,'{\"status\": \"pending\", \"payment_status\": \"unpaid\"}','{\"status\": \"delivered\", \"payment_status\": \"paid\"}','2026-05-04 02:29:37','2026-05-04 02:29:37'),(23,NULL,'updated','products',71,'{\"price\": 34.00, \"stock\": 600, \"title\": \"Totoro hair band\", \"discount\": 13.00, \"movie_id\": 1, \"description\": \"Very soft and cute design\"}','{\"price\": 34.00, \"stock\": 599, \"title\": \"Totoro hair band\", \"discount\": 13.00, \"movie_id\": 1, \"description\": \"Very soft and cute design\"}','2026-05-04 13:00:07','2026-05-04 13:00:07'),(24,NULL,'updated','products',62,'{\"price\": 17.00, \"stock\": 179, \"title\": \"Cat bus\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Very cute syuff\"}','{\"price\": 17.00, \"stock\": 178, \"title\": \"Cat bus\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Very cute syuff\"}','2026-05-04 13:00:07','2026-05-04 13:00:07'),(25,7,'updated','products',55,'{\"price\": 168.05, \"stock\": 100, \"title\": \"Quo inventore quaerat quibusdam ut.\", \"discount\": 15.00, \"movie_id\": 6, \"description\": \"Nemo saepe tempora maxime id enim. Totam molestiae temporibus est accusamus asperiores qui. Non deleniti commodi occaecati et nihil dolores unde veniam.\"}','{\"price\": 168.05, \"stock\": 100, \"title\": \"Mini pillow\", \"discount\": 15.00, \"movie_id\": 6, \"description\": \"Nemo saepe tempora maxime id enim. Totam molestiae temporibus est accusamus asperiores qui. Non deleniti commodi occaecati et nihil dolores unde veniam.\"}','2026-05-04 13:08:52','2026-05-04 13:08:52'),(26,NULL,'updated','products',65,'{\"price\": 8.00, \"stock\": 90, \"title\": \"Cute bunny\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"soft and furry\"}','{\"price\": 8.00, \"stock\": 89, \"title\": \"Cute bunny\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"soft and furry\"}','2026-05-04 13:09:25','2026-05-04 13:09:25'),(27,NULL,'updated','products',33,'{\"price\": 23.00, \"stock\": 22, \"title\": \"Black Cat\", \"discount\": 5.00, \"movie_id\": 4, \"description\": \"Omnis sapiente magni itaque eos. Veniam quia id dolor explicabo. Illo ut quisquam quia enim eveniet.\"}','{\"price\": 23.00, \"stock\": 21, \"title\": \"Black Cat\", \"discount\": 5.00, \"movie_id\": 4, \"description\": \"Omnis sapiente magni itaque eos. Veniam quia id dolor explicabo. Illo ut quisquam quia enim eveniet.\"}','2026-05-04 13:09:25','2026-05-04 13:09:25'),(28,7,'updated','products',76,'{\"price\": 71.00, \"stock\": 0, \"title\": \"Nice calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"for KiKi fan\"}','{\"price\": 71.00, \"stock\": 20, \"title\": \"Nice calendar\", \"discount\": 0.00, \"movie_id\": 1, \"description\": \"for KiKi fan\"}','2026-05-04 14:10:30','2026-05-04 14:10:30'),(29,7,'updated','orders',15,'{\"status\": \"pending\", \"payment_status\": \"unpaid\"}','{\"status\": \"processing\", \"payment_status\": \"unpaid\"}','2026-05-04 15:18:30','2026-05-04 15:18:30'),(30,NULL,'updated','products',52,'{\"price\": 33.00, \"stock\": 43, \"title\": \"Mei\", \"discount\": 5.00, \"movie_id\": 6, \"description\": \"Voluptates dolore voluptas temporibus vitae repellendus quia. Ipsam omnis aut delectus fugit. Quaerat aut ratione ducimus magnam et. Sunt modi neque possimus architecto.\"}','{\"price\": 33.00, \"stock\": 42, \"title\": \"Mei\", \"discount\": 5.00, \"movie_id\": 6, \"description\": \"Voluptates dolore voluptas temporibus vitae repellendus quia. Ipsam omnis aut delectus fugit. Quaerat aut ratione ducimus magnam et. Sunt modi neque possimus architecto.\"}','2026-05-04 15:23:06','2026-05-04 15:23:06'),(31,NULL,'updated','products',24,'{\"price\": 43.33, \"stock\": 44, \"title\": \"Playing Calcifier\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Nihil eveniet labore nobis quibusdam. Quam veritatis minima quos dolor eius sapiente. Quod quam facere explicabo et. Iure qui nobis cumque tempora voluptatem fugiat. Rerum nisi voluptas molestias rerum enim beatae blanditiis.\"}','{\"price\": 43.33, \"stock\": 43, \"title\": \"Playing Calcifier\", \"discount\": 10.00, \"movie_id\": 3, \"description\": \"Nihil eveniet labore nobis quibusdam. Quam veritatis minima quos dolor eius sapiente. Quod quam facere explicabo et. Iure qui nobis cumque tempora voluptatem fugiat. Rerum nisi voluptas molestias rerum enim beatae blanditiis.\"}','2026-05-04 15:23:06','2026-05-04 15:23:06'),(32,7,'updated','products',33,'{\"price\": 23.00, \"stock\": 21, \"title\": \"Black Cat\", \"discount\": 5.00, \"movie_id\": 4, \"description\": \"Omnis sapiente magni itaque eos. Veniam quia id dolor explicabo. Illo ut quisquam quia enim eveniet.\"}','{\"price\": 23.00, \"stock\": 21, \"title\": \"Black Cat\", \"discount\": 5.00, \"movie_id\": 4, \"description\": \"Omnis sapiente magni itaque eos. Veniam quia id dolor explicabo. Illo ut quisquam quia enim eveniet.\"}','2026-05-05 04:19:26','2026-05-05 04:19:26'),(33,7,'soft_deleted','products',33,'{\"name\": \"Black Cat\", \"deleted_at\": null}','{\"name\": \"Black Cat\", \"deleted_at\": \"2026-05-05 04:19:26.000000\"}','2026-05-05 04:19:26','2026-05-05 04:19:26'),(34,NULL,'updated','products',78,'{\"price\": 33.00, \"stock\": 80, \"title\": \"Soft cat bus\", \"discount\": 20.00, \"movie_id\": 1, \"description\": \"Super cute item\"}','{\"price\": 33.00, \"stock\": 73, \"title\": \"Soft cat bus\", \"discount\": 20.00, \"movie_id\": 1, \"description\": \"Super cute item\"}','2026-05-05 05:29:35','2026-05-05 05:29:35'),(35,NULL,'updated','products',63,'{\"price\": 71.00, \"stock\": 90, \"title\": \"Cute light\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Nice and special\"}','{\"price\": 71.00, \"stock\": 86, \"title\": \"Cute light\", \"discount\": 0.00, \"movie_id\": 3, \"description\": \"Nice and special\"}','2026-05-05 05:29:35','2026-05-05 05:29:35'),(36,NULL,'updated','products',42,'{\"price\": 134.29, \"stock\": 38, \"title\": \"Soft Pillow\", \"discount\": 15.00, \"movie_id\": 5, \"description\": \"Sunt aut amet et qui id harum quia id. Et iste quod molestiae necessitatibus quis quae. Et ut doloremque excepturi delectus non. Nemo sit reiciendis et molestiae id consequatur cumque.\"}','{\"price\": 134.29, \"stock\": 37, \"title\": \"Soft Pillow\", \"discount\": 15.00, \"movie_id\": 5, \"description\": \"Sunt aut amet et qui id harum quia id. Et iste quod molestiae necessitatibus quis quae. Et ut doloremque excepturi delectus non. Nemo sit reiciendis et molestiae id consequatur cumque.\"}','2026-05-05 05:29:35','2026-05-05 05:29:35'),(37,NULL,'updated','products',70,'{\"price\": 19.00, \"stock\": 230, \"title\": \"No face\", \"discount\": 0.00, \"movie_id\": 2, \"description\": \"No face pillow\"}','{\"price\": 19.00, \"stock\": 229, \"title\": \"No face\", \"discount\": 0.00, \"movie_id\": 2, \"description\": \"No face pillow\"}','2026-05-05 05:30:14','2026-05-05 05:30:14'),(38,NULL,'updated','products',54,'{\"price\": 183.17, \"stock\": 38, \"title\": \"Soft Pillow\", \"discount\": 10.00, \"movie_id\": 1, \"description\": \"Eum ea ex sapiente eos consequatur fugiat eum fugiat. Ex dolor enim est labore odio dolor. Ratione est quis qui non ex rerum laborum.\"}','{\"price\": 183.17, \"stock\": 33, \"title\": \"Soft Pillow\", \"discount\": 10.00, \"movie_id\": 1, \"description\": \"Eum ea ex sapiente eos consequatur fugiat eum fugiat. Ex dolor enim est labore odio dolor. Ratione est quis qui non ex rerum laborum.\"}','2026-05-05 05:30:14','2026-05-05 05:30:14'),(39,NULL,'updated','products',45,'{\"price\": 103.87, \"stock\": 400, \"title\": \"Nice bag\", \"discount\": 15.00, \"movie_id\": 5, \"description\": \"Quisquam omnis vitae consequatur qui. Cum unde tempora aliquid molestias sed. Nostrum voluptates molestias et aliquam est.\"}','{\"price\": 103.87, \"stock\": 392, \"title\": \"Nice bag\", \"discount\": 15.00, \"movie_id\": 5, \"description\": \"Quisquam omnis vitae consequatur qui. Cum unde tempora aliquid molestias sed. Nostrum voluptates molestias et aliquam est.\"}','2026-05-05 05:30:14','2026-05-05 05:30:14'),(40,NULL,'updated','products',59,'{\"price\": 115.21, \"stock\": 17, \"title\": \"Soft Totoro shoes\", \"discount\": 10.00, \"movie_id\": 1, \"description\": \"Voluptatibus qui tempora pariatur perspiciatis ut rerum. Rerum velit dolore molestias. Sapiente et necessitatibus deleniti quis laudantium suscipit. Pariatur quis cupiditate autem vero minima eos necessitatibus.\"}','{\"price\": 115.21, \"stock\": 16, \"title\": \"Soft Totoro shoes\", \"discount\": 10.00, \"movie_id\": 1, \"description\": \"Voluptatibus qui tempora pariatur perspiciatis ut rerum. Rerum velit dolore molestias. Sapiente et necessitatibus deleniti quis laudantium suscipit. Pariatur quis cupiditate autem vero minima eos necessitatibus.\"}','2026-05-05 05:30:14','2026-05-05 05:30:14'),(41,7,'updated','orders',18,'{\"status\": \"pending\", \"payment_status\": \"unpaid\"}','{\"status\": \"delivered\", \"payment_status\": \"paid\"}','2026-05-05 05:31:43','2026-05-05 05:31:43'),(42,7,'updated','orders',17,'{\"status\": \"pending\", \"payment_status\": \"unpaid\"}','{\"status\": \"delivered\", \"payment_status\": \"paid\"}','2026-05-05 05:31:49','2026-05-05 05:31:49');
/*!40000 ALTER TABLE `audit_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('laravel-cache-2962ae64701b84a262c3b71a81ecd5e623526aec','i:1;',1777959306),('laravel-cache-2962ae64701b84a262c3b71a81ecd5e623526aec:timer','i:1777959306;',1777959306);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cart_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_items_cart_id_foreign` (`cart_id`),
  KEY `cart_items_product_id_foreign` (`product_id`),
  CONSTRAINT `cart_items_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (1,1,5,2,'2026-04-21 13:26:48','2026-04-21 13:28:37'),(2,1,2,3,'2026-04-21 13:33:17','2026-04-21 13:34:33'),(3,1,6,1,'2026-04-21 13:34:48','2026-04-21 13:34:48'),(4,2,6,1,'2026-04-21 13:38:14','2026-04-21 13:38:14'),(5,1,42,3,'2026-04-21 14:56:47','2026-04-21 14:57:41'),(6,1,43,1,'2026-04-21 14:57:34','2026-04-21 14:57:34'),(7,1,64,1,'2026-04-21 14:58:26','2026-04-21 14:58:26'),(8,1,45,1,'2026-04-21 15:01:29','2026-04-21 15:01:29'),(9,1,49,3,'2026-04-21 15:07:50','2026-04-21 22:11:41'),(10,1,47,1,'2026-04-21 15:08:07','2026-04-21 15:08:07'),(11,3,6,1,'2026-04-21 15:10:44','2026-04-21 15:10:44'),(12,4,50,1,'2026-04-21 22:18:54','2026-04-21 22:18:54'),(15,7,12,1,'2026-04-21 22:32:31','2026-04-21 22:32:31'),(16,8,49,1,'2026-04-21 22:32:40','2026-04-21 22:32:40'),(17,9,50,1,'2026-04-21 22:34:15','2026-04-21 22:34:15'),(18,10,51,1,'2026-04-21 22:36:53','2026-04-21 22:36:53'),(19,11,50,1,'2026-04-21 22:39:22','2026-04-21 22:39:22'),(20,12,49,1,'2026-04-21 22:41:37','2026-04-21 22:41:37'),(21,13,49,1,'2026-04-21 22:47:00','2026-04-21 22:47:00'),(22,14,6,1,'2026-04-21 22:47:45','2026-04-21 22:47:45'),(23,15,51,1,'2026-04-21 22:48:55','2026-04-21 22:48:55'),(24,16,50,1,'2026-04-21 22:53:45','2026-04-21 22:53:45'),(25,17,12,1,'2026-04-21 22:53:49','2026-04-21 22:53:49'),(26,18,50,1,'2026-04-21 22:55:44','2026-04-21 22:55:44'),(27,19,50,1,'2026-04-21 22:56:22','2026-04-21 22:56:22'),(28,20,46,1,'2026-04-21 22:56:25','2026-04-21 22:56:25'),(29,21,50,1,'2026-04-21 22:57:44','2026-04-21 22:57:44'),(30,22,51,1,'2026-04-21 22:57:48','2026-04-21 22:57:48'),(31,23,46,1,'2026-04-21 23:00:36','2026-04-21 23:00:36'),(32,24,46,1,'2026-04-21 23:00:50','2026-04-21 23:00:50'),(33,25,45,1,'2026-04-21 23:04:01','2026-04-21 23:04:01'),(34,26,49,1,'2026-04-21 23:08:06','2026-04-21 23:08:06'),(35,27,51,1,'2026-04-21 23:08:21','2026-04-21 23:08:21'),(36,28,50,1,'2026-04-21 23:09:14','2026-04-21 23:09:14'),(37,29,45,1,'2026-04-21 23:12:46','2026-04-21 23:12:46'),(38,30,49,1,'2026-04-21 23:16:24','2026-04-21 23:16:24'),(39,31,51,1,'2026-04-21 23:16:30','2026-04-21 23:16:30'),(40,32,45,1,'2026-04-21 23:16:57','2026-04-21 23:16:57'),(41,33,45,1,'2026-04-21 23:22:03','2026-04-21 23:22:03'),(42,34,46,1,'2026-04-21 23:22:24','2026-04-21 23:22:24'),(43,35,49,1,'2026-04-21 23:24:53','2026-04-21 23:24:53'),(44,36,49,1,'2026-04-21 23:58:22','2026-04-21 23:58:22'),(45,36,50,1,'2026-04-21 23:58:25','2026-04-21 23:58:25'),(46,36,51,1,'2026-04-21 23:58:28','2026-04-21 23:58:28'),(47,36,48,1,'2026-04-21 23:59:04','2026-04-21 23:59:04'),(48,36,69,1,'2026-04-21 23:59:08','2026-04-21 23:59:08'),(49,36,37,1,'2026-04-21 23:59:17','2026-04-21 23:59:17'),(50,36,65,1,'2026-04-21 23:59:22','2026-04-21 23:59:22'),(51,36,68,3,'2026-04-21 23:59:28','2026-04-22 00:00:32'),(52,36,32,3,'2026-04-22 00:00:37','2026-04-22 00:01:56'),(53,36,33,1,'2026-04-22 00:03:27','2026-04-22 00:03:27'),(54,36,35,1,'2026-04-22 00:03:31','2026-04-22 00:03:31'),(59,38,68,1,'2026-04-22 02:55:11','2026-04-22 02:55:11'),(76,42,70,1,'2026-04-23 03:45:02','2026-04-23 03:45:02'),(90,48,65,1,'2026-04-23 12:52:00','2026-04-23 12:52:00'),(94,50,19,1,'2026-04-23 12:53:19','2026-04-23 12:53:19'),(101,55,35,1,'2026-04-24 03:16:16','2026-04-24 03:16:16'),(104,57,20,1,'2026-04-24 03:44:18','2026-04-24 03:44:18'),(107,60,56,2,'2026-04-24 05:21:23','2026-04-24 05:21:32'),(108,60,13,1,'2026-04-24 05:21:25','2026-04-24 05:21:25'),(109,60,19,1,'2026-04-24 05:21:27','2026-04-24 05:21:27'),(110,62,71,1,'2026-04-24 11:16:20','2026-05-02 14:27:23'),(112,63,70,2,'2026-04-24 11:38:26','2026-04-24 12:15:26'),(113,63,65,9,'2026-04-24 12:15:10','2026-04-24 12:15:34'),(114,63,56,1,'2026-04-24 12:15:13','2026-04-24 12:15:13'),(119,64,74,1,'2026-05-02 13:07:03','2026-05-02 13:07:03'),(121,66,34,1,'2026-05-02 14:20:38','2026-05-02 14:20:38'),(126,68,70,1,'2026-05-02 14:32:46','2026-05-02 14:32:46'),(130,71,66,1,'2026-05-02 15:21:40','2026-05-02 15:21:40');
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `session_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_foreign` (`user_id`),
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,NULL,NULL,'2026-04-21 13:23:10','2026-04-21 13:23:10'),(2,NULL,'169491c3-b2ad-409e-8fd5-19ee90de016d','2026-04-21 13:38:14','2026-04-21 13:38:14'),(3,NULL,'ad76401f-20d9-4082-9b58-289a358e56bd','2026-04-21 15:10:44','2026-04-21 15:10:44'),(4,NULL,'b51e18ee-5ce4-4117-b25d-b436591b8c6e','2026-04-21 22:18:54','2026-04-21 22:18:54'),(6,NULL,'f50d769d-a177-47a6-801f-f89cdfceadc3','2026-04-21 22:30:43','2026-04-21 22:30:43'),(7,NULL,'542db403-932a-4745-a59f-86c1b6f0e043','2026-04-21 22:32:31','2026-04-21 22:32:31'),(8,NULL,'04cd7839-4671-4dbb-89db-ff33d5d231c4','2026-04-21 22:32:40','2026-04-21 22:32:40'),(9,NULL,'ad5483a9-30d0-447e-8eb6-fd5fb35036a6','2026-04-21 22:34:15','2026-04-21 22:34:15'),(10,NULL,'26e5f23c-2b12-4b2b-8959-d2ae17a791f8','2026-04-21 22:36:53','2026-04-21 22:36:53'),(11,NULL,'f7b5058d-686a-4668-bae0-3e95db59314e','2026-04-21 22:39:22','2026-04-21 22:39:22'),(12,NULL,'3b8a30cb-62fe-4c7a-9a27-18e11d2f6d3d','2026-04-21 22:41:37','2026-04-21 22:41:37'),(13,NULL,'572ae4ce-6a32-4fdd-9829-ca3c13ad8ff9','2026-04-21 22:47:00','2026-04-21 22:47:00'),(14,NULL,'8e252074-c2bb-4b7b-8d0f-72be66d54229','2026-04-21 22:47:45','2026-04-21 22:47:45'),(15,NULL,'4494adbf-f9d2-42b3-9a7a-11c831b48b1b','2026-04-21 22:48:55','2026-04-21 22:48:55'),(16,NULL,'e47d2b6f-8798-4413-90ee-a62a7457b576','2026-04-21 22:53:45','2026-04-21 22:53:45'),(17,NULL,'a541e585-8186-4323-a515-e80b88ae4947','2026-04-21 22:53:49','2026-04-21 22:53:49'),(18,NULL,'b9ad860f-08bc-4741-a2c3-7042522b662a','2026-04-21 22:55:44','2026-04-21 22:55:44'),(19,NULL,'99aaa78a-34d5-4851-a536-0bfdc052bbf7','2026-04-21 22:56:22','2026-04-21 22:56:22'),(20,NULL,'cf9b5a53-81e2-4e7a-9387-b061d19e6249','2026-04-21 22:56:25','2026-04-21 22:56:25'),(21,NULL,'dd59084a-34b0-4667-afbc-be01de791cb6','2026-04-21 22:57:44','2026-04-21 22:57:44'),(22,NULL,'f84abbe9-b3dc-4c83-ba86-6332348ccd48','2026-04-21 22:57:48','2026-04-21 22:57:48'),(23,NULL,'371dc5db-52ad-4ffe-a380-72e52e588421','2026-04-21 23:00:36','2026-04-21 23:00:36'),(24,NULL,'beb2da3b-ed06-435f-9891-e5474d107d6d','2026-04-21 23:00:50','2026-04-21 23:00:50'),(25,NULL,'155609c5-722a-46cc-93e4-bf8abf9fa5a3','2026-04-21 23:04:01','2026-04-21 23:04:01'),(26,NULL,'76dbacdb-f362-4f2e-a17e-8a4217451ac1','2026-04-21 23:08:06','2026-04-21 23:08:06'),(27,NULL,'88e76475-8553-4b48-be80-785e9022bac5','2026-04-21 23:08:21','2026-04-21 23:08:21'),(28,NULL,'b314d709-14ab-41aa-82a4-604d3082ce80','2026-04-21 23:09:14','2026-04-21 23:09:14'),(29,NULL,'a257fe51-469c-41af-81e6-239841c17e16','2026-04-21 23:12:46','2026-04-21 23:12:46'),(30,NULL,'8df5a966-bbca-401e-a876-452a94f3dd91','2026-04-21 23:16:24','2026-04-21 23:16:24'),(31,NULL,'4a56a143-b401-4076-8971-d1bf9a399001','2026-04-21 23:16:30','2026-04-21 23:16:30'),(32,NULL,'6c106f67-db99-4c06-a2d4-b68873d00b07','2026-04-21 23:16:57','2026-04-21 23:16:57'),(33,NULL,'a11b9627-9cd5-4032-9001-27747d5fc264','2026-04-21 23:22:03','2026-04-21 23:22:03'),(34,NULL,'b13cc5b4-8e63-4978-ad52-ab814a9bcbdd','2026-04-21 23:22:24','2026-04-21 23:22:24'),(35,NULL,'6370f7e0-45c3-45a7-b6d9-6e48e65af889','2026-04-21 23:24:53','2026-04-21 23:24:53'),(36,NULL,'bd7fad93-64da-4c38-bd81-66e3ebe1a4f4','2026-04-21 23:58:22','2026-04-21 23:58:22'),(38,NULL,'5a41a4fa-6c61-437e-bfde-fae720fdac01','2026-04-22 02:55:11','2026-04-22 02:55:11'),(42,NULL,'1d2efeb8-2d3c-4000-a003-bf388c8d878f','2026-04-23 03:45:02','2026-04-23 03:45:02'),(48,NULL,'edace2ea-60d8-4720-9036-8b9af6bf3269','2026-04-23 12:52:00','2026-04-23 12:52:00'),(50,NULL,'2db79e68-877d-4983-b4f5-53455425f410','2026-04-23 12:53:19','2026-04-23 12:53:19'),(55,NULL,'af706afa-81f7-46c6-8b5d-f7536c06de73','2026-04-24 03:16:16','2026-04-24 03:16:16'),(57,NULL,'2f8de725-4cd6-48e1-acbd-51ff0c37211e','2026-04-24 03:44:18','2026-04-24 03:44:18'),(60,5,NULL,'2026-04-24 05:20:45','2026-04-24 05:20:45'),(62,3,NULL,'2026-04-24 11:30:27','2026-04-24 11:30:27'),(63,8,NULL,'2026-04-24 11:31:41','2026-04-24 11:31:41'),(64,NULL,'2f51f9f4-6197-483b-aa9a-bb1f92886d0b','2026-05-02 13:07:03','2026-05-02 13:07:03'),(66,NULL,'5ed5efd2-aed6-4cdf-b0b1-cab899fd4d7c','2026-05-02 14:20:38','2026-05-02 14:20:38'),(68,NULL,'c29832fc-9045-493b-a0a5-32316acf5a1a','2026-05-02 14:32:46','2026-05-02 14:32:46'),(71,NULL,'4693d8ba-2114-40c4-90d0-f6bdeaa6f1e2','2026-05-02 15:21:40','2026-05-02 15:21:40'),(75,7,NULL,'2026-05-04 13:27:35','2026-05-04 13:27:35'),(78,10,NULL,'2026-05-05 05:32:42','2026-05-05 05:32:42'),(79,11,NULL,'2026-05-05 05:33:20','2026-05-05 05:33:20'),(80,12,NULL,'2026-05-05 05:33:54','2026-05-05 05:33:54');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2026_04_16_054407_create_personal_access_tokens_table',2),(5,'2026_04_17_025909_create_movies_table',3),(6,'2026_04_17_032117_create_products_table',4),(7,'2026_04_17_042950_create_product_images_table',5),(8,'2026_04_21_114003_create_carts_table',6),(9,'2026_04_21_114012_create_cart_items_table',6),(10,'2026_04_22_144502_create_orders_table',7),(11,'2026_04_22_144508_create_order_items_table',7),(12,'2026_04_23_024957_add_column_name_to_orders_table',8),(13,'2026_04_23_030406_add_payment_method_to_orders_table',9),(14,'2026_04_24_135604_create_wishlists_table',10),(15,'2026_04_30_123251_create_logs_tables',11),(16,'2026_05_01_024236_remove_ip_address_from_audit_logs_table',12),(17,'2026_05_02_113527_add_soft_deletes_to_products_table',13),(18,'2026_05_02_125259_add_soft_deletes_to_product_images_table',14),(19,'2026_05_02_143640_add_shipping_fee_to_orders_table',15),(20,'2026_05_04_014348_add_payment_status_to_orders_table',16),(21,'2026_05_04_022040_update_delivered_orders_payment_status',17),(22,'2026_05_04_023727_create_payments_table',18);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movies_title_unique` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'My Neighbor Totoro','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394329/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr_ajkka3.jpg','2026-04-17 03:14:57','2026-04-17 03:14:57'),(2,'Spirited Away','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776395561/Spirit_away_ik2rd0.jpg','2026-04-17 03:14:57','2026-04-17 03:14:57'),(3,'Howl\'s Moving Castle','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394532/Howl_27s_Moving_Castle_caulqy.webp','2026-04-17 03:14:57','2026-04-17 03:14:57'),(4,'KiKi\'s Delivery Service','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394261/KiKi_movie_jaq1ys.jpg','2026-04-17 03:14:57','2026-04-17 03:14:57'),(5,'Ponyo','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394411/1000x1480_Ponyo_FE_Ticketing.jpg_nistjw.avif','2026-04-17 03:14:57','2026-04-17 03:14:57'),(6,'Castle in the Sky','https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776394521/castle-in-the-sky-poster_02_tbzsqt.webp','2026-04-17 03:14:57','2026-04-17 03:14:57');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_items_order_id_foreign` (`order_id`),
  KEY `order_items_product_id_foreign` (`product_id`),
  CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,50,1,18.54,'2026-04-23 03:02:22','2026-04-23 03:02:22'),(2,2,14,3,13.50,'2026-04-23 03:39:02','2026-04-23 03:39:02'),(3,2,70,3,19.00,'2026-04-23 03:39:02','2026-04-23 03:39:02'),(4,2,19,1,100.78,'2026-04-23 03:39:02','2026-04-23 03:39:02'),(5,3,68,2,18.00,'2026-04-23 03:48:45','2026-04-23 03:48:45'),(6,3,64,2,190.00,'2026-04-23 03:48:45','2026-04-23 03:48:45'),(7,3,62,1,17.00,'2026-04-23 03:48:45','2026-04-23 03:48:45'),(8,4,69,1,25.38,'2026-04-23 05:51:01','2026-04-23 05:51:01'),(9,4,14,1,13.50,'2026-04-23 05:51:01','2026-04-23 05:51:01'),(10,4,32,1,115.93,'2026-04-23 05:51:01','2026-04-23 05:51:01'),(11,4,37,1,123.48,'2026-04-23 05:51:01','2026-04-23 05:51:01'),(12,4,7,1,19.40,'2026-04-23 05:51:01','2026-04-23 05:51:01'),(13,5,70,2,19.00,'2026-04-23 12:44:28','2026-04-23 12:44:28'),(14,5,13,3,10.80,'2026-04-23 12:44:28','2026-04-23 12:44:28'),(15,6,9,1,39.20,'2026-04-23 12:54:31','2026-04-23 12:54:31'),(16,6,10,1,25.20,'2026-04-23 12:54:31','2026-04-23 12:54:31'),(17,7,12,1,112.38,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(18,7,20,1,33.62,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(19,7,55,1,142.84,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(20,7,51,1,77.56,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(21,7,50,1,18.54,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(22,7,7,1,19.40,'2026-04-24 03:14:19','2026-04-24 03:14:19'),(23,8,70,2,19.00,'2026-04-24 03:43:31','2026-04-24 03:43:31'),(24,8,32,1,22.95,'2026-04-24 03:43:31','2026-04-24 03:43:31'),(25,9,57,2,15.39,'2026-04-30 06:55:45','2026-04-30 06:55:45'),(26,9,53,1,166.80,'2026-04-30 06:55:45','2026-04-30 06:55:45'),(27,10,30,1,127.68,'2026-05-02 11:57:15','2026-05-02 11:57:15'),(28,10,11,1,18.00,'2026-05-02 11:57:15','2026-05-02 11:57:15'),(29,10,17,1,175.35,'2026-05-02 11:57:15','2026-05-02 11:57:15'),(30,11,74,2,55.00,'2026-05-02 13:08:06','2026-05-02 13:08:06'),(31,12,75,3,24.00,'2026-05-02 15:24:45','2026-05-02 15:24:45'),(32,13,67,1,40.00,'2026-05-02 15:26:48','2026-05-02 15:26:48'),(33,14,71,1,29.58,'2026-05-04 13:00:07','2026-05-04 13:00:07'),(34,14,62,1,17.00,'2026-05-04 13:00:07','2026-05-04 13:00:07'),(35,15,65,1,8.00,'2026-05-04 13:09:25','2026-05-04 13:09:25'),(36,15,33,1,21.85,'2026-05-04 13:09:25','2026-05-04 13:09:25'),(37,16,52,1,31.35,'2026-05-04 15:23:06','2026-05-04 15:23:06'),(38,16,24,1,39.00,'2026-05-04 15:23:06','2026-05-04 15:23:06'),(39,17,78,7,26.40,'2026-05-05 05:29:35','2026-05-05 05:29:35'),(40,17,63,4,71.00,'2026-05-05 05:29:35','2026-05-05 05:29:35'),(41,17,42,1,114.15,'2026-05-05 05:29:35','2026-05-05 05:29:35'),(42,18,70,1,19.00,'2026-05-05 05:30:14','2026-05-05 05:30:14'),(43,18,54,5,164.85,'2026-05-05 05:30:14','2026-05-05 05:30:14'),(44,18,45,8,88.29,'2026-05-05 05:30:14','2026-05-05 05:30:14'),(45,18,59,1,103.69,'2026-05-05 05:30:14','2026-05-05 05:30:14');
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `delivery_fee` decimal(8,2) NOT NULL DEFAULT '0.00',
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'cash',
  `payment_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpaid',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `shipping_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,NULL,'user_test@example.com','Orange',18.54,0.00,'cash','unpaid','pending','123 Totoro Lane, Studio Ghibli Forest','0123456789','2026-04-23 03:02:22','2026-04-23 03:02:22'),(2,5,'user16@gmail.com','mimi haha',198.28,0.00,'cash','paid','delivered','123 Abc, LA','891199919','2026-04-23 03:39:02','2026-04-23 15:26:28'),(3,NULL,'user_flower@gmail.com','Sun Flower',433.00,0.00,'cash','unpaid','processing','400 Howl street','46111711','2026-04-23 03:48:45','2026-04-23 15:26:35'),(4,5,'user16@gmail.com','mimi haha',297.69,0.00,'cash','paid','delivered','156 EW AU','81119111','2026-04-23 05:51:01','2026-04-23 15:25:30'),(5,5,'user16@gmail.com','mimi haha',70.40,0.00,'cash','unpaid','processing','12 ABC, DC','71111811','2026-04-23 12:44:28','2026-04-23 15:23:37'),(6,6,'user18@gmail.com','Nice corn',64.40,0.00,'cash','unpaid','pending','90 ER Laha, QA','881999191','2026-04-23 12:54:31','2026-04-23 15:34:25'),(7,5,'user16@gmail.com','mimi haha',404.35,0.00,'cash','unpaid','shipped','12 ABC, DC','71111811','2026-04-24 03:14:19','2026-04-24 03:15:09'),(8,7,'admin@gmail.com','admin',60.95,0.00,'cash','unpaid','pending','145 AD, Lock','456622722','2026-04-24 03:43:31','2026-04-24 03:43:31'),(9,4,'user14@gmail.com','Cute Dog',197.59,0.00,'cash','paid','delivered','199 AD North, LA','39918881','2026-04-30 06:55:45','2026-05-04 02:12:55'),(10,6,'user18@gmail.com','Nice corn',321.03,0.00,'cash','unpaid','pending','90 ER Laha, QA','881999191','2026-05-02 11:57:15','2026-05-02 11:57:15'),(11,NULL,'user89@gmail.com','Le Khanh Linh',110.00,0.00,'cash','unpaid','processing','Tanan 19 Koka','918818811','2026-05-02 13:08:06','2026-05-02 14:01:47'),(12,6,'user18@gmail.com','Nice corn',72.00,0.00,'cash','paid','delivered','90 ER Laha, QA','881999191','2026-05-02 15:24:45','2026-05-04 02:29:37'),(13,6,'user18@gmail.com','Nice corn',40.00,20.00,'cash','unpaid','processing','90 ER Laha, QA','881999191','2026-05-02 15:26:48','2026-05-04 02:29:27'),(14,2,'user12@gmail.com','Miu MiMi',46.58,20.00,'cash','unpaid','pending','71 Tana, Kany','991999120','2026-05-04 13:00:07','2026-05-04 13:00:07'),(15,7,'admin@gmail.com','admin',29.85,20.00,'cash','unpaid','processing','891 ADN, YU','781110011','2026-05-04 13:09:25','2026-05-04 15:18:30'),(16,6,'user18@gmail.com','Nice corn',70.35,0.00,'cash','unpaid','pending','90 ER Laha, QA','881999191','2026-05-04 15:23:06','2026-05-04 15:23:06'),(17,9,'user100@gmail.com','Sunny',582.95,0.00,'cash','paid','delivered','90 Home, Kimi','788119991','2026-05-05 05:29:35','2026-05-05 05:31:49'),(18,9,'user100@gmail.com','Sunny',1653.27,0.00,'cash','paid','delivered','90 Home, Kimi','788119991','2026-05-05 05:30:14','2026-05-05 05:31:43');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `audit_orders_update` AFTER UPDATE ON `orders` FOR EACH ROW BEGIN
    IF (OLD.status <> NEW.status) THEN
        INSERT INTO audit_logs (
            user_id, 
            action, 
            table_name, 
            record_id, 
            old_values, 
            new_values, 
            created_at, 
            updated_at
        ) 
        VALUES (
            @current_user_id, 
            'updated', 
            'orders', 
            OLD.id, 
            JSON_OBJECT(
                'status', OLD.status,
                'payment_status', OLD.payment_status
            ),
            JSON_OBJECT(
                'status', NEW.status,
                'payment_status', NEW.payment_status
            ), 
            NOW(), 
            NOW()
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `payment_method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'COD, banking, e-wallet...',
  `transaction_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `failure_reason` text COLLATE utf8mb4_unicode_ci,
  `paid_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payments_transaction_id_unique` (`transaction_id`),
  KEY `payments_order_id_foreign` (`order_id`),
  CONSTRAINT `payments_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  KEY `personal_access_tokens_expires_at_index` (`expires_at`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',1,'auth_token','bed0ab8580798264a4eed955649eb974d0662c302cb3a709d1c114ce91921c70','[\"*\"]',NULL,NULL,'2026-04-16 06:19:02','2026-04-16 06:19:02'),(6,'App\\Models\\User',1,'auth_token','7d3842ab23fce659c1747223d81559d4d2284b4f8951a73eb0c5e526097b90fa','[\"*\"]',NULL,NULL,'2026-04-16 14:33:44','2026-04-16 14:33:44'),(16,'App\\Models\\User',2,'auth_token','e42b2ca6fa69ff8554cd06153ba245d62cb386fe69cfc0fc9723276aba653084','[\"*\"]',NULL,NULL,'2026-04-21 14:53:34','2026-04-21 14:53:34'),(53,'App\\Models\\User',7,'auth_token','b04979216f39ec9ee9ef25e8afcf2fbf301b25da84f791f203cde84adde88a02','[\"*\"]',NULL,NULL,'2026-04-30 15:25:01','2026-04-30 15:25:01'),(54,'App\\Models\\User',7,'auth_token','f3a01b1600a71cecda291da749f0292ef5447ba3ac09b0e3612e6ca555a8cbb9','[\"*\"]',NULL,NULL,'2026-04-30 15:25:09','2026-04-30 15:25:09'),(55,'App\\Models\\User',7,'auth_token','455d4e7ab746fb4787b139b0cb1d1313abf55ff8b2e77f9868d60a9e1dd0a7a4','[\"*\"]',NULL,NULL,'2026-04-30 15:25:36','2026-04-30 15:25:36'),(82,'App\\Models\\User',7,'auth_token','e9dfbbec26b51f82cab4706c8db3c04684e52c7c5c254c8cf2f9701006967b75','[\"*\"]','2026-05-05 05:43:13',NULL,'2026-05-05 05:34:06','2026-05-05 05:43:13');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price_logs`
--

DROP TABLE IF EXISTS `price_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price_logs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned NOT NULL,
  `old_price` decimal(10,2) NOT NULL,
  `new_price` decimal(10,2) NOT NULL,
  `old_discount` decimal(5,2) DEFAULT NULL,
  `new_discount` decimal(5,2) DEFAULT NULL,
  `changed_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `price_logs_product_id_foreign` (`product_id`),
  KEY `price_logs_changed_by_foreign` (`changed_by`),
  CONSTRAINT `price_logs_changed_by_foreign` FOREIGN KEY (`changed_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `price_logs_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price_logs`
--

LOCK TABLES `price_logs` WRITE;
/*!40000 ALTER TABLE `price_logs` DISABLE KEYS */;
INSERT INTO `price_logs` VALUES (1,56,88.33,40.00,0.00,5.00,NULL,'2026-04-30 15:14:24'),(2,19,106.08,28.00,5.00,5.00,NULL,'2026-04-30 15:19:20'),(3,66,24.00,24.00,5.00,11.00,NULL,'2026-04-30 15:26:29'),(4,52,95.81,33.00,5.00,5.00,7,'2026-04-30 15:39:22'),(5,27,192.78,15.00,10.00,10.00,7,'2026-05-01 02:54:32'),(6,75,77.00,77.00,0.00,20.00,7,'2026-05-02 13:32:11'),(7,75,77.00,30.00,20.00,20.00,7,'2026-05-02 14:01:21');
/*!40000 ALTER TABLE `price_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_images_product_id_foreign` (`product_id`),
  CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=261 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (11,6,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp','2026-04-17 14:03:29','2026-04-17 14:03:29',NULL),(12,6,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/iofcufopzpabjtam11oj.webp','2026-04-17 14:03:29','2026-04-17 14:03:29',NULL),(26,2,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776143525/ggbklocqwajbqvmpxtkk.webp','2026-04-17 14:43:47','2026-04-17 14:43:47',NULL),(27,2,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776143525/asiifglyeemnywt2lxmk.webp','2026-04-17 14:43:47','2026-04-17 14:43:47',NULL),(38,7,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776435131/abis4201fsuplfu3ovfa.webp','2026-04-17 22:31:59','2026-04-17 22:31:59',NULL),(39,7,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776435132/expmkeq4t494daxac5qj.webp','2026-04-17 22:31:59','2026-04-17 22:31:59',NULL),(55,9,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/spww6jeoup08wphicrlk.webp','2026-04-17 22:42:04','2026-04-17 22:42:04',NULL),(56,9,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/avhky4wcwjaaruh2ocg3.webp','2026-04-17 22:42:04','2026-04-17 22:42:04',NULL),(57,9,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465723/g0mpfat5qg6rlxygzgtm.webp','2026-04-17 22:42:04','2026-04-17 22:42:04',NULL),(58,10,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/tqtghrhzh66hijasgkkf.webp','2026-04-17 22:43:24','2026-04-17 22:43:24',NULL),(59,10,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/cv7dfbeo5tbmocy7ndhs.webp','2026-04-17 22:43:24','2026-04-17 22:43:24',NULL),(60,10,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465803/iugqspuey0q4salubpo1.webp','2026-04-17 22:43:24','2026-04-17 22:43:24',NULL),(61,11,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp','2026-04-17 22:44:03','2026-04-17 22:44:03',NULL),(62,11,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/dwvvftipkwgcdwgkbwsr.webp','2026-04-17 22:44:03','2026-04-17 22:44:03',NULL),(89,38,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg','2026-04-17 22:58:41','2026-04-17 22:58:41',NULL),(116,64,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507070/lirsz18uzsntrvgouatn.webp','2026-04-18 10:11:10','2026-04-18 10:11:10',NULL),(119,12,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507387/f7qq3otbynziu8mystvo.webp','2026-04-18 10:18:19','2026-04-18 10:18:19',NULL),(120,12,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507498/fzimcmavlgdxwtwcemkq.webp','2026-04-18 10:18:19','2026-04-18 10:18:19',NULL),(121,14,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp','2026-04-18 10:32:10','2026-04-18 10:32:10',NULL),(127,67,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520851/axx8cxw399hzn37ujcpd.webp','2026-04-18 14:00:52','2026-04-18 14:00:52',NULL),(128,67,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520851/qbvsomuivqrtemo97l3s.webp','2026-04-18 14:00:52','2026-04-18 14:00:52',NULL),(132,34,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg','2026-04-18 14:28:44','2026-04-18 14:28:44',NULL),(133,5,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776427031/gjrmolark1ljtrtiwapk.webp','2026-04-19 12:28:50','2026-04-19 12:28:50',NULL),(134,5,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776427031/ttsavpjvl7cgvbvkfq0m.webp','2026-04-19 12:28:50','2026-04-19 12:28:50',NULL),(140,62,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776506797/ty4diqznmwa10karbtmh.webp','2026-04-20 05:12:20','2026-04-20 05:12:20',NULL),(141,62,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776506797/rqa6dkyr8ouhgmv1lxc6.webp','2026-04-20 05:12:20','2026-04-20 05:12:20',NULL),(142,65,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507112/y5xrejdajr9tpqhkxccm.webp','2026-04-20 05:17:12','2026-04-20 05:17:12',NULL),(143,17,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776465842/rypkp2ddw6xfgkidiz5s.webp','2026-04-20 05:17:27','2026-04-20 05:17:27',NULL),(147,32,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000741/ajw3gxurfaoqem6qdgrj.webp','2026-04-24 03:19:01','2026-04-24 03:19:01',NULL),(148,32,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000741/hhkqrc5ksnwmfyf5vms3.webp','2026-04-24 03:19:01','2026-04-24 03:19:01',NULL),(149,54,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp','2026-04-24 03:20:04','2026-04-24 03:20:04',NULL),(150,54,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000803/idcvpwkhx99oczmxmewz.webp','2026-04-24 03:20:04','2026-04-24 03:20:04',NULL),(153,59,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000936/avpujb6syopcgvuxecmo.webp','2026-04-24 03:22:16','2026-04-24 03:22:16',NULL),(154,59,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000936/ysmm2q5mqgfa3h5s6czp.webp','2026-04-24 03:22:16','2026-04-24 03:22:16',NULL),(156,13,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001058/hdyhlsihcgcgdwy51gin.webp','2026-04-24 03:24:19','2026-04-24 03:24:19',NULL),(157,13,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001058/nl6ev5kfzvyzxuefyeom.webp','2026-04-24 03:24:19','2026-04-24 03:24:19',NULL),(164,42,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001208/bbdxwyy7lkffkrcocczc.webp','2026-04-24 03:26:48','2026-04-24 03:26:48',NULL),(165,43,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001281/noj1v6e84hpvrxkdmlcl.webp','2026-04-24 03:28:02','2026-04-24 03:28:02',NULL),(168,63,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776507014/i63pj6qavwemsuli9nvw.webp','2026-04-24 03:28:58','2026-04-24 03:28:58',NULL),(169,63,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001338/ckpozzm7o1d1ad6eq5qe.webp','2026-04-24 03:28:58','2026-04-24 03:28:58',NULL),(170,63,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001338/cjqatmwyooftwjt5rwok.webp','2026-04-24 03:28:58','2026-04-24 03:28:58',NULL),(180,37,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001978/pfbtunbxmmjaxpg9q6sa.webp','2026-04-24 03:39:39','2026-04-24 03:39:39',NULL),(181,41,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002005/yi8nzvzxb7eguwuc7qca.webp','2026-04-24 03:40:06','2026-04-24 03:40:06',NULL),(182,40,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002072/mwmx8ekdru0azosioa5f.webp','2026-04-24 03:41:13','2026-04-24 03:41:13',NULL),(183,40,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002073/wpse690nkmvtshmoomte.webp','2026-04-24 03:41:13','2026-04-24 03:41:13',NULL),(184,15,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002105/akzd2vvdeo9rnhwsy9r2.webp','2026-04-24 03:41:46','2026-04-24 03:41:46',NULL),(185,18,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002139/xpsxpaqdirgxhcjzlp2b.webp','2026-04-24 03:42:20','2026-04-24 03:42:20',NULL),(187,35,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002382/xtyukievfxfmq1hky5n2.webp','2026-04-24 03:46:23','2026-04-24 03:46:23',NULL),(188,36,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002413/cofwx0fgvugf72ybthlh.webp','2026-04-24 03:46:54','2026-04-24 03:46:54',NULL),(190,29,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002494/vpli0ueeh5qlmimowpv0.webp','2026-04-24 03:48:15','2026-04-24 03:48:15',NULL),(192,31,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002566/sxbjg9d85atzdulus7ov.webp','2026-04-24 03:49:27','2026-04-24 03:49:27',NULL),(193,30,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002594/amxtnlt08ezlfvbce9rq.webp','2026-04-24 03:49:54','2026-04-24 03:49:54',NULL),(194,26,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002632/fgkyyjdp71mudmompsdi.webp','2026-04-24 03:50:33','2026-04-24 03:50:33',NULL),(195,26,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002632/mbmspt18lgpyyufyogv1.webp','2026-04-24 03:50:33','2026-04-24 03:50:33',NULL),(196,22,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776424831/ib2brhmsku09rsqygkje.webp','2026-04-24 03:50:53','2026-04-24 03:50:53',NULL),(197,23,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002711/nqoaabd9yvga0fsdsg6b.webp','2026-04-24 03:51:52','2026-04-24 03:51:52',NULL),(198,23,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002710/sg8rzuviqs2ruphh3yeh.webp','2026-04-24 03:51:52','2026-04-24 03:51:52',NULL),(199,20,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002749/oygpd19t3gxnx1cvbedf.webp','2026-04-24 03:52:29','2026-04-24 03:52:29',NULL),(200,21,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002775/cdx0cxrj3pppjvzj5dkv.webp','2026-04-24 03:52:56','2026-04-24 03:52:56',NULL),(201,28,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002807/ei3mwudqc5v8v1dst6wg.webp','2026-04-24 03:53:28','2026-04-24 03:53:28',NULL),(202,39,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002857/wem7o6clhenf49b6l0yk.webp','2026-04-24 03:54:18','2026-04-24 03:54:18',NULL),(203,24,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002926/lintu2esa78nq1jlipzh.webp','2026-04-24 03:55:26','2026-04-24 03:55:26',NULL),(204,51,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776219842/ego4f9hvwhsnwa0kvq6j.jpg','2026-04-24 03:55:45','2026-04-24 03:55:45',NULL),(210,70,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776661678/su8v83678cba6iljtrfc.webp','2026-04-24 12:15:57','2026-04-24 12:15:57',NULL),(211,69,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776521057/qycolbavzfoid5dfmomz.webp','2026-04-24 12:16:04','2026-04-24 12:16:04',NULL),(212,69,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776521057/e3gs8nwcm3oknwgdhrdf.webp','2026-04-24 12:16:04','2026-04-24 12:16:04',NULL),(213,68,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776520963/kp5smvlzl3rr7dahg05v.webp','2026-04-24 12:16:13','2026-04-24 12:16:13',NULL),(214,57,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001828/ivaplzyjusojgpvlgknn.webp','2026-04-24 12:16:34','2026-04-24 12:16:34',NULL),(215,58,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000983/ysjasxgjggsvo4v1vyzb.webp','2026-04-24 12:16:51','2026-04-24 12:16:51',NULL),(216,53,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001104/popcfswgbvvbaixjn67d.webp','2026-04-24 12:16:58','2026-04-24 12:16:58',NULL),(217,53,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001171/l9htaeptxferagoah4ce.webp','2026-04-24 12:16:58','2026-04-24 12:16:58',NULL),(218,53,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001171/oz7tybhtynkn3bbr2hqy.webp','2026-04-24 12:16:58','2026-04-24 12:16:58',NULL),(219,46,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001142/yiluxt1fzxoy9kqmkenq.webp','2026-04-24 12:17:08','2026-04-24 12:17:08',NULL),(220,45,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001588/iogx5muqkwsvm1d8hqjp.webp','2026-04-24 12:17:15','2026-04-24 12:17:15',NULL),(221,48,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001918/yov0iqefceqqcidx9ope.webp','2026-04-24 12:17:24','2026-05-02 13:29:29','2026-05-02 13:29:29'),(222,48,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001918/btdyjbuyou0emio7630w.webp','2026-04-24 12:17:24','2026-05-02 13:29:29','2026-05-02 13:29:29'),(223,44,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001307/ym1rddxdpsav2guptbhf.webp','2026-04-24 12:17:30','2026-04-24 12:17:30',NULL),(224,47,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002971/ol2cinocvou9bjclwhkg.webp','2026-04-24 12:17:39','2026-04-24 12:17:39',NULL),(225,47,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002972/fmdfs8lmyipfejhcbv5z.webp','2026-04-24 12:17:39','2026-04-24 12:17:39',NULL),(226,50,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001494/ctnq21bbjivh8agcxzuc.jpg','2026-04-24 12:17:48','2026-04-24 12:17:48',NULL),(227,50,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001494/enqnzcftgbhzl2x9tozd.webp','2026-04-24 12:17:48','2026-04-24 12:17:48',NULL),(228,49,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001950/o2gyqejr155dqjpw7qxy.webp','2026-04-24 12:18:10','2026-04-24 12:18:10',NULL),(229,71,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776950961/t1ydrdmoqnfwhfl2iefm.webp','2026-04-29 13:29:49','2026-04-29 13:29:49',NULL),(230,71,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776950995/ttp41ytxhutvzwyblich.webp','2026-04-29 13:29:49','2026-04-29 13:29:49',NULL),(231,55,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp','2026-04-30 07:22:29','2026-05-04 13:08:52','2026-05-04 13:08:52'),(232,33,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776226159/fyugrirxzmsp3ywrkw2b.jpg','2026-04-30 14:40:17','2026-05-05 04:19:26','2026-05-05 04:19:26'),(233,56,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000871/ifq0ggsufk3pjreqr2mq.webp','2026-04-30 15:14:24','2026-04-30 15:14:24',NULL),(234,56,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777000871/hrpfwblochhv0t7otdij.webp','2026-04-30 15:14:24','2026-04-30 15:14:24',NULL),(235,19,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002443/jlikqhoaqb98vkgsyv8d.webp','2026-04-30 15:19:20','2026-04-30 15:19:20',NULL),(236,66,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776516561/mkgvkeznksm5ujhlzzkz.webp','2026-04-30 15:26:29','2026-04-30 15:26:29',NULL),(237,66,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776516561/ou9nbosaveyc14fheccu.webp','2026-04-30 15:26:29','2026-04-30 15:26:29',NULL),(238,52,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777001848/yw3jvctbm1ppv5m0lnnb.webp','2026-04-30 15:39:22','2026-04-30 15:39:22',NULL),(239,27,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777002529/ppvdquoqkvtjyzfveyho.webp','2026-05-01 02:54:32','2026-05-01 02:54:32',NULL),(241,25,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777003019/glnndrkymsmqnjqxbnt9.webp','2026-05-02 11:56:25','2026-05-02 11:56:25',NULL),(242,73,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777727085/svcuxaouiwjz3qawyebb.webp','2026-05-02 13:04:46','2026-05-02 13:05:29','2026-05-02 13:05:29'),(243,74,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777727206/pebtpam7it1s83j2quvj.webp','2026-05-02 13:06:47','2026-05-02 13:08:50','2026-05-02 13:08:50'),(244,75,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif','2026-05-02 13:31:48','2026-05-02 13:32:11','2026-05-02 13:32:11'),(245,75,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif','2026-05-02 13:32:11','2026-05-02 14:01:21','2026-05-02 14:01:21'),(246,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp','2026-05-02 13:50:37','2026-05-02 13:51:27','2026-05-02 13:51:27'),(247,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp','2026-05-02 13:51:27','2026-05-02 14:08:43','2026-05-02 14:08:43'),(248,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp','2026-05-02 13:51:27','2026-05-02 14:08:43','2026-05-02 14:08:43'),(249,75,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777728707/w51lmjofr2pb46ybmfpm.avif','2026-05-02 14:01:21','2026-05-02 14:01:21',NULL),(250,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp','2026-05-02 14:08:43','2026-05-04 14:10:30','2026-05-04 14:10:30'),(251,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp','2026-05-02 14:08:43','2026-05-04 14:10:30','2026-05-04 14:10:30'),(252,77,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900061/orovqvrwm3s8jxan8m4k.webp','2026-05-04 13:07:42','2026-05-04 13:07:42',NULL),(253,77,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900062/knsrdtwprehuid21ba6z.webp','2026-05-04 13:07:42','2026-05-04 13:07:42',NULL),(254,55,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1776434608/yt3lf86bjrakqpu00vv2.webp','2026-05-04 13:08:52','2026-05-04 13:12:47','2026-05-04 13:12:47'),(255,55,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900366/tsolamsu4amhnktjhkip.webp','2026-05-04 13:12:47','2026-05-04 13:12:47',NULL),(256,55,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777900366/r44d56gjbyiihx6ezypf.webp','2026-05-04 13:12:47','2026-05-04 13:12:47',NULL),(257,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729836/nca4vwlcusvmm1z5hcdq.webp','2026-05-04 14:10:30','2026-05-04 14:10:30',NULL),(258,76,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777729886/tqm6qx14ol0eyolbmdz9.webp','2026-05-04 14:10:30','2026-05-04 14:10:30',NULL),(259,78,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/yqidxxvoqeagzfwdeldr.webp','2026-05-05 04:20:42','2026-05-05 04:20:42',NULL),(260,78,'https://res.cloudinary.com/dt5rqi1l9/image/upload/v1777954841/p2p12tuxkechflser04n.webp','2026-05-05 04:20:43','2026-05-05 04:20:43',NULL);
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `discount` decimal(5,2) NOT NULL DEFAULT '0.00',
  `movie_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_movie_id_foreign` (`movie_id`),
  CONSTRAINT `products_movie_id_foreign` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Totoro figure','A heat-resistant spatula featuring everyone\'s favorite fire demon.',22.70,50,0.00,2,'2026-04-17 05:12:50','2026-04-17 14:43:47',NULL),(5,'Totoro stuff','Nice Stuff',17.00,80,10.00,6,'2026-04-17 11:57:12','2026-04-19 12:28:50',NULL),(6,'Ghibli pillow','Very soft pillow.',29.00,300,2.00,2,'2026-04-17 14:03:29','2026-04-17 14:03:29',NULL),(7,'Kiki Calendar','Very nice calendar.',20.00,410,3.00,4,'2026-04-17 14:12:13','2026-04-24 03:14:19',NULL),(9,'Totoro Bag','Cute and nice nag',49.00,11,20.00,1,'2026-04-17 22:42:04','2026-04-23 12:54:31',NULL),(10,'Cute bag and figure','Nice charaters',28.00,39,10.00,3,'2026-04-17 22:43:24','2026-04-23 12:54:31',NULL),(11,'Calcifier','Cute fire',20.00,299,10.00,3,'2026-04-17 22:44:03','2026-05-02 11:57:15',NULL),(12,'Ponyo earphone','Convenient and cute stuff',124.87,38,10.00,5,'2026-04-17 22:55:56','2026-04-24 03:14:19',NULL),(13,'Nice Keychain','Molestias quod ipsum aut est quo consectetur. Iusto sed voluptatem nihil ut. Eaque et deserunt ab. Reprehenderit voluptate qui saepe dolorem optio officia ex officia.',12.00,24,10.00,2,'2026-04-17 22:55:56','2026-04-23 12:44:28',NULL),(14,'Cute Calcifier','Soft and nice for decoration',15.00,30,10.00,2,'2026-04-17 22:55:56','2026-04-23 05:51:01',NULL),(15,'Assumenda maiores velit explicabo.','Excepturi voluptas quo voluptas consequuntur. Nam explicabo voluptas ipsam laudantium in. Et nostrum eum libero. Aperiam aspernatur officiis quibusdam esse enim in voluptas.',19.00,200,2.00,6,'2026-04-17 22:55:56','2026-04-18 10:34:55',NULL),(17,'Vitae similique ea quasi.','Aut eveniet totam alias exercitationem sapiente necessitatibus ipsa. Cupiditate aut et velit quos voluptas. Quasi aut occaecati quae qui hic quaerat id. Nemo molestiae voluptas sed delectus.',175.35,0,0.00,3,'2026-04-17 22:55:56','2026-05-02 11:57:39','2026-05-02 11:57:39'),(18,'Cute Figure','A rerum tempore sit. Voluptates quisquam vitae inventore commodi tempora et nihil voluptatem.',42.16,21,0.00,2,'2026-04-17 22:55:56','2026-04-24 03:42:20',NULL),(19,'Light fire','Distinctio necessitatibus nesciunt excepturi molestias corporis architecto est. Tempora voluptas unde consectetur nesciunt. Vitae nihil cumque perspiciatis.',28.00,24,5.00,2,'2026-04-17 22:55:56','2026-04-30 15:19:20',NULL),(20,'CatBus','Eius quis voluptate ut. Quidem veritatis iure iste non veritatis sint consequatur. Dolorum rerum commodi in eum possimus temporibus eos.',35.39,8,5.00,2,'2026-04-17 22:55:56','2026-04-24 03:52:29',NULL),(21,'Dust bunny bag','Amet distinctio recusandae quia dolor pariatur repudiandae voluptates. Beatae rerum corporis sint debitis. Sequi libero accusantium eum fuga molestias.',166.07,27,5.00,2,'2026-04-17 22:55:56','2026-04-24 03:52:56',NULL),(22,'Cute pencil case','Very nice stuff for kid',6.00,19,15.00,3,'2026-04-17 22:57:39','2026-04-24 03:50:53',NULL),(23,'Small characters','Voluptas repudiandae incidunt repellat quisquam. Consectetur delectus rerum esse in quam. Debitis quis rerum dicta temporibus.',131.54,42,15.00,3,'2026-04-17 22:57:39','2026-04-24 03:51:52',NULL),(24,'Playing Calcifier','Nihil eveniet labore nobis quibusdam. Quam veritatis minima quos dolor eius sapiente. Quod quam facere explicabo et. Iure qui nobis cumque tempora voluptatem fugiat. Rerum nisi voluptas molestias rerum enim beatae blanditiis.',43.33,43,10.00,3,'2026-04-17 22:57:39','2026-05-04 15:23:06',NULL),(25,'Kid bag','Voluptatem autem voluptatem sed est. Deserunt nostrum autem est aliquam quae iste. Sint doloribus dolor dolor et similique asperiores officia quia.',23.85,19,15.00,3,'2026-04-17 22:57:39','2026-05-02 11:56:25',NULL),(26,'Anime pillow','Natus reiciendis quis illum et non pariatur libero. Ullam consectetur ad rem quod. Voluptate molestiae laborum est sint beatae unde saepe inventore.',111.99,2,15.00,3,'2026-04-17 22:57:39','2026-04-24 03:50:33',NULL),(27,'Totoro wallet','Dolore voluptatem voluptatem a dolorem culpa. Eum optio pariatur odit omnis voluptas sed. Perferendis vitae pariatur excepturi inventore quam sint veritatis. Reprehenderit voluptas culpa repellendus dolor incidunt veniam.',15.00,450,10.00,3,'2026-04-17 22:57:39','2026-05-01 02:54:32',NULL),(28,'Noface Light','Ipsa ratione quia vitae vitae. Voluptatum recusandae et dolores omnis quibusdam consequatur dicta. Totam optio voluptatem aut vero. Recusandae fuga magnam nesciunt ut.',103.33,16,10.00,3,'2026-04-17 22:57:39','2026-04-24 03:53:28',NULL),(29,'Small figure','Aut ducimus eius vel maiores dolorum voluptatem ut. Error voluptatem et laboriosam voluptatibus.',167.63,37,5.00,3,'2026-04-17 22:57:39','2026-04-24 03:48:15',NULL),(30,'Anime collection','Qui voluptas amet totam error quo. Quia alias consequatur iure dolorem nam id. Deleniti id assumenda non blanditiis earum accusantium.',127.68,20,0.00,3,'2026-04-17 22:57:39','2026-05-02 11:57:15',NULL),(31,'Nice Calendar','Beatae quia alias sunt et. Quis libero aperiam minima. Occaecati sint aut quasi deleniti qui commodi optio.',96.62,36,15.00,3,'2026-04-17 22:57:39','2026-04-24 03:49:27',NULL),(32,'Cute character keychain','Super cute and small keychain for everyone',27.00,5,15.00,3,'2026-04-17 22:58:41','2026-04-24 03:43:31',NULL),(33,'Black Cat','Omnis sapiente magni itaque eos. Veniam quia id dolor explicabo. Illo ut quisquam quia enim eveniet.',23.00,21,5.00,4,'2026-04-17 22:58:41','2026-05-05 04:19:26','2026-05-05 04:19:26'),(34,'JiJi cat','Soft black cat',138.51,8,5.00,4,'2026-04-17 22:58:41','2026-04-18 14:28:44',NULL),(35,'JiJi and friend','Ipsam odio adipisci quia. Aperiam quis sunt placeat. Distinctio perferendis quisquam recusandae consequatur aut.',79.40,23,0.00,4,'2026-04-17 22:58:41','2026-04-24 03:46:23',NULL),(36,'Kiki','Labore est architecto non quibusdam. Eligendi enim et mollitia velit. Inventore et vitae nulla maiores. Quos vero delectus excepturi quos repellendus blanditiis iusto. Nulla accusamus rerum voluptas nesciunt dolor.',140.49,41,5.00,4,'2026-04-17 22:58:41','2026-04-24 03:46:54',NULL),(37,'No face','Libero nam eveniet non in. Quas modi est sit quod. Et inventore ipsa ut et iste. Nostrum ratione architecto perspiciatis impedit reprehenderit cumque et.',123.48,26,0.00,4,'2026-04-17 22:58:41','2026-04-24 03:39:39',NULL),(38,'Et qui nihil enim.','Placeat blanditiis qui ex consequatur et. Dolorem quos voluptas iure laudantium inventore voluptatem laudantium. At rerum repellat aperiam tempora. Sunt et est quia dicta et dolor. Excepturi amet nihil dolore delectus at.',192.85,17,15.00,4,'2026-04-17 22:58:41','2026-05-02 11:54:52','2026-05-02 11:54:52'),(39,'Pillow with ears','Quidem incidunt voluptates omnis sapiente cupiditate ex odio. Consequatur debitis blanditiis et ea sit repudiandae. Ducimus nihil quidem aut quod soluta odio ullam. Distinctio explicabo impedit autem omnis perspiciatis qui.',194.57,45,0.00,4,'2026-04-17 22:58:41','2026-04-24 03:54:18',NULL),(40,'Cat JiJi and catbus','Eos unde aut voluptates. At voluptatibus dolor explicabo autem tempore. Beatae et recusandae esse. Totam rerum sint eligendi. Doloremque architecto eum voluptas esse sint possimus.',120.08,22,15.00,4,'2026-04-17 22:58:41','2026-04-24 03:41:13',NULL),(41,'Blind box','Aut voluptatem voluptatibus velit non. Libero rerum assumenda illo error tenetur quis voluptatibus nostrum. Unde ipsum eos ipsam quos explicabo. Quam tenetur et voluptates qui.',105.23,3,5.00,4,'2026-04-17 22:58:41','2026-04-24 03:40:06',NULL),(42,'Soft Pillow','Sunt aut amet et qui id harum quia id. Et iste quod molestiae necessitatibus quis quae. Et ut doloremque excepturi delectus non. Nemo sit reiciendis et molestiae id consequatur cumque.',134.29,37,15.00,5,'2026-04-17 22:59:06','2026-05-05 05:29:35',NULL),(43,'Moving castle','Voluptatem expedita perferendis aut dolor consequatur et ut autem. Voluptates ratione facilis voluptatibus est earum a. Aut provident autem deleniti eveniet officia tempora vel. Voluptas molestiae accusamus aut doloribus.',29.41,13,10.00,5,'2026-04-17 22:59:06','2026-04-24 03:28:02',NULL),(44,'Dust bunny','Ipsa qui voluptatibus fugiat consectetur consectetur quia distinctio voluptas. Et sint eaque harum est vero.',61.97,300,5.00,5,'2026-04-17 22:59:06','2026-04-24 12:17:30',NULL),(45,'Nice bag','Quisquam omnis vitae consequatur qui. Cum unde tempora aliquid molestias sed. Nostrum voluptates molestias et aliquam est.',103.87,392,15.00,5,'2026-04-17 22:59:06','2026-05-05 05:30:14',NULL),(46,'Cum perferendis ipsam.','Deserunt magni minima fugit fuga voluptatem sit similique. Consequatur sequi possimus ut qui accusamus ipsam animi voluptatum.',52.38,100,15.00,5,'2026-04-17 22:59:06','2026-04-24 12:17:08',NULL),(47,'Soft fire','Harum et illo soluta. Cumque velit fugiat ex ipsam dolor qui aliquid doloribus. Quia voluptatibus sed voluptatem sint. Quas magnam consequuntur explicabo omnis ex optio.',46.33,40,15.00,5,'2026-04-17 22:59:06','2026-04-24 12:17:39',NULL),(48,'Dignissimos quidem harum aut.','In aut dignissimos est optio nisi voluptatum eaque. Quo asperiores labore et natus pariatur ducimus. Quam maiores reprehenderit dolor minima asperiores velit suscipit. Aperiam beatae vitae distinctio voluptatem maiores voluptatibus. Quisquam repellendus tenetur omnis qui deleniti dolores.',102.80,400,0.00,5,'2026-04-17 22:59:06','2026-05-02 13:29:29','2026-05-02 13:29:29'),(49,'Calcifier','Nobis et quidem culpa autem in nostrum. Natus porro aliquid iste est voluptatum et quis. Dolor odit cum nemo et atque. Et eaque nulla dolorem id officiis.',24.87,70,15.00,5,'2026-04-17 22:59:06','2026-04-24 12:18:10',NULL),(50,'Black stuff','Ipsum error et asperiores sit perspiciatis iure voluptatem mollitia. Ut in sit omnis velit omnis nisi. Qui non error necessitatibus aliquam recusandae aspernatur. Facilis molestiae rem error sed.',18.54,500,0.00,5,'2026-04-17 22:59:06','2026-04-24 12:17:48',NULL),(51,'Ponyo','Corrupti nemo voluptatem vel excepturi. Laborum ut ratione reprehenderit dolore quo cumque. Rerum assumenda porro odit numquam.',86.18,45,10.00,5,'2026-04-17 22:59:06','2026-04-24 03:55:45',NULL),(52,'Mei','Voluptates dolore voluptas temporibus vitae repellendus quia. Ipsam omnis aut delectus fugit. Quaerat aut ratione ducimus magnam et. Sunt modi neque possimus architecto.',33.00,42,5.00,6,'2026-04-17 22:59:48','2026-05-04 15:23:06',NULL),(53,'Ad ad neque qui.','Ratione nihil qui possimus et cum. Dolore laboriosam aliquam corrupti saepe. Et ea minus vel dignissimos earum voluptas.',166.80,79,0.00,6,'2026-04-17 22:59:48','2026-04-30 06:55:45',NULL),(54,'Soft Pillow','Eum ea ex sapiente eos consequatur fugiat eum fugiat. Ex dolor enim est labore odio dolor. Ratione est quis qui non ex rerum laborum.',183.17,33,10.00,1,'2026-04-17 22:59:48','2026-05-05 05:30:14',NULL),(55,'Mini pillow','Nemo saepe tempora maxime id enim. Totam molestiae temporibus est accusamus asperiores qui. Non deleniti commodi occaecati et nihil dolores unde veniam.',168.05,100,15.00,6,'2026-04-17 22:59:48','2026-05-04 13:08:52',NULL),(56,'Cartoon Puzzle','Spend your time on assembling this cute stuff',40.00,25,5.00,2,'2026-04-17 22:59:48','2026-04-30 15:14:24',NULL),(57,'KiKi','Cum qui quod sapiente doloribus. Non et culpa ut unde quos. Natus veritatis suscipit officiis dignissimos earum. Illum adipisci nihil dicta.',18.11,298,15.00,6,'2026-04-17 22:59:48','2026-04-30 06:55:45',NULL),(58,'Character clock','Qui dicta libero voluptas et ipsam qui. Et ut velit sint nemo rerum aperiam cupiditate. Nam velit veniam amet saepe. Animi id quos deserunt sit incidunt.',55.34,501,5.00,6,'2026-04-17 22:59:48','2026-04-24 12:16:51',NULL),(59,'Soft Totoro shoes','Voluptatibus qui tempora pariatur perspiciatis ut rerum. Rerum velit dolore molestias. Sapiente et necessitatibus deleniti quis laudantium suscipit. Pariatur quis cupiditate autem vero minima eos necessitatibus.',115.21,16,10.00,1,'2026-04-17 22:59:48','2026-05-05 05:30:14',NULL),(62,'Cat bus','Very cute syuff',17.00,178,0.00,3,'2026-04-18 10:06:38','2026-05-04 13:00:07',NULL),(63,'Cute light','Nice and special',71.00,86,0.00,3,'2026-04-18 10:10:14','2026-05-05 05:29:35',NULL),(64,'Special bag','big bag',190.00,87,0.00,5,'2026-04-18 10:11:10','2026-04-23 03:48:45',NULL),(65,'Cute bunny','soft and furry',8.00,89,0.00,1,'2026-04-18 10:11:52','2026-05-04 13:09:25',NULL),(66,'Cute pillow and no face','Good for decoration',24.00,80,11.00,6,'2026-04-18 12:49:22','2026-04-30 15:26:29',NULL),(67,'Totoro Characters','Cute design',40.00,299,0.00,1,'2026-04-18 14:00:52','2026-05-02 15:26:48',NULL),(68,'Kiki picture','Signature picture',18.00,40,0.00,4,'2026-04-18 14:02:43','2026-04-24 12:16:13',NULL),(69,'Castle pillow','Very beautiful',27.00,300,6.00,6,'2026-04-18 14:04:18','2026-04-24 12:16:04',NULL),(70,'No face','No face pillow',19.00,229,0.00,2,'2026-04-20 05:07:58','2026-05-05 05:30:14',NULL),(71,'Totoro hair band','Very soft and cute design',34.00,599,13.00,1,'2026-04-23 13:29:22','2026-05-04 13:00:07',NULL),(72,'Cute characters','Good for play or decoration',34.00,300,0.00,5,'2026-05-02 11:56:02','2026-05-02 12:39:51','2026-05-02 12:39:51'),(73,'Cat calendar','For JiJi fan',45.00,300,0.00,1,'2026-05-02 13:04:46','2026-05-02 13:05:29','2026-05-02 13:05:29'),(74,'Ceramic bow','For Calcifier fan',55.00,298,0.00,3,'2026-05-02 13:06:47','2026-05-02 13:08:50','2026-05-02 13:08:50'),(75,'Cute characters','Nice stuff for fan',30.00,897,20.00,5,'2026-05-02 13:31:48','2026-05-02 15:24:45',NULL),(76,'Nice calendar','for KiKi fan',71.00,20,0.00,1,'2026-05-02 13:50:37','2026-05-04 14:10:30',NULL),(77,'Cuttie decoration','Very good quality',38.00,89,18.00,6,'2026-05-04 13:07:42','2026-05-04 13:07:42',NULL),(78,'Soft cat bus','Super cute item',33.00,73,20.00,1,'2026-05-05 04:20:42','2026-05-05 05:29:35',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `tr_AfterProductPriceUpdate` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    -- Only log if the price or discount actually changed
    IF OLD.price <> NEW.price OR OLD.discount <> NEW.discount THEN
        INSERT INTO price_logs (
            product_id, 
            old_price, 
            new_price, 
            old_discount, 
            new_discount, 
            changed_by, 
            created_at
        )
        VALUES (
            OLD.id, 
            OLD.price, 
            NEW.price, 
            OLD.discount, 
            NEW.discount, 
            @current_user_id,
            NOW()
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `audit_products_update` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    INSERT INTO audit_logs (
        user_id, 
        action, 
        table_name, 
        record_id, 
        old_values, 
        new_values, 
        created_at, 
        updated_at
    ) 
    VALUES (
        @current_user_id,        
        'updated', 
        'products',             
        OLD.id, 
        JSON_OBJECT('price', OLD.price, 'title', OLD.title, 'discount', OLD.discount, 'description', OLD.description, 'stock', OLD.stock, 'movie_id', OLD.movie_id),
        JSON_OBJECT('price', NEW.price, 'title', NEW.title, 'discount', NEW.discount, 'description', NEW.description, 'stock', NEW.stock, 'movie_id', NEW.movie_id),
        NOW(), 
        NOW()
    );
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `audit_products_soft_delete` AFTER UPDATE ON `products` FOR EACH ROW BEGIN
    -- 1. Check if the product was Soft Deleted
    IF OLD.deleted_at IS NULL AND NEW.deleted_at IS NOT NULL THEN
        INSERT INTO audit_logs (
            user_id, 
            action, 
            table_name, 
            record_id, 
            old_values, 
            new_values, 
            created_at, 
            updated_at
        ) 
        VALUES (
            @current_user_id, 
            'soft_deleted', 
            'products', 
            NEW.id, 
            JSON_OBJECT('name', OLD.title, 'deleted_at', OLD.deleted_at), 
            JSON_OBJECT('name', NEW.title, 'deleted_at', NEW.deleted_at), 
            NOW(), 
            NOW()
        );
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('5CLTsLoCM0px97Bt29yj6lSS1p0yR12Yc9k2OWgE',NULL,'172.23.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36','eyJfdG9rZW4iOiJMN29adE1IZVJaTW04T2ROQVk1cUhneHkzSmgydFAxMTB4MzZRWEpMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==',1776344962),('RJjBlVmbAaBztJEnQ7Iblyi4bxuozSsvkxO1wQVD',NULL,'172.21.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36','eyJfdG9rZW4iOiI3NjVkZFlwRVBpekp0dldmNDlmc1dmQUlHSVI2NkdSRWxZZnBNU3JzIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsInJvdXRlIjpudWxsfSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==',1776320083);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nguyen','nguyen@example.com','$2y$12$mg83ZRe0KyIbOREdldjDtOpYjvpj.f8C4fv2sPQ3ea1zsPyVJki8.','user',NULL,NULL,NULL,NULL,'2026-04-16 06:19:02','2026-04-16 06:19:02'),(2,'Pikachu','user12@gmail.com','$2y$12$tocuSCvS6k52qOpKxy4t3OIQoyzzh1sF6EkW9Rnuiv0LSXQAEcmna','user','71 Tana, Kany','991999120',NULL,NULL,'2026-04-16 13:28:22','2026-05-04 13:01:24'),(3,'Cute Cate','user13@gmail.com','$2y$12$xnc0ufZfO4A/X3jS51aqRuc2metDaqAsrSn1yADwPQvupsaX7A6Ne','user',NULL,NULL,NULL,NULL,'2026-04-16 14:10:29','2026-04-16 14:10:29'),(4,'Cute Dog','user14@gmail.com','$2y$12$60G4YBF1zIO/m3MVA1wU8uz/lT/hQIhidgs9Phw4wQOwMlKGBEazS','user','199 AD North, LA','39918881',NULL,NULL,'2026-04-16 14:19:45','2026-04-30 06:55:45'),(5,'mimi haha','user16@gmail.com','$2y$12$WRrlZY9kZJ3dgF/cjrXETeQX1jIHLkvJFw4.4nbVurv49BGNDat2i','user','12 ABC, DC','71111811',NULL,NULL,'2026-04-16 14:25:00','2026-04-23 12:44:28'),(6,'Nice corn','user18@gmail.com','$2y$12$byjalXrER1fK5lrLxbxA3eDiyDlBhA8m1.9hTj4uzRZTNAyitMeoO','user','90 ER Laha, QA','881999191',NULL,NULL,'2026-04-17 02:45:23','2026-05-04 15:23:06'),(7,'admin','admin@gmail.com','$2y$12$23otkuf4YYl5d5505P9x3.ogDsrQKG4ARfO5/vqrrZoOYNh0eEzNy','admin','221 Blank Home','781110011',NULL,NULL,'2026-04-17 03:31:33','2026-05-05 04:26:42'),(8,'Buble Tree','user20@gmail.com','$2y$12$eK7qBaQvM5T8S2KtDTmqmefv1/reCMdp6D/LmNdPT0HpacdlVI646','user',NULL,NULL,NULL,NULL,'2026-04-24 11:31:41','2026-04-24 11:31:41'),(9,'Sunny','user100@gmail.com','$2y$12$hxEdaDSjMBTMZKcSPs9YauMLBOAvUdZugugVcJaCx5XrZszurhBzu','user','90 Home, Kimi','788119991',NULL,NULL,'2026-05-05 05:28:43','2026-05-05 05:30:14'),(10,'Misi Na','user40@gmail.com','$2y$12$JrRv4Oq4ouCr8qOFZNzlquYjoNSW5J4nQ7AJjl2JG6N1mwo0PDtM2','user',NULL,NULL,NULL,NULL,'2026-05-05 05:32:42','2026-05-05 05:32:42'),(11,'Honey Moon','user30@gmail.com','$2y$12$OdDyXsWk90T5GpTd7OKQIuXvqbdAm..1cau8yJkOxHWUaAtuvHsmm','user',NULL,NULL,NULL,NULL,'2026-05-05 05:33:20','2026-05-05 05:33:20'),(12,'Capypara','user39@gmail.com','$2y$12$y5X6Q48ys6Azqo4saGdr1OgPh4LSokl3/aOnIEwjgrJkT46oE2xpC','user',NULL,NULL,NULL,NULL,'2026-05-05 05:33:54','2026-05-05 05:33:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlists` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `product_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wishlists_user_id_product_id_unique` (`user_id`,`product_id`),
  KEY `wishlists_product_id_foreign` (`product_id`),
  CONSTRAINT `wishlists_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `wishlists_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ghibli_backend'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_DecrementProductStockAfterOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sail`@`%` PROCEDURE `sp_DecrementProductStockAfterOrder`(
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_current_stock INT;

    -- 1. Get current stock
    SELECT stock INTO v_current_stock 
    FROM products 
    WHERE id = p_product_id;

    -- 2. Check if we have enough
    IF v_current_stock < p_quantity THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient stock levels for this operation.';
    ELSE
        -- 3. Perform the decrement
        UPDATE products 
        SET stock = stock - p_quantity,
            updated_at = NOW()
        WHERE id = p_product_id;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_GetCartTotal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sail`@`%` PROCEDURE `sp_GetCartTotal`(
    IN p_cart_id INT,
    OUT p_total_amount DECIMAL(10,2)
)
BEGIN
    -- We use SUM to aggregate the price of each item
    -- Calculation: (Quantity * Price) - Discount
    SELECT SUM(ci.quantity * p.price * (1 - p.discount / 100))
    INTO p_total_amount
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.id
    WHERE ci.cart_id = p_cart_id;

    -- Safety check: If the cart is empty, SUM returns NULL. 
    -- We should return 0.00 instead.
    IF p_total_amount IS NULL THEN
        SET p_total_amount = 0.00;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_PlaceOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_PlaceOrder`(
    IN p_user_id BIGINT,
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_address VARCHAR(255),
    IN p_cart_id BIGINT,
    OUT p_new_order_id BIGINT
)
BEGIN
	DECLARE v_calculated_total DECIMAL(10,2);
    DECLARE v_new_order_id BIGINT;
	DECLARE v_delivery_fee DECIMAL(8,2);

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK; -- Rollback if any error occurs
    END;

    START TRANSACTION;
    	-- 1. Calculate total_amount
    	CALL sp_GetCartTotal(p_cart_id, v_calculated_total);
    
    	IF v_calculated_total < 50 THEN
        SET v_delivery_fee = 20;
	    ELSE
	        SET v_delivery_fee = 0;
	    END IF;
    
        -- 2. Create the order record
        INSERT INTO orders (
			user_id,
			name, 
			email, 
			phone_number, 
			shipping_address, 
			total_amount, 
			delivery_fee,
			status, 
			payment_method, 
			payment_status,
			created_at,
			updated_at
		)
        VALUES (
        	p_user_id, 
        	p_name, 
        	p_email, 
        	p_phone, 
        	p_address, 
        	v_calculated_total,
        	v_delivery_fee,
        	'pending', 
        	'cash',
        	'unpaid',
        	NOW(), 
        	NOW()
        );
        SET v_new_order_id = LAST_INSERT_ID();

        -- 3. Create order items
        CALL sp_ProcessOrderItems(v_new_order_id, p_cart_id);

        -- 4. Clear the user's cart or guest cart after placing the order
        DELETE FROM carts WHERE id = p_cart_id;

    	-- 5. Update User Profile if user_id is provided (equivalent to if($user))
	    IF p_user_id IS NOT NULL THEN
	        UPDATE users 
	        SET phone = p_phone, 
	            address = p_address,
	            updated_at = NOW()
	        WHERE id = p_user_id;
	    END IF;
    
        SET p_new_order_id = v_new_order_id;
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_ProcessOrderItems` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sail`@`%` PROCEDURE `sp_ProcessOrderItems`(
    IN p_order_id INT,
    IN p_cart_id INT
)
BEGIN
    -- 1. Declare variables to hold data for each row
    DECLARE v_product_id INT;
    DECLARE v_quantity INT;
    DECLARE v_stock INT;
    DECLARE v_price DECIMAL(10,2);
    DECLARE v_discount DECIMAL(5,2);
    DECLARE v_product_name VARCHAR(255);
    DECLARE v_done INT DEFAULT 0;

    -- 2. Declare the Cursor to select items from the user's cart
    DECLARE cart_cursor CURSOR FOR 
        SELECT ci.product_id, ci.quantity, p.stock, p.price, p.discount, p.title
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.cart_id = p_cart_id;

    -- 3. Declare a handler to stop the loop when no more rows are found
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET v_done = 1;

    -- Standard Error Handling
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL; -- Pass the error back to Laravel
    END;

    START TRANSACTION;
        OPEN cart_cursor;

        -- 4. Start the Loop
        read_loop: LOOP
            FETCH cart_cursor INTO v_product_id, v_quantity, v_stock, v_price, v_discount, v_product_name;
            
            IF v_done THEN
                LEAVE read_loop;
            END IF;

            -- 5. Update Product stock
           	CALL sp_DecrementProductStockAfterOrder(v_product_id, v_quantity);
            
            -- 6. Insert OrderItem (Calculating discounted price)
            INSERT INTO order_items (order_id, product_id, quantity, price, created_at, updated_at)
            VALUES (
                p_order_id, 
                v_product_id, 
                v_quantity, 
                v_price * (1 - v_discount / 100), 
                NOW(), 
                NOW()
            );
        END LOOP;

        CLOSE cart_cursor;
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-05  5:58:56
