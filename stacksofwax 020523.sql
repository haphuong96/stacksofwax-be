-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 05:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stacksofwax`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `album_title` varchar(255) DEFAULT NULL,
  `release_year` int(11) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `album_title`, `release_year`, `img_path`, `country_id`, `created_datetime`) VALUES
(1, 'Dark Side of the Moon', 1973, 'https://i.scdn.co/image/ab67616d00001e02d3709135d1005baa36939d80', NULL, '2023-03-04 01:09:10'),
(2, 'Rumours', 1977, 'https://i.scdn.co/image/ab67616d00001e020001af4f80be77069fc8fd41', NULL, '2023-03-04 01:09:10'),
(3, 'Born to Run', 1975, 'https://i.scdn.co/image/ab67616d00001e02503143a281a3f30268dcd9f9', NULL, '2023-03-04 01:09:10'),
(4, 'Hotel California', 1976, 'https://i.scdn.co/image/ab67616d00001e025086c69825f3794affe955a7', NULL, '2023-03-04 01:09:10'),
(5, 'Led Zeppelin IV', 1971, 'https://i.scdn.co/image/ab67616d00001e024509204d0860cc0cc67e83dc', NULL, '2023-03-04 01:09:10'),
(6, 'Sticky Fingers', 1971, 'https://i.scdn.co/image/ab67616d00001e02a1d9c9969f2a7ed27e449a3c', NULL, '2023-03-04 01:09:10'),
(7, 'Court and Spark', 1974, 'https://i.scdn.co/image/ab67616d00001e02c6bb2eb72b3c703d54dad6e5', NULL, '2023-03-04 01:09:10'),
(8, 'Aja', 1977, 'https://i.scdn.co/image/ab67616d00001e02e5dd0952c693529017743e39', NULL, '2023-03-04 01:09:10'),
(9, 'Songs in the Key of Life', 1976, 'https://i.scdn.co/image/ab67616d00001e022fee61bfec596bb6f5447c50', NULL, '2023-03-04 01:09:10'),
(10, 'Parallel Lines', 1978, 'https://i.scdn.co/image/ab67616d00001e02ace2bedb8e6cfa04207d5c0f', NULL, '2023-03-04 01:09:10'),
(11, 'Parallel Universe', 2002, 'https://i.scdn.co/image/ab67616d00001e0224358291664b85f9fa79c3c6', NULL, '2023-03-04 01:09:10'),
(12, 'Thriller', 1982, 'https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97', NULL, '2023-03-04 01:09:10'),
(13, 'Purple Rain', 1984, 'https://i.scdn.co/image/ab67616d00001e02d52bfb90ee8dfeda8378b99b', NULL, '2023-03-04 01:09:10'),
(14, 'The Joshua Tree', 1987, 'https://i.scdn.co/image/ab67616d00001e02f8996a3f97e80d9d700635c3', NULL, '2023-03-04 01:09:10'),
(15, 'Appetite for Destruction', 1987, 'https://i.scdn.co/image/ab67616d00001e0221ebf49b3292c3f0f575f0f5', NULL, '2023-03-04 01:09:10'),
(16, 'Synchronicity', 1983, 'https://i.scdn.co/image/ab67616d00001e02cd4766ea3cc3714839dcc754', NULL, '2023-03-04 01:09:10'),
(17, 'Born in the U.S.A.', 1984, 'https://i.scdn.co/image/ab67616d00001e02a7865e686c36a4adda6c9978', NULL, '2023-03-04 01:09:10'),
(18, 'Like a Prayer', 1989, 'https://i.scdn.co/image/ab67616d00001e020b7d0e7febefccb41c2533d2', NULL, '2023-03-04 01:09:10'),
(19, 'Hysteria', 1987, 'https://i.scdn.co/image/ab67616d00001e0243511b8c20112757edddc7ba', NULL, '2023-03-04 01:09:10'),
(20, 'Graceland', 1986, 'https://i.scdn.co/image/ab67616d00001e02ecd1e6fe12d12402318d747d', NULL, '2023-03-04 01:09:10'),
(21, 'Born to Run', 1987, 'https://i.scdn.co/image/ab67616d00001e02503143a281a3f30268dcd9f9', NULL, '2023-03-04 01:09:10'),
(22, 'Rio', 1982, 'https://i.scdn.co/image/ab67616d00001e025f54a32a61b460747cd8d51a', NULL, '2023-03-04 01:09:10'),
(23, 'Kind of Blue', 1959, 'https://i.scdn.co/image/ab67616d00001e027ab89c25093ea3787b1995b4', NULL, '2023-03-04 01:09:10'),
(24, 'The Beatles (The White Album)', 1968, 'https://i.scdn.co/image/ab67616d00001e025078cc61b6523a4a1846365b', NULL, '2023-03-04 01:09:10'),
(25, 'Pet Sounds', 1966, 'https://i.scdn.co/image/ab67616d00001e02bde8dfd1922129f3d9e3732f', NULL, '2023-03-04 01:09:10'),
(26, 'Highway 61 Revisited', 1965, 'https://i.scdn.co/image/ab67616d00001e0241720ef0ae31e10d39e43ca2', NULL, '2023-03-04 01:09:10'),
(27, 'The Velvet Underground and Nico', 1967, 'https://i.scdn.co/image/ab67616d00001e0298260c528e6eec9dd431c1d7', NULL, '2023-03-04 01:09:10'),
(28, 'Led Zeppelin', 1969, 'https://i.scdn.co/image/ab67616d00001e0222f1b6c28ce5735646b2e569', NULL, '2023-03-04 01:09:10'),
(29, 'Are You Experienced', 1967, 'https://i.scdn.co/image/ab67616d00001e02c9adfbd773852e286faed040', NULL, '2023-03-04 01:09:10'),
(30, 'Sgt. Pepper\'s Lonely Hearts Club Band', 1967, 'https://i.scdn.co/image/ab67616d00001e0234ef8f7d06cf2fc2146f420a', NULL, '2023-03-04 01:09:10'),
(31, 'Nevermind', 1991, 'https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6', NULL, '2023-03-04 01:09:10'),
(32, 'The Chronic', 1992, 'https://i.scdn.co/image/ab67616d00001e02820f8d16338c44f3adf864f7', NULL, '2023-03-04 01:09:10'),
(33, 'OK Computer', 1997, 'https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856', NULL, '2023-03-04 01:09:10'),
(34, 'The Miseducation of Lauryn Hill', 1998, 'https://i.scdn.co/image/ab67616d00001e02e08b1250db5f75643f1508c9', NULL, '2023-03-04 01:09:10'),
(35, 'The Bends', 1995, 'https://i.scdn.co/image/ab67616d00001e029293c743fa542094336c5e12', NULL, '2023-03-04 01:09:10'),
(36, 'Enter the Wu-Tang (36 Chambers)', 1993, 'https://i.scdn.co/image/ab67616d00001e025901aaa980d3e714bf01171c', NULL, '2023-03-04 01:09:10'),
(37, 'Automatic for the People', 1992, 'https://i.scdn.co/image/ab67616d00001e02ace3e7aae0b7c78bbe1c4f35', NULL, '2023-03-04 01:09:10'),
(38, 'The Downward Spiral', 1994, 'https://i.scdn.co/image/ab67616d00001e02786dc008f4d6fcf34ca8fd7e', NULL, '2023-03-04 01:09:10'),
(39, 'Kid A', 2000, 'https://i.scdn.co/image/ab67616d00001e026c7112082b63beefffe40151', NULL, '2023-03-04 01:09:10'),
(40, 'Yankee Hotel Foxtrot', 2002, 'https://i.scdn.co/image/ab67616d00001e02f53fbb4abe27c792221e5c27', NULL, '2023-03-04 01:09:10'),
(41, 'Discovery', 2001, 'https://i.scdn.co/image/ab67616d00001e02b33d46dfa2635a47eebf63b2', NULL, '2023-03-04 01:09:10'),
(42, 'Is This It', 2001, 'https://i.scdn.co/image/ab67616d00001e02a388a3f20d1bf2123249cc79', NULL, '2023-03-04 01:09:10'),
(43, 'American Idiot', 2004, 'https://i.scdn.co/image/ab67616d00001e0208a1b1e0674086d3f1995e1b', NULL, '2023-03-04 01:09:10'),
(44, 'Funeral', 2004, 'https://i.scdn.co/image/ab67616d00001e02644dc47cf558d69698353aa3', NULL, '2023-03-04 01:09:10'),
(45, 'Graduation', 2007, 'https://i.scdn.co/image/ab67616d00001e0226f7f19c7f0381e56156c94a', NULL, '2023-03-04 01:09:10'),
(46, 'In Rainbows', 2007, 'https://i.scdn.co/image/ab67616d00001e02de3c04b5fc750b68899b20a9', NULL, '2023-03-04 01:09:10'),
(47, 'Kidulthood to Adulthood', 2008, 'https://i.scdn.co/image/ab67616d00001e028c07dab3c93ca675e3d9612b', NULL, '2023-03-04 01:09:10'),
(48, 'Merriweather Post Pavilion', 2009, 'https://i.scdn.co/image/ab67616d00001e02a7f85f2df08fbeb6dac5677c', NULL, '2023-03-04 01:09:10'),
(49, 'Oracular Spectacular', 2007, 'https://i.scdn.co/image/ab67616d00001e028b32b139981e79f2ebe005eb', NULL, '2023-03-04 01:09:10'),
(50, 'My Beautiful Dark Twisted Fantasy', 2010, 'https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f', NULL, '2023-03-04 01:09:10'),
(51, '21', 2011, 'https://i.scdn.co/image/ab67616d00001e02164feb363334f93b6458d2a9', NULL, '2023-03-04 01:09:10'),
(52, 'Bon Iver', 2011, 'https://i.scdn.co/image/ab67616d00001e029626ee117a93c158d17aee17', NULL, '2023-03-04 01:09:10'),
(53, 'Channel Orange', 2012, 'https://i.scdn.co/image/ab67616d00001e027aede4855f6d0d738012e2e5', NULL, '2023-03-04 01:09:10'),
(54, 'Blonde', 2016, 'https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526', NULL, '2023-03-04 01:09:10'),
(55, 'Good Kid', 2012, 'https://i.scdn.co/image/ab67616d00001e0278de8b28de36a74afc0348b5', NULL, '2023-03-04 01:09:10'),
(56, 'To Pimp a Butterfly', 2015, 'https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1', NULL, '2023-03-04 01:09:10'),
(57, 'Random Access Memories', 2013, 'https://i.scdn.co/image/ab67616d00001e029b9b36b0e22870b9f542d937', NULL, '2023-03-04 01:09:10'),
(58, 'The Heist', 2012, 'https://i.scdn.co/image/ab67616d00001e0298a02fef3a8b1d80a0f164ec', NULL, '2023-03-04 01:09:10'),
(59, 'My Head Is an Animal', 2011, 'https://i.scdn.co/image/ab67616d00001e02cb3f67e8026e2e493a1e8262', NULL, '2023-03-04 01:09:10'),
(61, 'The Best of Muddy Waters', 1958, 'https://i.scdn.co/image/ab67616d00001e02f961bcc3e202a14cafe8ee7c', NULL, '2023-03-04 01:11:55');

-- --------------------------------------------------------

--
-- Table structure for table `album_album_collection`
--

CREATE TABLE `album_album_collection` (
  `id` int(11) NOT NULL,
  `album_id` int(11) DEFAULT NULL,
  `album_collection_id` int(11) DEFAULT NULL,
  `created_datetime` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_album_collection`
--

INSERT INTO `album_album_collection` (`id`, `album_id`, `album_collection_id`, `created_datetime`) VALUES
(11, 45, 19, '2023-04-19 18:23:55'),
(12, 55, 19, '2023-04-19 18:23:56'),
(13, 6, 19, '2023-04-19 18:23:57'),
(14, 9, 19, '2023-04-19 18:23:59'),
(15, 1, 20, '2023-04-22 18:34:37'),
(16, 1, 21, '2023-04-23 21:52:03'),
(17, 48, 21, '2023-04-23 21:52:18'),
(18, 5, 21, '2023-04-23 21:52:20'),
(19, 9, 21, '2023-04-23 21:52:21'),
(107, 1, 19, '2023-04-27 13:02:23'),
(108, 1, 35, '2023-04-27 13:31:24'),
(110, 1, 34, '2023-04-27 13:35:55'),
(112, 1, 29, '2023-04-27 13:40:46'),
(113, 1, 37, '2023-04-27 13:40:49'),
(114, 1, 30, '2023-04-27 13:41:17'),
(116, 1, 36, '2023-04-27 13:44:09'),
(117, 2, 29, '2023-04-27 14:32:29'),
(127, 1, 38, '2023-04-28 11:29:20'),
(128, 10, 39, '2023-04-28 13:32:29'),
(149, 6, 42, '2023-04-30 13:23:13'),
(150, 5, 31, '2023-04-30 13:23:49'),
(151, 9, 31, '2023-04-30 13:23:52'),
(152, 35, 32, '2023-04-30 13:24:48'),
(153, 54, 32, '2023-04-30 13:24:55'),
(154, 4, 43, '2023-05-01 18:43:31'),
(155, 1, 44, '2023-05-02 10:03:06'),
(156, 50, 44, '2023-05-02 10:03:10'),
(157, 3, 44, '2023-05-02 10:03:17'),
(158, 2, 44, '2023-05-02 10:03:18'),
(159, 7, 44, '2023-05-02 10:03:19'),
(160, 6, 44, '2023-05-02 10:03:21'),
(161, 9, 44, '2023-05-02 10:03:24'),
(170, 1, 47, '2023-05-02 10:26:35');

-- --------------------------------------------------------

--
-- Table structure for table `album_artist`
--

CREATE TABLE `album_artist` (
  `id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_artist`
--

INSERT INTO `album_artist` (`id`, `album_id`, `artist_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14),
(15, 15, 15),
(16, 16, 16),
(17, 17, 3),
(18, 18, 17),
(19, 19, 18),
(20, 20, 19),
(21, 21, 3),
(22, 22, 20),
(23, 23, 21),
(24, 24, 22),
(25, 25, 23),
(26, 26, 24),
(27, 27, 25),
(28, 28, 5),
(29, 29, 26),
(30, 30, 22),
(31, 31, 27),
(32, 32, 28),
(33, 33, 29),
(34, 34, 30),
(35, 35, 29),
(36, 36, 31),
(37, 37, 32),
(38, 38, 33),
(39, 39, 29),
(40, 40, 34),
(41, 41, 35),
(42, 42, 36),
(43, 43, 37),
(44, 44, 38),
(45, 45, 39),
(46, 46, 29),
(47, 47, 40),
(48, 48, 41),
(49, 49, 42),
(50, 50, 39),
(51, 51, 43),
(52, 52, 44),
(53, 53, 45),
(54, 54, 45),
(55, 55, 46),
(56, 56, 47),
(57, 57, 35),
(58, 58, 48),
(59, 59, 49),
(60, 61, 50);

-- --------------------------------------------------------

--
-- Table structure for table `album_collection`
--

CREATE TABLE `album_collection` (
  `id` int(11) NOT NULL,
  `collection_name` varchar(255) DEFAULT NULL,
  `collection_desc` text DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_datetime` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_collection`
--

INSERT INTO `album_collection` (`id`, `collection_name`, `collection_desc`, `img_path`, `created_by`, `last_updated_datetime`, `created_datetime`) VALUES
(1, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-05 23:14:53'),
(2, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-05 23:38:46'),
(3, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-07 19:02:34'),
(4, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-07 19:04:33'),
(5, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-08 00:39:31'),
(6, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-14 16:37:00'),
(7, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-14 16:38:41'),
(8, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-14 16:52:40'),
(9, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-16 00:20:04'),
(10, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-16 00:22:02'),
(11, 'Favourite Summer Collection', 'This is my favourite summer collection album.', 'https://unsplash.com/photos/z4KhbVhPP7s', NULL, '2023-03-16 01:19:54', '2023-03-16 00:22:54'),
(12, 'New Collection', NULL, NULL, NULL, '2023-03-30 10:55:57', '2023-03-30 10:55:57'),
(13, 'New Collection', NULL, NULL, NULL, '2023-03-30 12:11:50', '2023-03-30 12:11:50'),
(14, 'New Collection', NULL, NULL, NULL, '2023-03-30 12:27:16', '2023-03-30 12:27:16'),
(15, 'New Collection', NULL, NULL, NULL, '2023-03-30 12:27:59', '2023-03-30 12:27:59'),
(16, 'New Collection', NULL, NULL, NULL, '2023-03-30 12:45:14', '2023-03-30 12:45:14'),
(17, 'New Collection', NULL, NULL, NULL, '2023-03-30 12:45:23', '2023-03-30 12:45:23'),
(19, 'My Collection #2', 'This is my favorite summer album collections!', NULL, 14, '2023-04-19 18:25:10', '2023-04-19 18:22:47'),
(20, 'My Collection #1', NULL, NULL, 16, '2023-04-20 16:49:28', '2023-04-20 16:49:28'),
(21, 'Classic Contemporary #1', 'This is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\nThis is a must-know list of contemporary albums.\nGonna make this description a lil bit long\n', NULL, 14, '2023-04-27 00:57:43', '2023-04-23 21:49:03'),
(29, 'My Collection #11', NULL, NULL, 14, '2023-04-23 23:58:22', '2023-04-23 23:58:22'),
(30, 'My Collection #5', NULL, NULL, 14, '2023-04-24 15:36:57', '2023-04-24 15:36:57'),
(31, 'My Collection #6', NULL, NULL, 14, '2023-04-24 15:39:55', '2023-04-24 15:39:55'),
(32, 'My Collection #7', NULL, NULL, 14, '2023-04-26 14:14:30', '2023-04-26 14:14:30'),
(34, 'My Collection #9', NULL, NULL, 14, '2023-04-26 14:16:06', '2023-04-26 14:16:06'),
(35, 'My Collection #10', NULL, NULL, 14, '2023-04-26 14:24:23', '2023-04-26 14:24:23'),
(36, 'My Collection #11', NULL, NULL, 14, '2023-04-26 14:26:02', '2023-04-26 14:26:02'),
(37, 'My Collection #12', NULL, NULL, 14, '2023-04-26 14:41:55', '2023-04-26 14:41:55'),
(38, 'My Collection #13', NULL, NULL, 14, '2023-04-28 11:29:20', '2023-04-28 11:29:20'),
(39, 'My Collection #14', NULL, NULL, 14, '2023-04-28 13:32:29', '2023-04-28 13:32:29'),
(40, 'My Collection #14', NULL, NULL, 14, '2023-04-28 16:33:06', '2023-04-28 16:33:06'),
(41, 'My Collection #15', 'My list of classic albums\n', NULL, 14, '2023-04-28 18:37:21', '2023-04-28 18:36:54'),
(42, 'My Collection #16', NULL, NULL, 14, '2023-04-29 16:41:20', '2023-04-29 16:41:20'),
(43, 'My Collection #16', NULL, NULL, 14, '2023-05-01 18:43:31', '2023-05-01 18:43:31'),
(44, 'My Favorite Album Collection For Summer', 'This is a classic compilation', NULL, 28, '2023-05-02 10:02:47', '2023-05-02 10:02:20'),
(47, 'My Collection #3', NULL, NULL, 29, '2023-05-02 10:26:35', '2023-05-02 10:26:35');

-- --------------------------------------------------------

--
-- Table structure for table `album_genre`
--

CREATE TABLE `album_genre` (
  `id` int(11) NOT NULL,
  `album_id` int(11) DEFAULT NULL,
  `genre_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_genre`
--

INSERT INTO `album_genre` (`id`, `album_id`, `genre_id`) VALUES
(1, 1, 1),
(62, 1, 18),
(122, 1, 19),
(2, 2, 2),
(123, 2, 10),
(63, 2, 19),
(3, 3, 3),
(124, 3, 19),
(64, 3, 20),
(4, 4, 3),
(65, 4, 21),
(125, 5, 3),
(5, 5, 4),
(66, 5, 22),
(6, 6, 3),
(126, 6, 19),
(67, 6, 22),
(7, 7, 5),
(68, 7, 6),
(69, 8, 2),
(8, 8, 6),
(9, 9, 7),
(127, 9, 10),
(70, 9, 23),
(10, 10, 8),
(128, 10, 10),
(71, 10, 24),
(11, 11, 9),
(72, 11, 25),
(129, 11, 53),
(12, 12, 10),
(73, 12, 23),
(13, 13, 10),
(74, 13, 23),
(130, 14, 2),
(14, 14, 3),
(75, 14, 9),
(15, 15, 4),
(76, 15, 26),
(16, 16, 3),
(77, 16, 8),
(17, 17, 3),
(78, 17, 20),
(18, 18, 10),
(79, 18, 27),
(19, 19, 3),
(80, 19, 4),
(20, 20, 5),
(81, 20, 28),
(132, 20, 54),
(21, 21, 3),
(82, 21, 20),
(22, 22, 8),
(133, 22, 14),
(83, 22, 29),
(23, 23, 11),
(84, 23, 30),
(85, 24, 2),
(24, 24, 3),
(25, 25, 3),
(86, 25, 31),
(26, 26, 3),
(87, 26, 5),
(27, 27, 3),
(88, 27, 32),
(28, 28, 3),
(89, 28, 4),
(134, 28, 22),
(29, 29, 3),
(90, 29, 18),
(135, 29, 22),
(30, 30, 3),
(91, 30, 33),
(31, 31, 3),
(136, 31, 4),
(92, 31, 34),
(32, 32, 12),
(93, 32, 35),
(137, 32, 53),
(33, 33, 3),
(61, 33, 9),
(138, 34, 10),
(34, 34, 12),
(95, 34, 16),
(35, 35, 3),
(96, 35, 9),
(139, 35, 55),
(36, 36, 12),
(97, 36, 36),
(140, 36, 56),
(37, 37, 3),
(98, 37, 9),
(141, 37, 57),
(38, 38, 13),
(142, 38, 14),
(99, 38, 37),
(39, 39, 3),
(143, 39, 9),
(100, 39, 14),
(40, 40, 3),
(101, 40, 38),
(41, 41, 14),
(102, 41, 39),
(144, 41, 58),
(42, 42, 3),
(103, 42, 40),
(43, 43, 3),
(104, 43, 41),
(145, 43, 59),
(44, 44, 3),
(146, 44, 9),
(105, 44, 42),
(45, 45, 12),
(106, 45, 43),
(46, 46, 3),
(107, 46, 9),
(47, 47, 12),
(108, 47, 44),
(48, 48, 3),
(109, 48, 45),
(49, 49, 3),
(110, 49, 33),
(50, 50, 12),
(111, 50, 43),
(112, 51, 7),
(51, 51, 10),
(148, 51, 60),
(52, 52, 15),
(113, 52, 46),
(149, 52, 55),
(53, 53, 16),
(114, 53, 47),
(54, 54, 16),
(115, 54, 47),
(150, 54, 61),
(55, 55, 12),
(116, 55, 48),
(56, 56, 12),
(117, 56, 49),
(57, 57, 14),
(118, 57, 50),
(151, 57, 58),
(58, 58, 12),
(119, 58, 43),
(59, 59, 3),
(152, 59, 9),
(120, 59, 46),
(60, 61, 17),
(121, 61, 51);

-- --------------------------------------------------------

--
-- Table structure for table `album_record_company`
--

CREATE TABLE `album_record_company` (
  `id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `record_company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `album_record_company`
--

INSERT INTO `album_record_company` (`id`, `album_id`, `record_company_id`) VALUES
(1, 1, 1),
(2, 1, 16),
(5, 2, 2),
(6, 3, 3),
(7, 4, 4),
(8, 5, 5),
(9, 6, 6),
(10, 7, 4),
(11, 8, 7),
(12, 9, 8),
(13, 10, 9),
(14, 11, 2),
(15, 12, 10),
(16, 13, 2),
(17, 14, 11),
(18, 15, 12),
(19, 16, 13),
(20, 17, 3),
(21, 18, 14),
(22, 19, 15),
(23, 20, 2),
(24, 21, 3),
(25, 22, 16),
(26, 23, 3),
(27, 24, 17),
(28, 25, 16),
(29, 26, 3),
(30, 27, 18),
(31, 28, 5),
(32, 29, 19),
(33, 30, 20),
(34, 31, 21),
(35, 32, 22),
(36, 33, 20),
(37, 34, 23),
(38, 35, 20),
(39, 36, 24),
(40, 37, 2),
(41, 38, 25),
(42, 39, 20),
(43, 40, 26),
(44, 41, 27),
(45, 42, 28),
(46, 43, 29),
(47, 44, 30),
(48, 45, 31),
(49, 46, 32),
(50, 47, 33),
(51, 48, 34),
(52, 49, 3),
(53, 50, 31),
(54, 51, 35),
(55, 52, 36),
(56, 53, 37),
(57, 54, 38),
(58, 55, 39),
(59, 56, 39),
(60, 57, 3),
(61, 58, 40),
(62, 59, 41),
(63, 61, 42);

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE `artist` (
  `id` int(11) NOT NULL,
  `artist_name` varchar(255) DEFAULT NULL,
  `artist_description` text DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`id`, `artist_name`, `artist_description`, `img_path`) VALUES
(1, 'Pink Floyd', 'Pink Floyd was an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished by their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.\n\nPink Floyd were founded in 1965 by Syd Barrett (guitar, lead vocals) <a href=\"https://www.last.fm/music/Pink+Floyd\">Read more on Last.fm</a>', 'https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07'),
(2, 'Fleetwood Mac', 'Fleetwood Mac is a British-American rock band, formed in London in 1967. Fleetwood Mac was founded by guitarist Peter Green, drummer Mick Fleetwood and guitarist Jeremy Spencer, before bassist John McVie joined the lineup for their self-titled debut album. Danny Kirwan joined as a third guitarist in 1968. Keyboardist Christine Perfect (later known as Christine McVie), who contributed as a session musician from the second album, married McVie and joined in 1970. <a href=\"https://www.last.fm/music/Fleetwood+Mac\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174249d55f2d68a44637905c57e'),
(3, 'Bruce Springsteen', 'Bruce Frederick Joseph Springsteen (born September 23, 1949) is an American singer and songwriter. He has released 21 studio albums, most of which feature his backing band, the E Street Band. Originally from the Jersey Shore, he is an originator of heartland rock, combining mainstream rock musical styles with narrative songs about working class American life. Nicknamed \"the Boss\", his career has spanned six decades. Springsteen is known for his poetic <a href=\"https://www.last.fm/music/Bruce+Springsteen\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174f7cac48c6b587b927ba73f4e'),
(4, 'The Eagles', 'For the American band, see   Eagles . change that  in \" The Eagles US \"  please ?\n1) The Eagles UK  (UK band) (1958—1964 	Bristol, England)\n2) The Eagles (R&B vocal group)\n\nVery confusing this way with 3 groups with the same names !\n\n1) The Eagles were a British music quartet active from 1958 through the mid 1960s. Formed in 1958, at the Eagles House Club in Bristol, Somerset.\n\nLed by lead guitarist Terry Clarke (born Terence Clarke, in 1947, in Reading <a href=\"https://www.last.fm/music/+noredirect/The+Eagles\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab676161000051740767e116a2307495e37cd7fb'),
(5, 'Led Zeppelin', 'Led Zeppelin were an English rock band formed in London in 1968. The group comprised vocalist Robert Plant, guitarist Jimmy Page, bassist and keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry <a href=\"https://www.last.fm/music/Led+Zeppelin\">Read more on Last.fm</a>', 'https://i.scdn.co/image/b0248a44865493e6a03832aa89854ada16ff07a8'),
(6, 'The Rolling Stones', 'The Rolling Stones are an English rock band formed in London in 1962. Active for six decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the Rolling Stones pioneered the gritty, rhythmically driven sound that came to define hard rock. Their first stable line-up consisted of vocalist Mick Jagger, multi-instrumentalist Brian Jones, guitarist Keith Richards, bassist Bill Wyman, and drummer Charlie Watts. During their formative years <a href=\"https://www.last.fm/music/The+Rolling+Stones\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174d3cb15a8570cce5a63af63d8'),
(7, 'Joni Mitchell', NULL, 'https://i.scdn.co/image/ebaff9c356b21f97cb877d8e4607568b3e0cae75'),
(8, 'Steely Dan', 'Steely Dan is an American jazz rock band which formed in 1972. The band was formed by Donald Fagen (vocals, keyboards) and Walter Becker (guitar, bass), who met in 1967 while both attended Bard College in Annandale-on-Hudson, New York, and began a songwriting partnership shortly thereafter.\n\nTheir music is characterized by dark, witty lyrical narratives, obscure lyrical allusions and complex, jazz-influenced instrumentation and chord sequences, overlying more ordinary popular song structures. <a href=\"https://www.last.fm/music/Steely+Dan\">Read more on Last.fm</a>', 'https://i.scdn.co/image/067bf3caa525edb4e97e19b2a630ccf361897350'),
(9, 'Stevie Wonder', NULL, 'https://i.scdn.co/image/37c7875911b1d8195b05d40061a86bd01908a0d9'),
(10, 'Blondie', 'Blondie is an American rock band founded in New York City in 1974 by singer-songwriter Deborah Harry and guitarist Chris Stein. The band was a pioneer in the early American new wave and punk scenes of the mid-70s, developing their sound in famous NYC clubs such as CBGBs. With hits such as \"Atomic\", \"Call Me\". \"Heart of Glass\", and \"Maria\" as well as sales of over 40 million records worldwide, they were inducted into the Rock and Roll Hall of Fame in 2006. <a href=\"https://www.last.fm/music/Blondie\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab6761610000517467dc4da82c968767d994f3c3'),
(11, 'Red Hot Chili Peppers', 'The Red Hot Chili Peppers is an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. The band consists of co-founders Anthony Kiedis (lead vocals) and Flea (bass), as well as drummer Chad Smith, and guitarist John Frusciante, the latter of whom has been in the band across three stints. With over 100 million records sold worldwide, the Red Hot Chili Peppers are one of the best-selling bands of all time. <a href=\"https://www.last.fm/music/Red+Hot+Chili+Peppers\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174c33cc15260b767ddec982ce8'),
(12, 'Michael Jackson', 'Michael Joseph Jackson  (August 29, 1958 Gary, Indiana—June 25, 2009 in Los Angeles, California), was an American singer, songwriter and dancer. Dubbed the King of Pop, he is widely regarded as one of the most significant cultural figures of the 20th century and one of the greatest entertainers of all time. He was also known for his philanthropy, charitable fundraising, and lifestyle, residing in a private amusement park he called Neverland Ranch and often becoming the focus of tabloid scrutiny. <a href=\"https://www.last.fm/music/Michael+Jackson\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa'),
(13, 'Prince and The Revolution', NULL, 'https://i.scdn.co/image/ab67616100005174eaca358712b3fe4ed9814640'),
(14, 'U2', NULL, 'https://i.scdn.co/image/ab67616100005174bfdf5b8c863b5f8c4519e032'),
(15, 'Guns N\' Roses', NULL, 'https://i.scdn.co/image/ab6761610000517450defaf9fc059a1efc541f4c'),
(16, 'The Police', NULL, 'https://i.scdn.co/image/72fe2cadb69ab59960ae3dbd29618549e4432699'),
(17, 'Madonna', 'Madonna Louise Ciccone is an American singer-songwriter and actress. Known as the \"Queen of Pop\", Madonna has been widely recognized for her continual reinvention and versatility in music production, songwriting and visual presentation. She has pushed the boundaries of artistic expression in mainstream music, while continuing to maintain control over every aspect of her career. Her works, which incorporate social, political, sexual and religious themes, have generated both controversy and critical acclaim. <a href=\"https://www.last.fm/music/Madonna\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab676161000051744b36d28b55620959821f4a5b'),
(18, 'Def Leppard', NULL, 'https://i.scdn.co/image/ab67616100005174695e45d9945ce1f8e5fa5c54'),
(19, 'Paul Simon', NULL, 'https://i.scdn.co/image/ab67616100005174ddc148cfa465c2065846c636'),
(20, 'Duran Duran', NULL, 'https://i.scdn.co/image/ab6761610000517447f63876040bae5c16a28832'),
(21, 'Miles Davis', NULL, 'https://i.scdn.co/image/a318c54208af38364d131a54ced2416423696018'),
(22, 'The Beatles', NULL, 'https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433'),
(23, 'The Beach Boys', NULL, 'https://i.scdn.co/image/ab6761610000517492602f233ce2295748f44603'),
(24, 'Bob Dylan', 'Bob Dylan (born Robert Allen Zimmerman on May 24, 1941 in Duluth, Minnesota, United States)  is an American singer-songwriter. Often regarded as one of the greatest songwriters of all time, Dylan has been a major figure in popular culture during a career spanning more than 60 years.\nDylan started his musical odyssey in 1959 when he began playing in Dinkytown, Minneapolis while attending the University of Minnesota. Shortly after starting to play he changed his stage name to Bob Dylan <a href=\"https://www.last.fm/music/Bob+Dylan\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab6772690000dd22f79ca05dcc1581c712bf3658'),
(25, 'The Velvet Underground', 'The Velvet Underground was a pioneering experimental rock band from New York City first active from 1965 to 1973. Its best-known lineup consisted of vocalist/guitarist Lou Reed, bassist/violist John Cale, guitarist Sterling Morrison and drummer Maureen Tucker. The band also collaborated with Nico for their debut album in 1967, under the supervision of producer and pop artist Andy Warhol.\n\nSome see The Velvet Underground as being a bridge between the <a href=\"https://www.last.fm/music/The+Velvet+Underground\">Read more on Last.fm</a>', 'https://i.scdn.co/image/24e7531935f88f55744cc8c9ed2528f466cba276'),
(26, 'The Jimi Hendrix Experience', 'The Jimi Hendrix Experience was a short-lived, yet highly influential rock band famous for the guitar work of Jimi Hendrix (1942– 1970) on songs such as Purple Haze, Foxy Lady, Hey Joe, Voodoo Child (Slight Return) and All Along the Watchtower. Rounding out the Experience were Noel Redding (1945–2003) and Mitch Mitchell (1947–2008) on bass and drums respectively.\n\nHendrix arrived in England in October 1966, and auditions were launched to find him a backing band. <a href=\"https://www.last.fm/music/The+Jimi+Hendrix+Experience\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab6761610000517431f6ab67e6025de876475814'),
(27, 'Nirvana', NULL, 'https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6'),
(28, 'Dr. Dre', 'André Romelle Young (born February 18, 1965 in Los Angeles, California), better known by his stage name Dr. Dre, is an American record producer, rapper, actor and record executive. He is the founder and current CEO of Aftermath Entertainment and a former co-owner and artist of Death Row Records, also having produced albums for and overseeing the careers of many rappers signed to those record labels. As a producer he is credited as a key figure in the popularization of West Coast G-funk <a href=\"https://www.last.fm/music/Dr.+Dre\">Read more on Last.fm</a>', 'https://i.scdn.co/image/170254ebdd747f4e7045df1cae8f11a42dc1a547'),
(29, 'Radiohead', NULL, 'https://i.scdn.co/image/ab67616100005174a03696716c9ee605006047fd'),
(30, 'Lauryn Hill', NULL, 'https://i.scdn.co/image/cd7ce04ab075f3edccefe469d274ca00492bcc07'),
(31, 'Wu-Tang Clan', NULL, 'https://i.scdn.co/image/ab67616100005174e60866298962b71792b2bf1a'),
(32, 'R.E.M.', NULL, 'https://i.scdn.co/image/ab676161000051746334ab6a83196f36475ada7f'),
(33, 'Nine Inch Nails', NULL, 'https://i.scdn.co/image/ab67616100005174047095c90419cf2a97266f77'),
(34, 'Wilco', NULL, 'https://i.scdn.co/image/ab67616100005174b990b82996651d23ab4df7e8'),
(35, 'Daft Punk', 'Daft Punk was a multi Grammy Award-winning electronic music duo formed in 1993 in Paris, France, and separated in early 2021, consisting of French musicians Thomas Bangalter (born 3 January 1975) and Guy-Manuel de Homem-Christo (born 8 February 1974). The band is considered one of the most successful electronic music collaborations of all time, both in album sales and in critical acclaim. \n\nDaft Punk reached significant popularity in the late 90s house movement in France, along with other artists such as Air, Cassius, and Dimitri From Paris. <a href=\"https://www.last.fm/music/Daft+Punk\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174a7bfd7835b5c1eee0c95fa6e'),
(36, 'The Strokes', 'The Strokes is an American rock band from  Manhattan, New York, United States, formed in 1998. The band rose to fame in the early 2000s as a leading group in garage rock/post-punk revival. The band consists of Julian Casablancas (lead vocals), Nick Valensi (lead guitar), Albert Hammond, Jr. (rhythm guitar), Nikolai Fraiture (bass guitar) and Fabrizio Moretti (drums and percussion).\n	 \nUpon the release of their debut album, Is This It, in 2001, the group was met with much critical acclaim, being hailed by some as the \"saviors of rock and roll. <a href=\"https://www.last.fm/music/The+Strokes\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174caea403b29f6a09260b6a18a'),
(37, 'Green Day', NULL, 'https://i.scdn.co/image/ab67616100005174047eac333eff0be4abe32cbf'),
(38, 'Arcade Fire', 'Arcade Fire is an indie rock band formed in Montreal, Quebec, Canada in 2001. The band consists of Win Butler (vocals, guitar, piano), Régine Chassagne (vocals, accordion, keyboards, hurdy gurdy, drums), Richard Reed Parry (bass, guitar), Tim Kingsbury (bass), and Jeremy Gara (drums). Montreal percussionist Dane Mills performed on the EP and in early live shows.  Will Butler (keyboards, guitar) left the band in 2022 to focus on his solo career. The touring band includes horn players and violinists. <a href=\"https://www.last.fm/music/Arcade+Fire\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174a044e15eee771205956dcbf8'),
(39, 'Kanye West', 'Ye (born Kanye Omari West on June 8, 1977, in Atlanta, Georgia), professionally known as Kanye West, is a Grammy award-winning American rapper, producer, singer, author, director, performance artist and fashion designer.\n\nWest began making beats and rapping in the early 90s in his hometown of Chicago, Illinois, when he formed the rap group Go Getters with Chicago natives GLC and Really Doe. He later gained nationwide popularity through his work in New York <a href=\"https://www.last.fm/music/Kanye+West\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174867008a971fae0f4d913f63a'),
(40, 'Bashy', NULL, 'https://i.scdn.co/image/ab67616d00001e028f546546d8d5323e3f3d3f32'),
(41, 'Animal Collective', NULL, 'https://i.scdn.co/image/ab67616100005174b6998f7a38a091049a329ab3'),
(42, 'MGMT', 'MGMT is a psychedelic pop band which formed in 2002 in Middletown, Connecticut, United States. The band consists of  Andrew VanWyngarden (lead vocals, multiple instruments) and Ben Goldwasser (multiple instruments, vocals). The duo was signed to Columbia Records in 2006 and have since released four albums: \"Oracular Spectacular\" (2007), \"Congratulations\" (2010), \"MGMT\" (2013) and \"Little Dark Age\" (2018). They are best known for their 2008 singles \"Time to Pretend\", \"Electric Feel\" and \"Kids\", all of which were worldwide hits. <a href=\"https://www.last.fm/music/MGMT\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174089bb3257ef5b3fab2a3c90d'),
(43, 'Adele', 'Adele Laurie Blue Adkins MBE (born May 5, 1988) is an English singer and songwriter. After graduating in arts from the BRIT School in 2006, Adele signed a record deal with XL Recordings. Her debut album, 19, was released in 2008 and spawned the UK top-five singles \"Chasing Pavements\" and \"Make You Feel My Love\". The album was certified 8× platinum in the UK and triple platinum in the US. Adele was honoured with the Brit Award for Rising Star as well as the Grammy Award for Best New Artist. <a href=\"https://www.last.fm/music/Adele\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab6761610000517468f6e5892075d7f22615bd17'),
(44, 'Bon Iver', NULL, 'https://i.scdn.co/image/ab6761610000517467be065df01f37a3880216be'),
(45, 'Frank Ocean', 'Christopher Edwin Breaux, professionally known as Frank Ocean is an American singer/songwriter and member of the gleefully hedonistic hip-hop collective OFWGKTA. He was born on October 28, 1987 and lived in Long Beach, California. He has helped pen tracks for Justin Bieber, John Legend, Brandy, and Beyoncé over the last few years. In 2011, Ocean released his debut mixtape, Nostalgia, Ultra, for free via his Tumblr.\n\nVenting about his decision to drop the record his own way, he took to Twitter on March 1, 2011: <a href=\"https://www.last.fm/music/Frank+Ocean\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174fbc3faec4a370d8393bee7f1'),
(46, 'M.A.A.D City', '', 'https://i.scdn.co/image/ab67616100005174ad07bf4fb3ad7af402b1e54a'),
(47, 'Kendrick Lamar', 'Kendrick Lamar Duckworth (born June 17, 1987), professionally known as Kendrick Lamar is a rapper from Compton, California. He is also a member of the hip-hop supergroup Black Hippy collective along with members Jay Rock, Ab-Soul, and Schoolboy Q. His music is largely influenced by the works of 2Pac, Jay-Z, Nas, DMX, The Notorious B.I.G., Mos Def, Eazy-E and Eminem.\n\nHe began to gain major recognition in 2010 after his first retail release, Overly Dedicated. <a href=\"https://www.last.fm/music/Kendrick+Lamar\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174437b9e2a82505b3d93ff1022'),
(48, 'Macklemore & Ryan Lewis', '', 'https://i.scdn.co/image/ab67616100005174488b3b242f97163a7f8e17b9'),
(49, 'Of Monsters and Men', 'Of Monsters and Men are an indie folk band which formed in 2010 in Keflavík/Garðabær, Iceland. The band consists of Nanna Bryndís Hilmarsdóttir (vocals, guitar), Ragnar Þórhallsson (vocals, guitar), Brynjar Leifsson (guitar), Kristján Páll Kristjánsson (bass), Arnar Rósenkranz Hilmarsson (drums) and the former member  Árni Guðjónsson (keyboards, accordion), who left the band in 2012. The band released their debut album \"My Head Is an Animal\" in September 2011. <a href=\"https://www.last.fm/music/Of+Monsters+and+Men\">Read more on Last.fm</a>', 'https://i.scdn.co/image/ab67616100005174ce5451b5cc60faf1992e969a'),
(50, 'Muddy Waters', 'Muddy Waters (McKinley Morganfield, Issaquena County, Mississippi, April 4, 1913 - Westmont, Illinois,  April 30, 1983) was an American blues musician and is generally considered \"the father of Chicago Blues.\" His career spanned over thirty years and he produced what are considered to be some of the finest blues songs ever, such as Hoochie Coochie Man, Mannish Boy and Got My Mojo Working. \n\nMuddy Waters is generally considered one of the most influential bluesmen of all time. <a href=\"https://www.last.fm/music/Muddy+Waters\">Read more on Last.fm</a>', 'https://i.scdn.co/image/40d562d19e9bf6bb6cd7b6886ec7608c281febca');

-- --------------------------------------------------------

--
-- Table structure for table `collection_like`
--

CREATE TABLE `collection_like` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `collection_id` int(11) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `collection_like`
--

INSERT INTO `collection_like` (`id`, `user_id`, `collection_id`, `created_datetime`) VALUES
(7, 15, 19, '2023-04-20 16:48:03'),
(11, 14, 20, '2023-04-24 00:36:38'),
(17, 17, 21, '2023-04-26 11:51:23'),
(18, 18, 21, '2023-04-26 11:51:23'),
(19, 19, 21, '2023-04-26 14:03:48'),
(20, 20, 21, '2023-04-26 14:03:48'),
(21, 21, 21, '2023-04-26 14:03:58'),
(22, 22, 21, '2023-04-26 14:03:58'),
(23, 23, 21, '2023-04-26 14:04:07'),
(24, 24, 21, '2023-04-26 14:04:07'),
(27, 25, 21, '2023-04-26 14:04:28'),
(28, 26, 21, '2023-04-26 14:04:28'),
(29, 15, 21, '2023-04-26 14:04:51'),
(30, 16, 21, '2023-04-26 14:04:51'),
(249, 14, 21, '2023-04-27 13:52:42'),
(271, 14, 40, '2023-04-28 16:50:49'),
(299, 14, 39, '2023-05-01 23:45:21'),
(301, 14, 43, '2023-05-01 23:47:08'),
(302, 28, 44, '2023-05-02 10:04:18'),
(303, 28, 19, '2023-05-02 10:04:49'),
(304, 29, 19, '2023-05-02 10:23:54');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT current_timestamp(),
  `last_updated_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `user_id`, `comment`, `created_datetime`, `last_updated_datetime`) VALUES
(1, 14, 'rr', '2023-04-19 13:58:26', '2023-04-19 13:58:26'),
(2, 14, 'rr', '2023-04-19 13:58:30', '2023-04-19 13:58:30'),
(3, 14, 'post', '2023-04-19 13:59:49', '2023-04-19 13:59:49'),
(4, 14, 'rtrt', '2023-04-19 14:02:29', '2023-04-19 14:02:29'),
(5, 14, 'rtrtsdsd', '2023-04-19 14:03:27', '2023-04-19 14:03:27'),
(6, 14, 'rtrtsdsd', '2023-04-19 14:03:50', '2023-04-19 14:03:50'),
(7, 14, 'Life is good', '2023-04-19 14:16:57', '2023-04-19 14:16:57'),
(8, 14, NULL, '2023-04-23 01:02:02', '2023-04-23 01:02:02'),
(9, 14, NULL, '2023-04-23 01:02:46', '2023-04-23 01:02:46'),
(10, 14, NULL, '2023-04-23 01:03:27', '2023-04-23 01:03:27'),
(11, 14, NULL, '2023-04-23 01:04:12', '2023-04-23 01:04:12'),
(12, 14, NULL, '2023-04-23 01:07:03', '2023-04-23 01:07:03'),
(13, 11, 'test', '2023-04-23 11:13:46', '2023-04-23 11:13:46'),
(14, 14, 'hh', '2023-04-23 11:43:45', '2023-04-23 11:43:45'),
(15, 14, 'sd', '2023-04-23 11:45:18', '2023-04-23 11:45:18'),
(16, 14, 'aa', '2023-04-23 11:48:15', '2023-04-23 11:48:15'),
(17, 14, 'aaaaaa', '2023-04-23 11:50:09', '2023-04-23 11:50:09'),
(18, 14, 'phedra test', '2023-04-23 11:52:37', '2023-04-23 11:52:37'),
(19, 14, 'asdf', '2023-04-23 11:53:20', '2023-04-23 11:53:20'),
(20, 14, 'asd', '2023-04-23 11:54:13', '2023-04-23 11:54:13'),
(21, 14, 'sdf', '2023-04-23 11:58:42', '2023-04-23 11:58:42'),
(22, 14, 'zxcxcxcccxcxc', '2023-04-23 12:00:30', '2023-04-23 12:00:30'),
(23, 14, 'asdfasdf', '2023-04-23 12:01:02', '2023-04-23 12:01:02'),
(24, 14, 'wtf is going on....', '2023-04-23 12:04:50', '2023-04-23 12:04:50'),
(25, 14, 'asdf', '2023-04-23 12:07:30', '2023-04-23 12:07:30'),
(26, 14, 'asd', '2023-04-23 12:07:46', '2023-04-23 12:07:46'),
(27, 14, 'asdfdf', '2023-04-23 12:08:08', '2023-04-23 12:08:08'),
(28, 14, 'asdf', '2023-04-23 12:08:40', '2023-04-23 12:08:40'),
(29, 14, 'SD', '2023-04-23 12:09:34', '2023-04-23 12:09:34'),
(30, 14, 'jjjjk', '2023-04-23 12:11:54', '2023-04-23 12:11:54'),
(31, 14, 'fvfv', '2023-04-23 12:22:35', '2023-04-23 12:22:35'),
(32, 14, 'pôppo', '2023-04-23 12:22:43', '2023-04-23 12:22:43'),
(33, 14, 'df', '2023-04-23 18:09:06', '2023-04-23 18:09:06'),
(34, 14, 'đf', '2023-04-23 18:09:10', '2023-04-23 18:09:10'),
(35, 14, 'I really like this list', '2023-04-23 21:53:19', '2023-04-23 21:53:19'),
(36, 14, 'g', '2023-04-26 15:38:19', '2023-04-26 15:38:19'),
(37, 14, 'post post\n', '2023-04-26 22:37:05', '2023-04-26 22:37:05'),
(38, 14, 'ghgh\n', '2023-04-27 18:44:36', '2023-04-27 18:44:36'),
(39, 14, 'ghgh', '2023-04-27 18:44:47', '2023-04-27 18:44:47'),
(40, 14, 'fbf', '2023-04-27 18:45:38', '2023-04-27 18:45:38'),
(41, 14, '4t', '2023-04-27 19:28:25', '2023-04-27 19:28:25'),
(42, 14, 'Im tired', '2023-04-27 19:50:36', '2023-04-27 19:50:36'),
(43, 14, 'rgr', '2023-04-27 20:08:46', '2023-04-27 20:08:46'),
(44, 14, 'rgr', '2023-04-27 20:08:48', '2023-04-27 20:08:48'),
(45, 14, 'rg', '2023-04-27 20:08:50', '2023-04-27 20:08:50'),
(46, 14, 'rrr', '2023-04-27 20:08:52', '2023-04-27 20:08:52'),
(47, 14, 'rrr', '2023-04-27 20:08:54', '2023-04-27 20:08:54'),
(48, 14, 'rrr', '2023-04-27 20:08:55', '2023-04-27 20:08:55'),
(49, 14, 'rGr', '2023-04-27 20:08:58', '2023-04-27 20:08:58'),
(50, 14, 'rgrg', '2023-04-27 20:09:00', '2023-04-27 20:09:00'),
(51, 14, 'rgrgrg', '2023-04-27 20:09:03', '2023-04-27 20:09:03'),
(52, 14, 'th', '2023-04-28 01:14:32', '2023-04-28 01:14:32'),
(53, 14, 'test test test', '2023-04-28 01:16:26', '2023-04-28 01:16:26'),
(54, 14, 'rete', '2023-04-28 01:16:36', '2023-04-28 01:16:36'),
(55, 14, 'tt', '2023-04-28 01:17:50', '2023-04-28 01:17:50'),
(56, 14, '34th comment', '2023-04-28 10:44:09', '2023-04-28 10:44:09'),
(57, 14, '35th comment\n', '2023-04-28 10:44:18', '2023-04-28 10:44:18'),
(58, 14, '36th\n\nBlue Sky Blue sky', '2023-04-28 13:08:27', '2023-04-28 13:08:27'),
(59, 14, 'popo', '2023-04-28 13:11:44', '2023-04-28 13:11:44'),
(60, 14, 'post comment', '2023-04-28 14:00:48', '2023-04-28 14:00:48'),
(61, 14, 'for test', '2023-04-28 14:00:52', '2023-04-28 14:00:52'),
(62, 14, 'lalalala', '2023-04-28 14:00:55', '2023-04-28 14:00:55'),
(63, 14, 'nnaaann', '2023-04-28 14:00:57', '2023-04-28 14:00:57'),
(64, 14, 'ttgg', '2023-04-28 14:00:59', '2023-04-28 14:00:59'),
(65, 14, 'bgbgb', '2023-04-28 14:01:00', '2023-04-28 14:01:00'),
(66, 14, 'gbgbg', '2023-04-28 14:01:01', '2023-04-28 14:01:01'),
(67, 14, 'test testtes ', '2023-04-28 14:01:05', '2023-04-28 14:01:05'),
(68, 14, '11th comment', '2023-04-28 14:01:10', '2023-04-28 14:01:10'),
(69, 14, 'Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long Comment long ', '2023-04-28 14:44:38', '2023-04-28 14:44:38'),
(70, 14, 'po', '2023-05-01 17:22:31', '2023-05-01 17:22:31'),
(71, 14, 'ty', '2023-05-01 17:40:46', '2023-05-01 17:40:46'),
(72, 28, 'I really like this album', '2023-05-02 10:01:38', '2023-05-02 10:01:38'),
(73, 28, 'This is a great collection', '2023-05-02 10:04:13', '2023-05-02 10:04:13'),
(74, 29, 'I like this album', '2023-05-02 10:23:10', '2023-05-02 10:23:10');

-- --------------------------------------------------------

--
-- Table structure for table `comment_album`
--

CREATE TABLE `comment_album` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `album_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment_album`
--

INSERT INTO `comment_album` (`id`, `comment_id`, `album_id`) VALUES
(1, 8, 1),
(2, 9, 1),
(3, 10, 1),
(4, 11, 1),
(5, 12, 1),
(6, 13, 1),
(7, 14, 1),
(8, 15, 1),
(9, 16, 1),
(10, 17, 1),
(11, 18, 1),
(12, 19, 1),
(13, 20, 1),
(14, 21, 1),
(15, 22, 1),
(16, 23, 1),
(17, 24, 1),
(18, 25, 1),
(19, 26, 1),
(20, 27, 1),
(21, 28, 1),
(22, 29, 1),
(23, 30, 1),
(24, 31, 1),
(25, 32, 1),
(26, 33, 1),
(27, 34, 1),
(28, 38, 1),
(29, 39, 1),
(30, 40, 1),
(31, 41, 1),
(32, 42, 1),
(33, 52, 1),
(34, 56, 1),
(35, 57, 1),
(36, 58, 1),
(37, 59, 10),
(38, 69, 1),
(39, 72, 1),
(40, 74, 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment_collection`
--

CREATE TABLE `comment_collection` (
  `id` int(11) NOT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `collection_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment_collection`
--

INSERT INTO `comment_collection` (`id`, `comment_id`, `collection_id`) VALUES
(3, 35, 21),
(4, 36, 21),
(5, 37, 21),
(6, 43, 21),
(7, 44, 21),
(8, 45, 21),
(9, 46, 21),
(10, 47, 21),
(11, 48, 21),
(12, 49, 21),
(13, 50, 21),
(14, 51, 21),
(15, 53, 21),
(16, 54, 21),
(17, 55, 21),
(27, 70, 42),
(28, 71, 42),
(29, 73, 44);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `country_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genre_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`id`, `genre_name`) VALUES
(1, 'Progressive Rock'),
(2, 'Pop Rock'),
(3, 'Rock'),
(4, 'Hard Rock'),
(5, 'Folk Rock'),
(6, 'Jazz Fusion'),
(7, 'Soul'),
(8, 'New Wave'),
(9, 'Alternative Rock'),
(10, 'Pop'),
(11, 'Jazz'),
(12, 'Hip hop'),
(13, 'Industrial Rock'),
(14, 'Electronic'),
(15, 'Folk'),
(16, 'R&B'),
(17, 'Blues'),
(18, 'Psychedelic Rock'),
(19, 'Soft Rock'),
(20, 'Heartland Rock'),
(21, 'Country Rock'),
(22, 'Blues Rock'),
(23, 'Funk'),
(24, 'Power Pop'),
(25, 'Funk Rock'),
(26, 'Heavy Metal'),
(27, 'Dance-Pop'),
(28, 'Worldbeat'),
(29, 'Synthpop'),
(30, 'Modal Jazz'),
(31, 'Baroque Pop'),
(32, 'Art Rock'),
(33, 'Psychedelic Pop'),
(34, 'Grunge'),
(35, 'G-funk'),
(36, 'East Coast hip hop'),
(37, 'Nothing'),
(38, 'Alternative Country'),
(39, 'House'),
(40, 'Garage Rock'),
(41, 'Pop Punk'),
(42, 'Indie Rock'),
(43, 'Pop Rap'),
(44, 'Grime'),
(45, 'Experimental'),
(46, 'Indie Folk'),
(47, 'Alternative R&B'),
(48, 'West Coast Hip Hop'),
(49, 'Jazz Rap'),
(50, 'Disco'),
(51, 'Chicago Blues'),
(53, 'Funk Pop'),
(54, 'Pop folk'),
(55, 'Indie'),
(56, 'Dark hip hop'),
(57, 'Rock pop'),
(58, 'Synth Dance'),
(59, 'Rock punk'),
(60, 'Soft piano'),
(61, 'Soft pop');

-- --------------------------------------------------------

--
-- Table structure for table `rating_album`
--

CREATE TABLE `rating_album` (
  `id` int(11) NOT NULL,
  `rating` tinyint(1) DEFAULT NULL COMMENT 'rating from 1-5',
  `album_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT current_timestamp(),
  `last_updated_datetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rating_album`
--

INSERT INTO `rating_album` (`id`, `rating`, `album_id`, `user_id`, `created_datetime`, `last_updated_datetime`) VALUES
(5, 3, 1, 16, '2023-04-23 20:11:04', '2023-04-23 20:11:04'),
(6, 4, 31, 16, '2023-04-23 20:11:52', '2023-04-23 20:11:52'),
(7, 3, 24, 14, '2023-04-23 21:06:06', '2023-04-23 21:06:06'),
(43, 4, 1, 14, '2023-05-01 23:43:28', '2023-05-01 23:43:28'),
(45, 5, 1, 28, '2023-05-02 10:01:28', '2023-05-02 10:01:28'),
(46, 5, 1, 29, '2023-05-02 10:22:51', '2023-05-02 10:22:51');

-- --------------------------------------------------------

--
-- Table structure for table `record_company`
--

CREATE TABLE `record_company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `record_company`
--

INSERT INTO `record_company` (`id`, `company_name`) VALUES
(1, 'Harvest'),
(2, 'Warner Bros.'),
(3, 'Columbia'),
(4, 'Asylum'),
(5, 'Atlantic'),
(6, 'Rolling Stones Records'),
(7, 'ABC'),
(8, 'Tamla'),
(9, 'Chrysalis'),
(10, 'Epic'),
(11, 'Island'),
(12, 'Geffen'),
(13, 'A&M'),
(14, 'Sire'),
(15, 'Mercury'),
(16, 'Capitol'),
(17, 'Apple'),
(18, 'Verve'),
(19, 'Track'),
(20, 'Parlophone'),
(21, 'DGC'),
(22, 'Death Row'),
(23, 'Ruffhouse'),
(24, 'Loud'),
(25, 'Mr. Self Destruct'),
(26, 'Nonesuch'),
(27, 'Virgin'),
(28, 'RCA'),
(29, 'Reprise'),
(30, 'Merge'),
(31, 'Roc-A-Fella'),
(32, 'Self-released'),
(33, '2NV'),
(34, 'Domino'),
(35, 'XL'),
(36, 'Jagjaguwar'),
(37, 'Def Jam'),
(38, 'Boys Don\'t Cry'),
(39, 'Aftermath'),
(40, 'Macklemore'),
(41, 'Record'),
(42, 'Chess Records');

-- --------------------------------------------------------

--
-- Table structure for table `track`
--

CREATE TABLE `track` (
  `id` int(11) NOT NULL,
  `track_title` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `album_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `track`
--

INSERT INTO `track` (`id`, `track_title`, `duration`, `album_id`) VALUES
(1, 'Second Hand News', NULL, 2),
(2, 'Dreams', NULL, 2),
(3, 'Never Going Back Again', NULL, 2),
(4, 'Don\'t Stop', NULL, 2),
(5, 'Go Your Own Way', NULL, 2),
(6, 'Songbird', NULL, 2),
(7, 'The Chain', NULL, 2),
(8, 'You Make Loving Fun', NULL, 2),
(9, 'I Don\'t Want to Know', NULL, 2),
(10, 'Oh Daddy', NULL, 2),
(11, 'Gold Dust Woman', NULL, 2),
(12, 'Thunder Road', NULL, 3),
(13, 'Tenth Avenue Freeze-Out', NULL, 3),
(14, 'Night', NULL, 3),
(15, 'Backstreets', NULL, 3),
(16, 'Born to Run', NULL, 3),
(17, 'She\'s the One', NULL, 3),
(18, 'Meeting Across the River', NULL, 3),
(19, 'Jungleland', NULL, 3),
(20, 'Hotel California', NULL, 4),
(21, 'New Kid in Town', NULL, 4),
(22, 'Life in the Fast Lane', NULL, 4),
(23, 'Wasted Time', NULL, 4),
(24, 'Wasted Time (Reprise)', NULL, 4),
(25, 'Victim of Love', NULL, 4),
(26, 'Pretty Maids All in a Row', NULL, 4),
(27, 'Try and Love Again', NULL, 4),
(28, 'The Last Resort', NULL, 4),
(29, 'Black Dog', NULL, 5),
(30, 'Rock and Roll', NULL, 5),
(31, 'The Battle of Evermore', NULL, 5),
(32, 'Stairway to Heaven', NULL, 5),
(33, 'Misty Mountain Hop', NULL, 5),
(34, 'Four Sticks', NULL, 5),
(35, 'Going to California', NULL, 5),
(36, 'When the Levee Breaks', NULL, 5),
(37, 'Brown Sugar', NULL, 6),
(38, 'Sway', NULL, 6),
(39, 'Wild Horses', NULL, 6),
(40, 'Can\'t You Hear Me Knocking', NULL, 6),
(41, 'You Gotta Move', NULL, 6),
(42, 'Bitch', NULL, 6),
(43, 'I Got the Blues', NULL, 6),
(44, 'Sister Morphine', NULL, 6),
(45, 'Dead Flowers', NULL, 6),
(46, 'Moonlight Mile', NULL, 6),
(47, 'Court and Spark', NULL, 7),
(48, 'Help Me', NULL, 7),
(49, 'Free Man in Paris', NULL, 7),
(50, 'People\'s Parties', NULL, 7),
(51, 'The Same Situation', NULL, 7),
(52, 'Car on a Hill', NULL, 7),
(53, 'Down to You', NULL, 7),
(54, 'Just Like This Train', NULL, 7),
(55, 'Raised on Robbery', NULL, 7),
(56, 'Trouble Child', NULL, 7),
(57, 'Twisted', NULL, 7),
(58, 'Black Cow', NULL, 8),
(59, 'Aja', NULL, 8),
(60, 'Deacon Blues', NULL, 8),
(61, 'Peg', NULL, 8),
(62, 'Home at Last', NULL, 8),
(63, 'I Got the News', NULL, 8),
(64, 'Josie', NULL, 8),
(65, 'Love\'s in Need of Love Today', NULL, 9),
(66, 'Have a Talk with God', NULL, 9),
(67, 'Village Ghetto Land', NULL, 9),
(68, 'Contusion', NULL, 9),
(69, 'Sir Duke', NULL, 9),
(70, 'I Wish', NULL, 9),
(71, 'Knocks Me Off My Feet', NULL, 9),
(72, 'Pastime Paradise', NULL, 9),
(73, 'Summer Soft', NULL, 9),
(74, 'Ordinary Pain', NULL, 9),
(75, 'Isn\'t She Lovely', NULL, 9),
(76, 'Joy Inside My Tears', NULL, 9),
(77, 'Black Man', NULL, 9),
(78, 'Ngiculela - Es Una Historia - I Am Singing', NULL, 9),
(79, 'If It\'s Magic', NULL, 9),
(80, 'As', NULL, 9),
(81, 'Another Star', NULL, 9),
(82, 'Hanging on the Telephone', NULL, 10),
(83, 'One Way or Another', NULL, 10),
(84, 'Picture This', NULL, 10),
(85, 'Fade Away and Radiate', NULL, 10),
(86, 'Pretty Baby', NULL, 10),
(87, 'I Know but I Don\'t Know', NULL, 10),
(88, '11:59', NULL, 10),
(89, 'Will Anything Happen?', NULL, 10),
(90, 'Sunday Girl', NULL, 10),
(91, 'Heart of Glass', NULL, 10),
(92, 'I\'m Gonna Love You Too', NULL, 10),
(93, 'Just Go Away', NULL, 10),
(94, 'By the Way', NULL, 11),
(95, 'Universally Speaking', NULL, 11),
(96, 'This Is the Place', NULL, 11),
(97, 'Dosed', NULL, 11),
(98, 'Don\'t Forget Me', NULL, 11),
(99, 'The Zephyr Song', NULL, 11),
(100, 'Can\'t Stop', NULL, 11),
(101, 'I Could Die for You', NULL, 11),
(102, 'Midnight', NULL, 11),
(103, 'Throw Away Your Television', NULL, 11),
(104, 'Cabron', NULL, 11),
(105, 'Wanna Be Startin\' Somethin\'', NULL, 12),
(106, 'Baby Be Mine', NULL, 12),
(107, 'The Girl Is Mine (with Paul McCartney)', NULL, 12),
(108, 'Thriller', NULL, 12),
(109, 'Beat It', NULL, 12),
(110, 'Billie Jean', NULL, 12),
(111, 'Human Nature', NULL, 12),
(112, 'P.Y.T. (Pretty Young Thing)', NULL, 12),
(113, 'The Lady in My Life', NULL, 12),
(114, 'Let\'s Go Crazy', NULL, 13),
(115, 'Take Me With U', NULL, 13),
(116, 'The Beautiful Ones', NULL, 13),
(117, 'Computer Blue', NULL, 13),
(118, 'Darling Nikki', NULL, 13),
(119, 'When Doves Cry', NULL, 13),
(120, 'I Would Die 4 U', NULL, 13),
(121, 'Baby I\'m a Star', NULL, 13),
(122, 'Purple Rain', NULL, 13),
(123, 'Where the Streets Have No Name', NULL, 14),
(124, 'I Still Haven\'t Found What I\'m Looking For', NULL, 14),
(125, 'With or Without You', NULL, 14),
(126, 'Bullet the Blue Sky', NULL, 14),
(127, 'Running to Stand Still', NULL, 14),
(128, 'Red Hill Mining Town', NULL, 14),
(129, 'In God\'s Country', NULL, 14),
(130, 'Trip Through Your Wires', NULL, 14),
(131, 'One Tree Hill', NULL, 14),
(132, 'Exit', NULL, 14),
(133, 'Mothers of the Disappeared', NULL, 14),
(134, 'Welcome to the Jungle', NULL, 15),
(135, 'It\'s So Easy', NULL, 15),
(136, 'Nightrain', NULL, 15),
(137, 'Out ta Get Me', NULL, 15),
(138, 'Mr. Brownstone', NULL, 15),
(139, 'Paradise City', NULL, 15),
(140, 'My Michelle', NULL, 15),
(141, 'Think About You', NULL, 15),
(142, 'Sweet Child o\' Mine', NULL, 15),
(143, 'You\'re Crazy', NULL, 15),
(144, 'Anything Goes', NULL, 15),
(145, 'Rocket Queen', NULL, 15),
(146, 'Synchronicity I', NULL, 16),
(147, 'Walking in Your Footsteps', NULL, 16),
(148, 'O My God', NULL, 16),
(149, 'Mother', NULL, 16),
(150, 'Miss Gradenko', NULL, 16),
(151, 'Synchronicity II', NULL, 16),
(152, 'Every Breath You Take', NULL, 16),
(153, 'King of Pain', NULL, 16),
(154, 'Wrapped Around Your Finger', NULL, 16),
(155, 'Tea in the Sahara', NULL, 16),
(156, 'Born in the U.S.A.', NULL, 17),
(157, 'Cover Me', NULL, 17),
(158, 'Darlington County', NULL, 17),
(159, 'Working on the Highway', NULL, 17),
(160, 'Downbound Train', NULL, 17),
(161, 'I\'m on Fire', NULL, 17),
(162, 'No Surrender', NULL, 17),
(163, 'Bobby Jean', NULL, 17),
(164, 'I\'m Goin\' Down', NULL, 17),
(165, 'Glory Days', NULL, 17),
(166, 'Dancing in the Dark', NULL, 17),
(167, 'My Hometown', NULL, 17),
(168, 'Cherish', NULL, 18),
(169, 'Express Yourself', NULL, 18),
(170, 'Love Song', NULL, 18),
(171, 'Oh Father', NULL, 18),
(172, 'Promise to Try', NULL, 18),
(173, 'Keep It Together', NULL, 18),
(174, 'Spanish Eyes', NULL, 18),
(175, 'Act of Contrition', NULL, 18),
(176, 'Like a Prayer', NULL, 18),
(177, 'Women', NULL, 19),
(178, 'Rocket', NULL, 19),
(179, 'Animal', NULL, 19),
(180, 'Love Bites', NULL, 19),
(181, 'Pour Some Sugar on Me', NULL, 19),
(182, 'Armageddon It', NULL, 19),
(183, 'Gods of War', NULL, 19),
(184, 'Don\'t Shoot Shotgun', NULL, 19),
(185, 'Run Riot', NULL, 19),
(186, 'Hysteria', NULL, 19),
(187, 'Excitable', NULL, 19),
(188, 'Love and Affection', NULL, 19),
(189, 'The Boy in the Bubble', NULL, 20),
(190, 'Graceland', NULL, 20),
(191, 'I Know What I Know', NULL, 20),
(192, 'Gumboots', NULL, 20),
(193, 'Diamonds on the Soles of Her Shoes', NULL, 20),
(194, 'You Can Call Me Al', NULL, 20),
(195, 'Under African Skies', NULL, 20),
(196, 'Homeless', NULL, 20),
(197, 'Crazy Love', NULL, 20),
(198, 'Vol. II', NULL, 20),
(199, 'That Was Your Mother', NULL, 20),
(200, 'All Around the World or The Myth of Fingerprints', NULL, 20),
(201, 'Tougher Than the Rest', NULL, 21),
(202, 'All That Heaven Will Allow', NULL, 21),
(203, 'Spare Parts', NULL, 21),
(204, 'Cautious Man', NULL, 21),
(205, 'Walk Like a Man', NULL, 21),
(206, 'Tunnel of Love', NULL, 21),
(207, 'Two Faces', NULL, 21),
(208, 'Brilliant Disguise', NULL, 21),
(209, 'One Step Up', NULL, 21),
(210, 'When You\'re Alone', NULL, 21),
(211, 'Valentine\'s Day', NULL, 21),
(212, 'Rio', NULL, 22),
(213, 'My Own Way', NULL, 22),
(214, 'Lonely in Your Nightmare', NULL, 22),
(215, 'Hungry Like the Wolf', NULL, 22),
(216, 'So What', NULL, 23),
(217, 'Freddie Freeloader', NULL, 23),
(218, 'Blue in Green', NULL, 23),
(219, 'All Blues', NULL, 23),
(220, 'Flamenco Sketches', NULL, 23),
(221, 'Back in the U.S.S.R.', NULL, 24),
(222, 'Dear Prudence', NULL, 24),
(223, 'Glass Onion', NULL, 24),
(224, 'Ob-La-Di', NULL, 24),
(225, 'Ob-La-Da', NULL, 24),
(226, 'Wild Honey Pie', NULL, 24),
(227, 'The Continuing Story of Bungalow Bill', NULL, 24),
(228, 'While My Guitar Gently Weeps', NULL, 24),
(229, 'Happiness Is a Warm Gun', NULL, 24),
(230, 'Martha My Dear', NULL, 24),
(231, 'I\'m So Tired', NULL, 24),
(232, 'Blackbird', NULL, 24),
(233, 'Piggies', NULL, 24),
(234, 'Rocky Raccoon', NULL, 24),
(235, 'Don\'t Pass Me By', NULL, 24),
(236, 'Why Don\'t We Do It in the Road?', NULL, 24),
(237, 'I Will', NULL, 24),
(238, 'Julia', NULL, 24),
(239, 'Birthday', NULL, 24),
(240, 'Yer Blues', NULL, 24),
(241, 'Mother Nature\'s Son', NULL, 24),
(242, 'Everybody\'s Got Something to Hide Except Me and My Monkey', NULL, 24),
(243, 'Sexy Sadie', NULL, 24),
(244, 'Helter Skelter', NULL, 24),
(245, 'Long', NULL, 24),
(246, 'Long', NULL, 24),
(247, 'Long', NULL, 24),
(248, 'Revolution 1', NULL, 24),
(249, 'Honey Pie', NULL, 24),
(250, 'Savoy Truffle', NULL, 24),
(251, 'Cry Baby Cry', NULL, 24),
(252, 'Revolution 9', NULL, 24),
(253, 'Good Night', NULL, 24),
(254, 'Wouldn\'t It Be Nice', NULL, 25),
(255, 'You Still Believe in Me', NULL, 25),
(256, 'That\'s Not Me', NULL, 25),
(257, 'Don\'t Talk (Put Your Head on My Shoulder)', NULL, 25),
(258, 'I\'m Waiting for the Day', NULL, 25),
(259, 'Let\'s Go Away for Awhile', NULL, 25),
(260, 'Sloop John B', NULL, 25),
(261, 'God Only Knows', NULL, 25),
(262, 'I Know There\'s an Answer', NULL, 25),
(263, 'Here Today', NULL, 25),
(264, 'I Just Wasn\'t Made for These Times', NULL, 25),
(265, 'Pet Sounds', NULL, 25),
(266, 'Caroline', NULL, 25),
(267, 'No', NULL, 25),
(268, 'Like a Rolling Stone', NULL, 26),
(269, 'Tombstone Blues', NULL, 26),
(270, 'It Takes a Lot to Laugh', NULL, 26),
(271, 'It Takes a Train to Cry', NULL, 26),
(272, 'From a Buick 6', NULL, 26),
(273, 'Ballad of a Thin Man', NULL, 26),
(274, 'Queen Jane Approximately', NULL, 26),
(275, 'Highway 61 Revisited', NULL, 26),
(276, 'Just Like Tom Thumb\'s Blues', NULL, 26),
(277, 'Desolation Row', NULL, 26),
(278, 'Sunday Morning', NULL, 27),
(279, 'I\'m Waiting for the Man', NULL, 27),
(280, 'Femme Fatale', NULL, 27),
(281, 'Venus in Furs', NULL, 27),
(282, 'Run Run Run', NULL, 27),
(283, 'All Tomorrow\'s Parties', NULL, 27),
(284, 'Heroin', NULL, 27),
(285, 'There She Goes Again', NULL, 27),
(286, 'I\'ll Be Your Mirror', NULL, 27),
(287, 'The Black Angel\'s Death Song', NULL, 27),
(288, 'European Son', NULL, 27),
(289, 'Good Times Bad Times', NULL, 28),
(290, 'Babe I\'m Gonna Leave You', NULL, 28),
(291, 'You Shook Me', NULL, 28),
(292, 'Dazed and Confused', NULL, 28),
(293, 'Your Time Is Gonna Come', NULL, 28),
(294, 'Black Mountain Side', NULL, 28),
(295, 'Communication Breakdown', NULL, 28),
(296, 'I Can\'t Quit You Baby', NULL, 28),
(297, 'How Many More Times', NULL, 28),
(298, 'Foxy Lady', NULL, 29),
(299, 'Manic Depression', NULL, 29),
(300, 'Red House', NULL, 29),
(301, 'Can You See Me', NULL, 29),
(302, 'Love or Confusion', NULL, 29),
(303, 'I Don\'t Live Today', NULL, 29),
(304, 'May This Be Love', NULL, 29),
(305, 'Fire', NULL, 29),
(306, 'Third Stone from the Sun', NULL, 29),
(307, 'Remember', NULL, 29),
(308, 'Are You Experienced?', NULL, 29),
(309, 'Sgt. Pepper\'s Lonely Hearts Club Band', NULL, 30),
(310, 'With a Little Help from My Friends', NULL, 30),
(311, 'Lucy in the Sky with Diamonds', NULL, 30),
(312, 'Getting Better', NULL, 30),
(313, 'Fixing a Hole', NULL, 30),
(314, 'She\'s Leaving Home', NULL, 30),
(315, 'Being for the Benefit of Mr. Kite!', NULL, 30),
(316, 'Within You Without You', NULL, 30),
(317, 'When I\'m Sixty-Four', NULL, 30),
(318, 'Lovely Rita', NULL, 30),
(319, 'Good Morning Good Morning', NULL, 30),
(320, 'Sgt. Pepper\'s Lonely Hearts Club Band (Reprise)', NULL, 30),
(321, 'A Day in the Life', NULL, 30),
(322, 'Smells Like Teen Spirit', NULL, 31),
(323, 'In Bloom', NULL, 31),
(324, 'Come as You Are', NULL, 31),
(325, 'Breed', NULL, 31),
(326, 'Lithium', NULL, 31),
(327, 'Polly', NULL, 31),
(328, 'Territorial Pissings', NULL, 31),
(329, 'Drain You', NULL, 31),
(330, 'Lounge Act', NULL, 31),
(331, 'Stay Away', NULL, 31),
(332, 'On a Plain', NULL, 31),
(333, 'Something in the Way', NULL, 31),
(334, 'The Chronic (Intro)', NULL, 32),
(335, 'Fuck wit Dre Day (And Everybody\'s Celebratin\')', NULL, 32),
(336, 'Let Me Ride', NULL, 32),
(337, 'The Day the Niggaz Took Over', NULL, 32),
(338, '\" Nuthin\' but a \"\"G\"\" Thang\"', NULL, 32),
(339, 'Deeez Nuuuts', NULL, 32),
(340, 'Lil\' Ghetto Boy', NULL, 32),
(341, 'A Nigga Witta Gun', NULL, 32),
(342, 'Rat-Tat-Tat-Tat', NULL, 32),
(343, 'The $20 Sack Pyramid', NULL, 32),
(344, 'Lyrical Gangbang', NULL, 32),
(345, 'High Powered', NULL, 32),
(346, 'The Doctor\'s Office', NULL, 32),
(347, 'Stranded on Death Row', NULL, 32),
(348, 'The Roach (The Chronic Outro)', NULL, 32),
(349, 'Airbag', NULL, 33),
(350, 'Paranoid Android', NULL, 33),
(351, 'Subterranean Homesick Alien', NULL, 33),
(352, 'Exit Music (For a Film)', NULL, 33),
(353, 'Let Down', NULL, 33),
(354, 'Karma Police', NULL, 33),
(355, 'Fitter Happier', NULL, 33),
(356, 'Electioneering', NULL, 33),
(357, 'Climbing Up the Walls', NULL, 33),
(358, 'No Surprises', NULL, 33),
(359, 'Lucky', NULL, 33),
(360, 'The Tourist', NULL, 33),
(361, 'Intro', NULL, 34),
(362, 'Lost Ones', NULL, 34),
(363, 'Ex-Factor', NULL, 34),
(364, 'To Zion', NULL, 34),
(365, 'Doo Wop (That Thing)', NULL, 34),
(366, 'Superstar', NULL, 34),
(367, 'Final Hour', NULL, 34),
(368, 'When It Hurts So Bad', NULL, 34),
(369, 'I Used to Love Him', NULL, 34),
(370, 'Forgive Them Father', NULL, 34),
(371, 'Every Ghetto', NULL, 34),
(372, 'Every City', NULL, 34),
(373, 'Nothing Even Matters', NULL, 34),
(374, 'Everything Is Everything', NULL, 34),
(375, 'The Miseducation of Lauryn Hill', NULL, 34),
(376, 'Can\'t Take My Eyes Off of You', NULL, 34),
(377, 'Tell Him', NULL, 34),
(378, 'Planet Telex', NULL, 35),
(379, 'The Bends', NULL, 35),
(380, 'High and Dry', NULL, 35),
(381, 'Fake Plastic Trees', NULL, 35),
(382, 'Bones', NULL, 35),
(383, '(Nice Dream)', NULL, 35),
(384, 'Just', NULL, 35),
(385, 'My Iron Lung', NULL, 35),
(386, 'Bullet Proof..I Wish I Was', NULL, 35),
(387, 'Black Star', NULL, 35),
(388, 'Sulk', NULL, 35),
(389, 'Street Spirit (Fade Out)', NULL, 35),
(390, 'Bring da Ruckus', NULL, 36),
(391, 'Shame on a Nigga', NULL, 36),
(392, 'Clan in da Front', NULL, 36),
(393, 'Wu-Tang: 7th Chamber', NULL, 36),
(394, 'Can It Be All So Simple', NULL, 36),
(395, 'Protect Ya Neck', NULL, 36),
(396, 'Intermission', NULL, 36),
(397, 'Da Mystery of Chessboxin\'', NULL, 36),
(398, 'Wu-Tang Clan Ain\'t Nuthing ta Fuck Wit', NULL, 36),
(399, 'C.R.E.A.M.', NULL, 36),
(400, 'Method Man', NULL, 36),
(401, 'Tearz', NULL, 36),
(402, 'Wu-Tang: 7th Chamber - Part II', NULL, 36),
(403, 'Conclusion', NULL, 36),
(404, 'Drive', NULL, 37),
(405, 'Try Not to Breathe', NULL, 37),
(406, 'The Sidewinder Sleeps Tonite', NULL, 37),
(407, 'Everybody Hurts', NULL, 37),
(408, 'New Orleans Instrumental No. 1', NULL, 37),
(409, 'Sweetness Follows', NULL, 37),
(410, 'Monty Got a Raw Deal', NULL, 37),
(411, 'Ignoreland', NULL, 37),
(412, 'Star Me Kitten', NULL, 37),
(413, 'Man on the Moon', NULL, 37),
(414, 'Nightswimming', NULL, 37),
(415, 'Find the River', NULL, 37),
(416, 'Piggy', NULL, 38),
(417, 'Heresy', NULL, 38),
(418, 'March of the Pigs', NULL, 38),
(419, 'Closer', NULL, 38),
(420, 'Ruiner', NULL, 38),
(421, 'The Becoming', NULL, 38),
(422, 'I Do Not Want This', NULL, 38),
(423, 'Big Man with a Gun', NULL, 38),
(424, 'A Warm Place', NULL, 38),
(425, 'Eraser', NULL, 38),
(426, 'Reptile', NULL, 38),
(427, 'The Downward Spiral', NULL, 38),
(428, 'Hurt', NULL, 38),
(429, 'Everything in Its Right Place', NULL, 39),
(430, 'Kid A', NULL, 39),
(431, 'The National Anthem', NULL, 39),
(432, 'How to Disappear Completely', NULL, 39),
(433, 'Treefingers', NULL, 39),
(434, 'Optimistic', NULL, 39),
(435, 'In Limbo', NULL, 39),
(436, 'Idioteque', NULL, 39),
(437, 'Morning Bell', NULL, 39),
(438, 'Motion Picture Soundtrack', NULL, 39),
(439, 'I Am Trying to Break Your Heart', NULL, 40),
(440, 'Kamera', NULL, 40),
(441, 'Radio Cure', NULL, 40),
(442, 'War on War', NULL, 40),
(443, 'Jesus', NULL, 40),
(444, 'Etc.', NULL, 40),
(445, 'Ashes of American Flags', NULL, 40),
(446, 'Heavy Metal Drummer', NULL, 40),
(447, 'I\'m the Man Who Loves You', NULL, 40),
(448, 'Pot Kettle Black', NULL, 40),
(449, 'Poor Places', NULL, 40),
(450, 'Reservations', NULL, 40),
(451, 'One More Time', NULL, 41),
(452, 'Aerodynamic', NULL, 41),
(453, 'Digital Love', NULL, 41),
(454, 'Harder', NULL, 41),
(455, 'Better', NULL, 41),
(456, 'Faster', NULL, 41),
(457, 'Stronger', NULL, 41),
(458, 'Crescendolls', NULL, 41),
(459, 'Nightvision', NULL, 41),
(460, 'Superheroes', NULL, 41),
(461, 'High Life', NULL, 41),
(462, 'Something About Us', NULL, 41),
(463, 'Voyager', NULL, 41),
(464, 'Veridis Quo', NULL, 41),
(465, 'Short Circuit', NULL, 41),
(466, 'Is This It', NULL, 42),
(467, 'The Modern Age', NULL, 42),
(468, 'Soma', NULL, 42),
(469, 'Barely Legal', NULL, 42),
(470, 'Someday', NULL, 42),
(471, 'Alone', NULL, 42),
(472, 'Together', NULL, 42),
(473, 'Last Nite', NULL, 42),
(474, 'Hard to Explain', NULL, 42),
(475, 'New York City Cops', NULL, 42),
(476, 'Trying Your Luck', NULL, 42),
(477, 'Take It or Leave It', NULL, 42),
(478, 'American Idiot', NULL, 43),
(479, 'Jesus of Suburbia', NULL, 43),
(480, 'Holiday', NULL, 43),
(481, 'Boulevard of Broken Dreams', NULL, 43),
(482, 'Are We the Waiting', NULL, 43),
(483, 'St. Jimmy', NULL, 43),
(484, 'Give Me Novacaine', NULL, 43),
(485, 'She\'s a Rebel', NULL, 43),
(486, 'Extraordinary Girl', NULL, 43),
(487, 'Letterbomb', NULL, 43),
(488, 'Wake Me Up When September Ends', NULL, 43),
(489, 'Homecoming', NULL, 43),
(490, 'Whatsername', NULL, 43),
(491, 'Neighborhood #1 (Tunnels)', NULL, 44),
(492, 'Neighborhood #2 (Laika)', NULL, 44),
(493, 'Une année sans lumière', NULL, 44),
(494, 'Neighborhood #3 (Power Out)', NULL, 44),
(495, 'Neighborhood #4 (7 Kettles)', NULL, 44),
(496, 'Crown of Love', NULL, 44),
(497, 'Wake Up', NULL, 44),
(498, 'Haiti', NULL, 44),
(499, 'Rebellion (Lies)', NULL, 44),
(500, 'In the Backseat', NULL, 44),
(501, 'Good Morning', NULL, 45),
(502, 'Champion', NULL, 45),
(503, 'Stronger', NULL, 45),
(504, 'I Wonder', NULL, 45),
(505, 'Good Life', NULL, 45),
(506, 'Can\'t Tell Me Nothing', NULL, 45),
(507, 'Barry Bonds', NULL, 45),
(508, 'Drunk and Hot Girls', NULL, 45),
(509, 'Flashing Lights', NULL, 45),
(510, 'Everything I Am', NULL, 45),
(511, 'The Glory', NULL, 45),
(512, 'Homecoming', NULL, 45),
(513, 'Big Brother', NULL, 45),
(514, '15 Step', NULL, 46),
(515, 'Bodysnatchers', NULL, 46),
(516, 'Nude', NULL, 46),
(517, 'Weird Fishes/Arpeggi', NULL, 46),
(518, 'All I Need', NULL, 46),
(519, 'Faust Arp', NULL, 46),
(520, 'Reckoner', NULL, 46),
(521, 'House of Cards', NULL, 46),
(522, 'Jigsaw Falling Into Place', NULL, 46),
(523, 'Videotape', NULL, 46),
(524, 'Kidulthood to Adulthood', NULL, 47),
(525, 'Black Boys', NULL, 47),
(526, 'Who Wants to Be a Millionaire?', NULL, 47),
(527, 'Never See Me Fall', NULL, 47),
(528, 'Your Wish Is My Command', NULL, 47),
(529, 'Don\'t Go There', NULL, 47),
(530, 'Where\'s Your Love?', NULL, 47),
(531, 'Fantasy', NULL, 47),
(532, 'Before Before', NULL, 47),
(533, 'Freeze Snap', NULL, 47),
(534, 'Life', NULL, 47),
(535, 'In the Flowers', NULL, 48),
(536, 'My Girls', NULL, 48),
(537, 'Also Frightened', NULL, 48),
(538, 'Summertime Clothes', NULL, 48),
(539, 'Daily Routine', NULL, 48),
(540, 'Bluish', NULL, 48),
(541, 'Guys Eyes', NULL, 48),
(542, 'Taste', NULL, 48),
(543, 'Lion in a Coma', NULL, 48),
(544, 'No More Runnin', NULL, 48),
(545, 'Brother Sport', NULL, 48),
(546, 'Time to Pretend', NULL, 49),
(547, 'Weekend Wars', NULL, 49),
(548, 'The Youth', NULL, 49),
(549, 'Electric Feel', NULL, 49),
(550, 'Kids', NULL, 49),
(551, '4th Dimensional Transition', NULL, 49),
(552, 'Dark Fantasy', NULL, 50),
(553, 'Gorgeous', NULL, 50),
(554, 'POWER', NULL, 50),
(555, 'All of the Lights', NULL, 50),
(556, 'Monster', NULL, 50),
(557, 'So Appalled', NULL, 50),
(558, 'Devil in a New Dress', NULL, 50),
(559, 'Runaway', NULL, 50),
(560, 'Hell of a Life', NULL, 50),
(561, 'Blame Game', NULL, 50),
(562, 'Lost in the World', NULL, 50),
(563, 'Who Will Survive in America', NULL, 50),
(564, 'Rolling in the Deep', NULL, 51),
(565, 'Rumour Has It', NULL, 51),
(566, 'Turning Tables', NULL, 51),
(567, 'Don\'t You Remember', NULL, 51),
(568, 'Set Fire to the Rain', NULL, 51),
(569, 'He Won\'t Go', NULL, 51),
(570, 'Take It All', NULL, 51),
(571, 'I\'ll Be Waiting', NULL, 51),
(572, 'One and Only', NULL, 51),
(573, 'Lovesong', NULL, 51),
(574, 'Someone Like You', NULL, 51),
(575, 'Perth', NULL, 52),
(576, 'Minnesota', NULL, 52),
(577, 'WI', NULL, 52),
(578, 'Holocene', NULL, 52),
(579, 'Towers', NULL, 52),
(580, 'Michicant', NULL, 52),
(581, 'Hinnom', NULL, 52),
(582, 'TX', NULL, 52),
(583, 'Wash.', NULL, 52),
(584, 'Calgary', NULL, 52),
(585, 'Lisbon', NULL, 52),
(586, 'OH', NULL, 52),
(587, 'Beth/Rest', NULL, 52),
(588, 'Start', NULL, 53),
(589, 'Thinkin Bout You', NULL, 53),
(590, 'Fertilizer', NULL, 53),
(591, 'Sierra Leone', NULL, 53),
(592, 'Sweet Life', NULL, 53),
(593, 'Not Just Money', NULL, 53),
(594, 'Super Rich Kids', NULL, 53),
(595, 'Pilot Jones', NULL, 53),
(596, 'Crack Rock', NULL, 53),
(597, 'Pyramids', NULL, 53),
(598, 'Lost', NULL, 53),
(599, 'White', NULL, 53),
(600, 'Monks', NULL, 53),
(601, 'Bad Religion', NULL, 53),
(602, 'Pink Matter', NULL, 53),
(603, 'Forrest Gump', NULL, 53),
(604, 'End', NULL, 53),
(605, 'Nikes', NULL, 54),
(606, 'Ivy', NULL, 54),
(607, 'Pink + White', NULL, 54),
(608, 'Be Yourself', NULL, 54),
(609, 'Solo', NULL, 54),
(610, 'Skyline To', NULL, 54),
(611, 'Self Control', NULL, 54),
(612, 'Good Guy', NULL, 54),
(613, 'Nights', NULL, 54),
(614, 'Solo (Reprise)', NULL, 54),
(615, 'Pretty Sweet', NULL, 54),
(616, 'Facebook Story', NULL, 54),
(617, 'Close to You', NULL, 54),
(618, 'White Ferrari', NULL, 54),
(619, 'Siegfried', NULL, 54),
(620, 'Godspeed', NULL, 54),
(621, 'Futura Free', NULL, 54),
(622, 'Sherane a.k.a Master Splinter\'s Daughter', NULL, 55),
(623, 'Bitch', NULL, 55),
(624, 'Don\'t Kill My Vibe', NULL, 55),
(625, 'Backseat Freestyle', NULL, 55),
(626, 'The Art of Peer Pressure', NULL, 55),
(627, 'Money Trees', NULL, 55),
(628, 'Poetic Justice', NULL, 55),
(629, 'good kid', NULL, 55),
(630, 'm.A.A.d city', NULL, 55),
(631, 'Swimming Pools (Drank)', NULL, 55),
(632, 'Sing About Me', NULL, 55),
(633, 'I\'m Dying of Thirst', NULL, 55),
(634, 'Real', NULL, 55),
(635, 'Compton', NULL, 55),
(636, 'Wesley\'s Theory', NULL, 56),
(637, 'For Free? (Interlude)', NULL, 56),
(638, 'King Kunta', NULL, 56),
(639, 'Institutionalized', NULL, 56),
(640, 'These Walls', NULL, 56),
(641, 'u', NULL, 56),
(642, 'Alright', NULL, 56),
(643, 'For Sale? (Interlude)', NULL, 56),
(644, 'Momma', NULL, 56),
(645, 'Hood Politics', NULL, 56),
(646, 'How Much a Dollar Cost', NULL, 56),
(647, 'Complexion', NULL, 56),
(648, 'The Blacker the Berry', NULL, 56),
(649, 'You Ain\'t Gotta Lie (Momma Said)', NULL, 56),
(650, 'i', NULL, 56),
(651, 'Mortal Man', NULL, 56),
(652, 'Give Life Back to Music', NULL, 57),
(653, 'The Game of Love', NULL, 57),
(654, 'Giorgio by Moroder', NULL, 57),
(655, 'Within', NULL, 57),
(656, 'Instant Crush', NULL, 57),
(657, 'Lose Yourself to Dance', NULL, 57),
(658, 'Touch', NULL, 57),
(659, 'Get Lucky', NULL, 57),
(660, 'Beyond', NULL, 57),
(661, 'Motherboard', NULL, 57),
(662, 'Fragments of Time', NULL, 57),
(663, 'Doin\' It Right', NULL, 57),
(664, 'Contact', NULL, 57),
(665, 'Ten Thousand Hours', NULL, 58),
(666, 'Can\'t Hold Us', NULL, 58),
(667, 'Thrift Shop', NULL, 58),
(668, 'Thin Line', NULL, 58),
(669, 'Same Love', NULL, 58),
(670, 'Make the Money', NULL, 58),
(671, 'Neon Cathedral', NULL, 58),
(672, 'BomBom', NULL, 58),
(673, 'White Walls', NULL, 58),
(674, 'Jimmy Iovine', NULL, 58),
(675, 'Wing$', NULL, 58),
(676, 'A Wake', NULL, 58),
(677, 'Gold', NULL, 58),
(678, 'Starting Over', NULL, 58),
(679, 'Cowboy Boots', NULL, 58),
(680, 'Dirty Paws', NULL, 59),
(681, 'King and Lionheart', NULL, 59),
(682, 'Numb Bears', NULL, 59),
(683, 'Sloom', NULL, 59),
(684, 'Little Talks', NULL, 59),
(685, 'From Finner', NULL, 59),
(686, 'Six Weeks', NULL, 59),
(687, 'Love Love Love', NULL, 59),
(688, '1. I Just Want To Make Love To You', NULL, 61),
(689, '2. Long Distance Call', NULL, 61),
(690, '3. Louisiana Blues', NULL, 61),
(691, '4. Honey Bee', NULL, 61),
(692, '5. Rollin\' Stone', NULL, 61),
(693, '6. I\'m Ready', NULL, 61),
(694, '7. Hoochie Coochie Man', NULL, 61),
(695, '8. She Moves Me', NULL, 61),
(696, '9. I Want You To Love Me', NULL, 61),
(697, '10. Standing Around Crying', NULL, 61),
(698, '11. Still A Fool', NULL, 61),
(699, '\"12. I Can\'t Be Satisfied\"\"\"', NULL, 61),
(700, 'Speak to Me', NULL, 1),
(701, 'Breathe', NULL, 1),
(702, 'On the Run', NULL, 1),
(703, 'Time', NULL, 1),
(704, 'The Great Gig in the Sky', NULL, 1),
(705, 'Money', NULL, 1),
(706, 'Us and Them', NULL, 1),
(707, 'Any Colour You Like', NULL, 1),
(708, 'Brain Damage', NULL, 1),
(709, 'Eclipse', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `password` varbinary(255) NOT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT current_timestamp(),
  `last_active` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email_address`, `password`, `img_path`, `created_datetime`, `last_active`) VALUES
(11, 'phuongkute', 'phuongkute@gmail.com', 0x37643830633932623433383063653333346230393231353936333366346335333430353161623166666261366462353231376330303238303666303562353064613935656333666631663531363430333266383737383838666163366435373965306366616631623762616366643632376362343063643137313638396635336535356262303261633631626436656364313462646366313466626333313734, NULL, '2023-03-29 18:35:35', '2023-03-29 18:35:35'),
(14, 'GreenBubbleTea', 'phuongphuong96@gmail.com', 0x39383334656538376165636138376662343235373533623536316539306465626566323766646333323564626536666335333132356166663866396634346133346537383631613434313530653031373937363366316165356638636530663562353937653065616535373761366564363230396661393132633262663761366566376263653539376264393762316431383731323839396633383761333834, 'https://randomuser.me/api/portraits/lego/0.jpg', '2023-04-19 12:15:33', '2023-04-27 17:41:58'),
(15, 'phuong1', 'phuong1@gmail.com', 0x30666530346332663565373762386231653539373765303839333863313136616232396365323637366364313238393939663637316532663862623062373035666465663434623166303962623665303939313434663639626530343266313864663864383136323362656138373935363265623861353433626234393561323466316536353137346663326139666263383535613864656534356265633164, NULL, '2023-04-20 16:32:29', '2023-04-20 16:32:29'),
(16, 'phuong2', 'phuong2@gmail.com', 0x31633438333063393761393536663762633564326464333139383235653830376234383338386562393136313432346663623239386436323962623139633863353164646364366261383865393138356339346437663437373433666461323762386536333939656438383465656563333863623938666533383863376538323139366335616434346464663930303965656565313761306430633839646531, NULL, '2023-04-20 16:48:42', '2023-04-20 16:48:42'),
(17, 'member01', 'member01@gmail.com', 0x31313130366462316466666637376637633336646139323237653439323938373137396630626434383432393163626539626335323834366265653330386639303839386635323437623461623862373061666336653937613334393762343935363535616133333161613430383638356232643263653331393366316162336339356438643436336163333735343233383737663233376235633438343930, NULL, '2023-04-26 11:39:22', '2023-04-26 11:39:22'),
(18, 'member02', 'member02@gmail.com', 0x34376132326263373966323165363032626331393262356537303062633034643034663339393836666561303139643066393038633762343037346334653339616433306162326164333532646461613735663162336332633634623566656661646461623532333631323136663332326363633061356636613238613938626363383064383361393631323663666639656331363662643031643631323234, NULL, '2023-04-26 11:43:59', '2023-04-26 11:43:59'),
(19, 'member03', 'member03@gmail.com', 0x63636362383930356333646233616235363763323731333935333366636331396565353564653336343332393262356334366631313562646663333166383464306532626135306266663934333561373761346263613230626635643339333237623062306437396438383362303331393763666363323238373239346266346534356162626134373865663730326631643831363133666235616232363735, NULL, '2023-04-26 11:44:13', '2023-04-26 11:44:13'),
(20, 'member04', 'member04@gmail.com', 0x34653838653262626534613433323736646530323631323836396465313363333361376430303235383138383930643762393734663866663035383736313133326134633035623433376537316166316264653064663365653732643863313761323662383538373731646361636463326262666263353065653035373764353061383238326437386361343034356636653132636463653230366562373235, NULL, '2023-04-26 11:44:24', '2023-04-26 11:44:24'),
(21, 'member05', 'member05@gmail.com', 0x61373337343362306465656264333462323139653933303333363665613966653131636535666132363736626635613131636231316439363334333639653838643131653433343035303966366634366164646161316264326663346434393436313639333339653430323231356336643764313361353136316134346536653438396531316564643439393662373235663865623335646631343062643635, NULL, '2023-04-26 11:44:30', '2023-04-26 11:44:30'),
(22, 'member06', 'member06@gmail.com', 0x66636565373336366130303731343934636331643339663565653235303932336438646331363738386565646532363031643336623838663732333536393966303931333530373633646464336439616165626465613935343534633038613463653966306661653937363865363161303830323836653866623365643432306561353539653538343033333464383133393832356433323162653533613765, NULL, '2023-04-26 11:44:36', '2023-04-26 11:44:36'),
(23, 'member07', 'member07@gmail.com', 0x63363034646163373965613633326337643533393036633166613238376264353065393033396266356234616232323463366466306430363239636239383731643033366539646662623034633034373335363866336465616462353430366336656336386535613836323031613932643236396466613038383464323232313861613937656631313631326237336537356534663561363030353339633836, NULL, '2023-04-26 11:44:42', '2023-04-26 11:44:42'),
(24, 'member08', 'member08@gmail.com', 0x31396435373366353162656133396238646131333766343533633938623161386264313137396537313439653736656331653131653665356461666664656237633764383531333762636666616639623632376662613332336432353731633035626231653661373137346430306663663863346466333766333766656339636630613733373638643338663037333766666639306166616633363639393432, NULL, '2023-04-26 11:44:50', '2023-04-26 11:44:50'),
(25, 'member09', 'member09@gmail.com', 0x30306237663839363138616334643338303535356639323363313761336637356561393666336639366161333835356563626235386131396362383761356261653262383234383333323366346630366162656430393865663639336663623562373636333232623231336164646165346364343830663165373865343962336133633236313834366662333138636435313566356664643561326536343432, NULL, '2023-04-26 11:44:56', '2023-04-26 11:44:56'),
(26, 'member10', 'member10@gmail.com', 0x65303666396464323261393933356563623634363635663066323337626439333332623239643161643530616135313533323831373132633061613336323430366165336562333033373961376635383037316635636662643066316533623837386264626435373335336438353735653932626636373866383465393634353537313965653463346436313434323934376239613464326532363763373265, NULL, '2023-04-26 11:45:05', '2023-04-26 11:45:05'),
(27, 'GreenBubbleTea02', 'phuong123@gmail.com', 0x38656666346133646230353232323264356132376535303233376633333833353037626530396566646537613264393365353830353962393037363736623766633237376435343234666533366533663430393766363233306131363365316161333062393736656333306133613430393563396166396431333261616432353830356130616138343935633633626363393462343837336330396132346631, NULL, '2023-04-30 13:02:26', '2023-04-30 13:02:26'),
(28, 'GreenBubbleTea03', 'phuong1234123@gmail.com', 0x34663831383665346365623630663266636533626563333665346362383439303432616231346135643164383466666634643030653839353237323536333837666132346464333838656631396338333939386133323939336664383139313731646536343235393765616364316432343736333932336138663332356161643937626636623534393539623865643165313461633038383364306234333133, NULL, '2023-05-02 10:00:47', '2023-05-02 10:00:47'),
(29, 'GreenBubbleTea05', 'ph@gmail.com', 0x30636363306330363565616165633461656361366337313231323338376435333333326237313034323864623630353063663866373938363065666466313636646364306431663935313430626439653265653932326161313561353261393231656434383738663732333364626561363535363737353838336530393665366335336166663932323330663833303331613738363766363831393765303561, NULL, '2023-05-02 10:22:33', '2023-05-02 10:22:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for table `album_album_collection`
--
ALTER TABLE `album_album_collection`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `album_id` (`album_id`,`album_collection_id`),
  ADD KEY `vinyl_id` (`album_id`),
  ADD KEY `vinyl_collection_id` (`album_collection_id`);

--
-- Indexes for table `album_artist`
--
ALTER TABLE `album_artist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `album_id` (`album_id`,`artist_id`),
  ADD KEY `album_album_id` (`album_id`),
  ADD KEY `artist_artist_id` (`artist_id`);

--
-- Indexes for table `album_collection`
--
ALTER TABLE `album_collection`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `album_genre`
--
ALTER TABLE `album_genre`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `album_id` (`album_id`,`genre_id`),
  ADD UNIQUE KEY `album_id_2` (`album_id`,`genre_id`),
  ADD KEY `album_genre_ibfk_1` (`genre_id`),
  ADD KEY `album_genre_ibfk_2` (`album_id`);

--
-- Indexes for table `album_record_company`
--
ALTER TABLE `album_record_company`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `album_id` (`album_id`,`record_company_id`),
  ADD KEY `record_company_record_company_id` (`record_company_id`),
  ADD KEY `album_album_id_2` (`album_id`);

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collection_like`
--
ALTER TABLE `collection_like`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_2` (`user_id`,`collection_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `collection_id` (`collection_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `comment_album`
--
ALTER TABLE `comment_album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `vinyl_id` (`album_id`);

--
-- Indexes for table `comment_collection`
--
ALTER TABLE `comment_collection`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `comment_id_2` (`comment_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `collection_id` (`collection_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating_album`
--
ALTER TABLE `rating_album`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `album_id` (`album_id`,`user_id`),
  ADD KEY `vinyl_id` (`album_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `record_company`
--
ALTER TABLE `record_company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vinyl_id` (`album_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `album_album_collection`
--
ALTER TABLE `album_album_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;

--
-- AUTO_INCREMENT for table `album_artist`
--
ALTER TABLE `album_artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `album_collection`
--
ALTER TABLE `album_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `album_genre`
--
ALTER TABLE `album_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `album_record_company`
--
ALTER TABLE `album_record_company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `collection_like`
--
ALTER TABLE `collection_like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `comment_album`
--
ALTER TABLE `comment_album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `comment_collection`
--
ALTER TABLE `comment_collection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `rating_album`
--
ALTER TABLE `rating_album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `record_company`
--
ALTER TABLE `record_company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `track`
--
ALTER TABLE `track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=710;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);

--
-- Constraints for table `album_album_collection`
--
ALTER TABLE `album_album_collection`
  ADD CONSTRAINT `album_album_collection_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  ADD CONSTRAINT `album_album_collection_ibfk_2` FOREIGN KEY (`album_collection_id`) REFERENCES `album_collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `album_artist`
--
ALTER TABLE `album_artist`
  ADD CONSTRAINT `album_album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  ADD CONSTRAINT `artist_artist_id` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`);

--
-- Constraints for table `album_collection`
--
ALTER TABLE `album_collection`
  ADD CONSTRAINT `album_collection_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `user` (`id`);

--
-- Constraints for table `album_genre`
--
ALTER TABLE `album_genre`
  ADD CONSTRAINT `album_genre_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `album_genre_ibfk_2` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`);

--
-- Constraints for table `album_record_company`
--
ALTER TABLE `album_record_company`
  ADD CONSTRAINT `album_album_id_2` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  ADD CONSTRAINT `record_company_record_company_id` FOREIGN KEY (`record_company_id`) REFERENCES `record_company` (`id`);

--
-- Constraints for table `collection_like`
--
ALTER TABLE `collection_like`
  ADD CONSTRAINT `collection_like_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `collection_like_ibfk_2` FOREIGN KEY (`collection_id`) REFERENCES `album_collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `comment_album`
--
ALTER TABLE `comment_album`
  ADD CONSTRAINT `comment_album_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  ADD CONSTRAINT `comment_album_ibfk_2` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`);

--
-- Constraints for table `comment_collection`
--
ALTER TABLE `comment_collection`
  ADD CONSTRAINT `comment_collection_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`),
  ADD CONSTRAINT `comment_collection_ibfk_2` FOREIGN KEY (`collection_id`) REFERENCES `album_collection` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rating_album`
--
ALTER TABLE `rating_album`
  ADD CONSTRAINT `rating_album_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`),
  ADD CONSTRAINT `rating_album_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `track`
--
ALTER TABLE `track`
  ADD CONSTRAINT `track_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
