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
-- Table structure for table `newuser`
--

DROP TABLE IF EXISTS `newuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newuser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `verifcode` varchar(45) DEFAULT NULL,
  `verifstat` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newuser`
--

LOCK TABLES `newuser` WRITE;
/*!40000 ALTER TABLE `newuser` DISABLE KEYS */;
INSERT INTO `newuser` VALUES (1,'Fachristiary','Ozananda','jakarta','0821943267','Ozan@user.id','Ozan997','Ozan997?','5432',1),(2,'Maharani','Aisyah','jakarta','0811943357','Aisyah@user.id','Aisyah123','Aisyah123?','6986',1),(3,'Cokrokusumo','Haryo','jakarta','08219432123','HaryoBC@user.id','HaryoB123','HaryoB123?','9162',1),(4,'Gerwin','Achmad','jakarta','08119421231','Gerwin@user.id','GerwinLoli1','GerwinLoli1?','8867',1),(5,'Intan','Kania','bandung','08219437891','Kania@user.id','BossKan12','BossKania12!','3984',1),(6,'Ayu','Theresia','Jakarta','08219457782','There.Ayu@user.id','ThereAyu12','ThereAyu12!','6621',1),(8,'Budiman','Andika','Jakarta','08229457653','And.Bud@user.id','Bud.And12','Bud.And12!','4925',1),(12,'Gunawan','Andre','Manado','082123124','Andre@user.id','AndreGun123','AndreGun123?','3411',1),(13,'Haryadi','Budi','Makassar','082237421623','Budi@user.id','BudiHar123','BudiHar123!','5015',1),(14,'Hanafiah','Lakshmi','Surabaya','082152382','Lakshmi@user.id','Lakshmi123','Lakshmi123?','8901',1),(15,'Baskara','Bobby','Jakarta','08212412412','Bobby@user.id','Bobby234','Bobby234?','1794',1),(16,'Prauditra','Haesar','Manado','0825212312312','Haesar@user.id','Haesar666','Haesar666?','8583',1),(17,'Effendi','Handi','Jakarta','0823123123','Handi@user.id','Handi997','Handi997?','8668',1),(18,'Muhammad','Akbar','Jakarta','082123123123','Akbar@user.id','Akbar275','Akbar275!','4103',1),(19,'Arie','Mohammad','Yogyakarta','08225574212','Arie.M@user.id','Arie.M123','Arie.M123?','3765',1),(20,'Saputra','Thomas','Jakarta','08213757653','Thomas@user.id','Thomas123','Thomas123?','6209',1),(21,'Wijaya','Hadi','Jakarta','0821569548','Hadi@user.id','Hadi997','Hadi997?','2814',1),(22,'Tarigan','Patrio','Jakarta','082147596380','Pattar@user.id','Pattar123','Pattar123?','8284',1);
/*!40000 ALTER TABLE `newuser` ENABLE KEYS */;
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
