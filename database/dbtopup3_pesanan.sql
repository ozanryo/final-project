-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: dbtopup3
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
-- Table structure for table `pesanan`
--

DROP TABLE IF EXISTS `pesanan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pesanan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `produk` int DEFAULT NULL,
  `provider` varchar(45) DEFAULT NULL,
  `tagihan` double DEFAULT NULL,
  `metode` varchar(45) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pesanan`
--

LOCK TABLES `pesanan` WRITE;
/*!40000 ALTER TABLE `pesanan` DISABLE KEYS */;
INSERT INTO `pesanan` VALUES (24,'Ozan997','0822943256',3,'Indosat',53500,'wallet',1),(25,'Ozan997','0822943256',3,'Indosat',53500,'wallet',1),(26,'Ozan997','0821943256',3,'Telkomsel',53250,'wallet',1),(27,'Ozan997','0821943256',3,'Telkomsel',53250,'wallet',1),(28,'Ozan997','0821943256',3,'Telkomsel',53250,'wallet',1),(29,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(30,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(31,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(32,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(33,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(34,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(35,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(36,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(37,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(38,'Ozan997','0821943256',3,'Telkomsel',53250,'virtual account',1),(39,'ThereAyu12','08229432778',3,'Indosat',53500,'wallet',1),(40,'ThereAyu12','08229432778',3,'Indosat',53500,'wallet',1),(41,'ThereAyu12','08229432778',3,'Indosat',53500,'wallet',1),(42,'ThereAyu12','08229432778',4,'Indosat',102500,'virtual account',1),(43,'ThereAyu12','08229432778',4,'Indosat',102500,'virtual account',1),(44,'ThereAyu12','08229432778',3,'Indosat',53500,'wallet',1),(45,'ThereAyu12','08229432778',1,'Indosat',12250,'wallet',1),(46,'ThereAyu12','08229432778',2,'Indosat',22350,'wallet',1),(47,'ThereAyu12','08229432778',4,'Indosat',102500,'wallet',1),(48,'ThereAyu12','08229432778',2,'Indosat',22350,'wallet',1),(49,'ThereAyu12','08219422778',2,'Telkomsel',22750,'wallet',1),(50,'ThereAyu12','08219422778',2,'Telkomsel',22750,'wallet',1),(51,'ThereAyu12','08219422778',2,'Telkomsel',22750,'wallet',1),(52,'ThereAyu12','08219422778',1,'Telkomsel',13550,'wallet',1),(53,'ThereAyu12','08229432778',4,'Indosat',102500,'virtual account',1),(54,'ThereAyu12','08219422778',1,'Telkomsel',13550,'wallet',1),(55,'ThereAyu12','08229432778',4,'Indosat',102500,'virtual account',1),(56,'ThereAyu12','08219422778',1,'Telkomsel',13550,'wallet',1),(57,'ThereAyu12','08219422778',1,'Telkomsel',13550,'wallet',1),(58,'Ozan997','08219422778',1,'Telkomsel',13550,'wallet',1),(59,'Ozan997','08212312312',0,'Telkomsel',0,'wallet',1),(60,'Ozan997','0821231212',0,'Telkomsel',0,'wallet',1),(61,'Ozan997','082121212',2,'Telkomsel',22750,'virtual-account',1),(62,'Ozan997','08212121212',2,'Telkomsel',22750,'virtual account',1),(63,'Ozan997','082121231212',2,'Telkomsel',22750,'virtual account',1),(64,'Ozan997','082111212312',0,'Telkomsel',0,'wallet',1),(65,'Ozan997','0821212123',0,'Telkomsel',0,'wallet',1),(66,'Ozan997','08229432778',4,'Indosat',102500,'virtual account',1),(67,'Ozan997','08219422778',1,'Telkomsel',0,'wallet',1),(68,'Ozan997','08212123121',2,'Telkomsel',0,'virtual account',1),(69,'Ozan997','08212121231',3,'Telkomsel',53250,'virtual account',1),(70,'Ozan997','082221231231',3,'Indosat',13550,'virtual account',1),(73,'Ozan997','082121231231',0,'Telkomsel',0,'wallet',1),(74,'Ozan997','0821212312',2,'Telkomsel',22750,'virtual account',1),(75,'Ozan997','0821212312',2,'Telkomsel',22750,'wallet',1),(76,'Ozan997','08223512312',2,'Indosat',22350,'virtual account',1),(77,'Ozan997','08213512312',3,'Telkomsel',53250,'virtual account',1),(78,'Ozan997','08213512312',2,'Telkomsel',22750,'wallet',1),(79,'Ozan997','082156732',2,'Telkomsel',22750,'wallet',1),(80,'Ozan997','0821432341',2,'Telkomsel',22750,'wallet',1),(81,'Ozan997','0821432341',2,'Telkomsel',22750,'wallet',1),(82,'Ozan997','0821432341',2,'Telkomsel',22750,'wallet',1),(83,'Ozan997','082123123',0,'Telkomsel',0,'wallet',1),(84,'Ozan997','08212312121',0,'Telkomsel',0,'wallet',1),(85,'Ozan997','0821231231',2,'Telkomsel',22750,'wallet',1),(86,'Ozan997','0821212155',2,'Telkomsel',22750,'wallet',1),(87,'Ozan997','0822312124',3,'Indosat',53500,'virtual account',1),(88,'Ozan997','08212412412',3,'Telkomsel',53250,'wallet',1),(89,'Ozan997','082123124124',4,'Telkomsel',103750,'virtual account',1),(90,'Ozan997','0822312124',3,'Indosat',53500,'wallet',1),(91,'Ozan997','082112312312',0,'Telkomsel',0,'virtual account',1),(92,'Ozan997','0821212121214',1,'Telkomsel',13550,'wallet',1),(93,'Ozan997','082145684',2,'Telkomsel',22750,'wallet',1),(94,'Ozan997','082145684',2,'Telkomsel',22750,'wallet',1),(95,'Ozan997','0822456987',1,'Indosat',12250,'wallet',1),(96,'Ozan997','08214568',1,'Telkomsel',13550,'wallet',1),(97,'Ozan997','08214568',1,'Telkomsel',13550,'wallet',1),(98,'Ozan997','0821456858',2,'Telkomsel',22750,'wallet',1),(99,'Ozan997','08214568758',1,'Telkomsel',13550,'wallet',1),(100,'Ozan997','08214568758',1,'Telkomsel',13550,'virtual account',1),(101,'Ozan997','0821569807',2,'Telkomsel',22750,'virtual account',1),(102,'Ozan997','0821569807',1,'Telkomsel',13550,'wallet',1),(103,'Ozan997','0821569807',2,'Telkomsel',22750,'',1),(104,'Ozan997','0821569807',2,'Telkomsel',22750,'wallet',1),(105,'Ozan997','08214780521',2,'Telkomsel',22750,'wallet',1),(106,'Ozan997','08214780521',2,'Telkomsel',22750,'wallet',1),(107,'Ozan997','08214780523',2,'Telkomsel',22750,'wallet',1),(108,'Ozan997','08214500789',2,'Telkomsel',22750,'wallet',1),(109,'Ozan997','082255550078',2,'Indosat',22350,'wallet',1),(110,'Ozan997','082145884',2,'Telkomsel',22750,'virtual account',1),(111,'Ozan997','08214568055',2,'Telkomsel',22750,'virtual account',1),(112,'Ozan997','08214568066',2,'Telkomsel',22750,'virtual account',1),(113,'Ozan997','08214568066',2,'Telkomsel',22750,'wallet',1);
/*!40000 ALTER TABLE `pesanan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-30  8:46:48
