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
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT 'no name',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `brandid` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model`
--

LOCK TABLES `model` WRITE;
/*!40000 ALTER TABLE `model` DISABLE KEYS */;
INSERT INTO `model` VALUES (97,'КРОССОВКИ ADIDAS TERREX AX3 MID GTX',0,2,384.00,'3230.1200x.jpeg','        Когда рельеф местности испытывает тебя и твою обувь на прочность, в этих кроссовках adidas Terrex AX3 Mid GORE-TEX ты будешь быстро и уверенно преодолевать все препятствия. Твои возможности бесконечны, когда есть надежное сцепление, водонепроницаемые материалы и устойчивость на любой поверхности и в любую погоду.'),(98,'КРОССОВКИ ADIDAS TERREX TRAILMAKER MID',0,2,350.00,'3228-2.1200x.jpeg','        Неважно, исследуешь ты городские улицы или отправляешься покорять новые тропы, эти легкие ботинки adidas для хайкинга обеспечат надежное сцепление с поверхностью. Комфортная и прочная модель поможет тебе держать темп на протяжении многих километров. Как будто тебе нужен был еще один повод, чтобы начать планировать новое путешествие. Качественные отделочные материалы, износостойкая цепкая подошва, и удобная колодка придадут вам уверенности при каждом шаге.'),(99,'КРОССОВКИ ADIDAS ORIGINALS ZX 500',0,2,220.00,'3214-6.1200x.jpeg','        ти кроссовки вдохновлены архивными моделями 80-х и 90-х, но выглядят как никогда актуально. Классический верх из текстиля и замши выполнен в серых оттенках. Винтажная модель предназначена для городских улиц. Высококачественные материалы отделки, и удобная колодка посадки ступни, придаст более еркие впечатления при повседневной носке.'),(100,'КРОССОВКИ NIKE LEGEND ESSENTIA',0,3,192.22,'3089.1200x.jpeg','        Новинка от компании Найк! Эти кроссовки прекрасно подходят для активного тренинга на любых поверхностях в сухих условиях. Двухслойная дышащая текстильная отделка верха, и анатомичная мягкая подошва с боковой поддержкой позволят ощутить комфорт при каждом шаге.'),(102,'КРОССОВКИ PUMA CELL MAGMA',0,10,210.00,'3091.1200x.jpeg','        Семейство технологий Cell получило потрясающее обновление в новой модели Cell Magma. Эта высокотехнологичная обновленная модель оснащена толстой, но легкой подошвой из EVA с увеличенным модулем 10Cell для обеспечения стабильной амортизации и исключительного комфорта.'),(104,'КРОССОВКИ ASICS ONITSUKA TIGER DELEGATION EX',0,4,342.00,'3103.1200x.jpeg','        Современное издание беговой модели Onitsuka Tiger Delegation 1964 года сочетает в себе архивный дизайн японского бренда с современным стилем, вдохновленным корнями Токио. Верх модели EX выполнен из высококачественной натуральной кожи. Все выдержано в белых тонах с синей и красной маркой Onitsuka Tiger.'),(105,'Columbia Firecamp Fleece III',0,1,170.00,'15663864495d5d29111a811_0820_010_1.jpg','        Мужские треккинговые кроссовки Columbia Firecamp Fleece III предназначены для активного отдыха и легкого туризма. Верх обуви изготовлен их плотного текстиля (CORDURA) с водоотталкивающей пропиткой'),(106,'КРОССОВКИ CATERPILLAR INTRUDER 01',0,5,345.00,'2893.1200x.jpeg','        Удобные и яркие кроссовки Caterpillar Intruder.  Рождены в 90-х. Для прохладной осени и суровых зим.\nБудем рады Вас видеть в наших магазинах Оффлайн. '),(107,'Converse Chuck Taylor All Star II Lunarlon High Top Grey',0,6,154.00,'CT-II-HI-THUNDER-WHITE-150147C_020_A_PREM-1-600x600.jpg','        Converse – культовые кеды: обувь, умудрившаяся оставаться популярной более 100 лет. Кеды носили представители молодежных субкультур, а позже освоили и звезды. До сих пор шиком считается прийти на красную ковровую дорожку в платье и слабозашнурованных «Конверсах». Эти кеды есть в наличии чуть ли не у каждой голливудской звезды.\n'),(109,'csfv',0,1,11.00,'Sports shoes in Minsk for you.htm',''),(110,'csfv',0,1,11.00,'Sports shoes in Minsk for you.htm',''),(111,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(112,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(113,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(114,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(115,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(116,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(117,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(118,'sdvdgd',0,1,3432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(119,'dghd',0,1,32432.00,'Screenshot 2020-11-10 at 19.25.46.png',''),(120,'mnljhiol',0,1,66.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(121,'mnljhiol',0,1,66.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(122,'mnljhiol',0,1,66.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(123,'mnljhiol',0,1,66.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(124,'mnljhiol',0,1,66.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(125,'sfsd',0,1,11.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(126,'weetywe',0,1,100.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(127,'weetywe',0,1,100.00,'Screenshot 2020-10-25 at 19.51.11.png',''),(128,'bdhgted',0,1,111.00,'Screenshot 2020-10-25 at 19.51.11.png','');
/*!40000 ALTER TABLE `model` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-24 20:13:04
