-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT 'no name',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `description` varchar(45) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'columbia',0,100.00,'смотреть','./img/brands_logo/columbia.jpeg'),(2,'adidas',0,100.00,'смотреть','./img/brands_logo/adidas.jpg'),(3,'nike',0,100.00,'смотреть','./img/brands_logo/nike_jondan.jpg'),(4,'asics',0,100.00,'смотреть','./img/brands_logo/asics.jpg'),(5,'cat',0,100.00,'смотреть','./img/brands_logo/cat.png'),(6,'converse',0,100.00,'смотреть','./img/brands_logo/converse.png'),(7,'fila',0,100.00,'смотреть','./img/brands_logo/fila.jpg'),(8,'meller',0,100.00,'смотреть','./img/brands_logo/meller.png'),(9,'new balance',0,100.00,'смотреть','./img/brands_logo/new balance.png'),(10,'pumma',0,100.00,'смотреть','./img/brands_logo/pumma.jpg'),(11,'salomon',0,100.00,'смотреть','./img/brands_logo/salomon.png'),(12,'saucony',0,100.00,'sport shose','./img/brands_logo/saucony.jpg'),(13,'timberland',0,100.00,'смотреть','./img/brands_logo/timberland.png'),(15,'timberland',0,100.00,NULL,'./img/brands_logo/timberland.png');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-24 20:13:03
