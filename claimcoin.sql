-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 10, 2024 lúc 07:11 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `claimcoin`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cookies`
--

CREATE TABLE `cookies` (
  `type_user` text DEFAULT NULL,
  `cookie` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cookies`
--

INSERT INTO `cookies` (`type_user`, `cookie`) VALUES
('admin', 'mWByXBaqUqQsmvHbMqqi');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `listtokensolvecaptcha`
--

CREATE TABLE `listtokensolvecaptcha` (
  `id` int(11) NOT NULL,
  `token` text DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `dateAdd` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `listtokensolvecaptcha`
--

INSERT INTO `listtokensolvecaptcha` (`id`, `token`, `status`, `dateAdd`) VALUES
(5, 'test token', 1, '2024-04-10 16:53:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `servers`
--

CREATE TABLE `servers` (
  `id` text DEFAULT NULL,
  `serverIP` text DEFAULT NULL,
  `info` text DEFAULT NULL,
  `serverOS` text DEFAULT NULL,
  `currentWork` text DEFAULT NULL,
  `lastModifyDate` text DEFAULT NULL,
  `isRunning` tinyint(1) DEFAULT NULL,
  `logs` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `servers`
--

INSERT INTO `servers` (`id`, `serverIP`, `info`, `serverOS`, `currentWork`, `lastModifyDate`, `isRunning`, `logs`) VALUES
('MTE1LjcyLjQwLjMx', '115.72.40.31', 'eyJjcHUiOiAxNS44LCAicmFtIjogNjkuMSwgImRpc2siOiA1NS4wLCAidXNlciI6ICJBZG1pbiIsICJ0aW1lIjogIjIxOjEzOjI0IiwgIm9zX25hbWUiOiAiV2luZG93cyAxMCIsICJpZCI6ICJNVEUxTGpjeUxqUXdMak14IiwgIklQQWRkcmVzcyI6ICIxMTUuNzIuNDAuMzEifQ==', 'Windows 10', 'doge_nologinfaucet', '2024-04-06 21:13:24', 1, 'U3RhcnQgc2VydmVy'),
('MTE1LjcyLjE2MC4xMzQ=', '115.72.160.134', 'eyJjcHUiOiA1LjMsICJyYW0iOiA2MS42LCAiZGlzayI6IDYzLjYsICJ1c2VyIjogIkFkbWluIiwgInRpbWUiOiAiMDA6MDk6MDMiLCAib3NfbmFtZSI6ICJXaW5kb3dzIDEwIiwgImlkIjogIk1URTFMamN5TGpFMk1DNHhNelE9IiwgIklQQWRkcmVzcyI6ICIxMTUuNzIuMTYwLjEzNCJ9', 'Windows 10', 'none', '2024-04-11 00:09:03', 1, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `value` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`) VALUES
(1, 'delay_cron', '5'),
(34, 'delay_cron_server', '5000'),
(42, 'delay_real_time_info', '1000'),
(44, 'list_coin_can_claim', 'doge_nologinfaucet'),
(45, 'delay_fork_task', '5'),
(47, 'delay_update_subaction', '5000'),
(64, 'progress_tool', 'expected,doing,complete,maintenance,error');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `site_claim`
--

CREATE TABLE `site_claim` (
  `id` int(11) NOT NULL,
  `id_tool` text DEFAULT NULL,
  `site_name` text DEFAULT NULL,
  `site_address` text DEFAULT NULL,
  `coin_claim` text DEFAULT NULL,
  `status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `site_claim`
--

INSERT INTO `site_claim` (`id`, `id_tool`, `site_name`, `site_address`, `coin_claim`, `status`) VALUES
(4, 'L9UYKQZDYR', 'DOGE_nologinfaucet', 'https://nologinfaucet.com/', 'doge', 'doing'),
(5, '6TX0D4PATF', 'BTC_bitsmagic', 'https://bitsmagic.fun/', 'btc', 'doing');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `taskInfo` text DEFAULT NULL,
  `serverId` text DEFAULT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `value` text DEFAULT NULL,
  `type_current` tinyint(1) DEFAULT NULL,
  `dateAdd` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `wallets`
--

INSERT INTO `wallets` (`id`, `name`, `value`, `type_current`, `dateAdd`) VALUES
(1, 'DOGE', '1Dotw12s2ed34wpXyh5gFwE29edbgemPpd', 1, '2024-03-30 10:11:40'),
(2, 'BTC', '1Dotw12s2ed34wpXyh5gFwE29edbgemPpd', 0, '2024-03-30 10:11:40'),
(8, 'DOGE', 'DJKntdmVqxZwJjBhRsZtsfaHmAAFbHAaEd', 0, '2024-03-30 11:15:00');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `listtokensolvecaptcha`
--
ALTER TABLE `listtokensolvecaptcha`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `site_claim`
--
ALTER TABLE `site_claim`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `listtokensolvecaptcha`
--
ALTER TABLE `listtokensolvecaptcha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `site_claim`
--
ALTER TABLE `site_claim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT cho bảng `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
