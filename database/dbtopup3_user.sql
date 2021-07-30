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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `wallet` double DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Ozananda','Fachristiary','08119421231','Surabaya','Ozan@user.id','Ozan997','Ozan997?',65600,1),(2,'Aisyah','Maharani','0811943357','jakarta','Aisyah@user.id','Aisyah123','Aisyah123?',750000,1),(3,'Haryo','Cokrokusumo','08219432123','jakarta','HaryoBC@user.id','HaryoB123','HaryoB123?',1500000,0),(4,'Achmad','Gerwin','08119421231','Surabaya','Gerwin@user.id','GerwinLoli1','PedoGerwin?',357500,0),(5,'Kania','Intan','08219437891','bandung','Kania@user.id','BossKan12','BossKania12!',500000,0),(6,'Theresia','Ayu','08219457782','Jakarta','There.Ayu@user.id','ThereAyu12','ThereAyu124!',486450,1),(7,'Andika','Budiman','08229457653','Jakarta','And.Bud@user.id','Bud.And12','Bud.And12!',0,0),(8,'Andre','Gunawan','082123124','Manado','Andre@user.id','AndreGun123','AndreGun123?',0,0),(9,'Budi','Haryadi','082237421623','Makassar','Budi@user.id','BudiHar123','BudiHar123!',0,0),(10,'Lakshmi','Hanafiah','082152382','Surabaya','Lakshmi@user.id','Lakshmi123','Lakshmi123?',0,0),(11,'Bobby','Baskara','08212412412','Jakarta','Bobby@user.id','Bobby234','Bobby234?',0,0),(12,'Haesar','Prauditra','0825212312312','Manado','Haesar@user.id','Haesar666','Haesar666?',0,0),(13,'Handi','Effendi','0823123123','Jakarta','Handi@user.id','Handi997','Handi997?',0,0),(14,'Akbar','Muhammad','082123123123','Jakarta','Akbar@user.id','Akbar275','Akbar275!',0,0),(15,'Mohammad','Arie','08225574212','Yogyakarta','Arie.M@user.id','Arie.M123','Arie.M123?',0,0),(16,'Thomas','Saputra','08213757653','Jakarta','Thomas@user.id','Thomas123','Thomas123?',0,0),(17,'Hadi','Wijaya','0821569548','Jakarta','Hadi@user.id','Hadi997','Hadi997?',0,0),(18,'Patrio','Tarigan','082147596380','Jakarta','Pattar@user.id','Pattar123','Pattar123?',0,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-30  8:46:49
