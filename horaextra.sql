-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2020 a las 18:24:49
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `horaextra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horas_extras`
--

CREATE TABLE `horas_extras` (
  `ID` int(11) NOT NULL,
  `Documento` int(20) NOT NULL,
  `NOMBRE` varchar(20) NOT NULL,
  `APELLIDO` varchar(20) NOT NULL,
  `FECHA_INICIO` date NOT NULL,
  `FECHA_FIN` date NOT NULL,
  `HORA_INICIO_TR` time NOT NULL,
  `HORA_FIN_TR` time NOT NULL,
  `HORA_INICO_EXTRA` time NOT NULL,
  `HORA_FIN_EXTRA` time NOT NULL,
  `MOTIVO` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `horas_extras`
--

INSERT INTO `horas_extras` (`ID`, `Documento`, `NOMBRE`, `APELLIDO`, `FECHA_INICIO`, `FECHA_FIN`, `HORA_INICIO_TR`, `HORA_FIN_TR`, `HORA_INICO_EXTRA`, `HORA_FIN_EXTRA`, `MOTIVO`) VALUES
(1, 14598985, 'USUARIO', 'PRIMERO', '2020-03-11', '2020-03-11', '11:00:00', '19:00:00', '19:13:00', '23:23:00', 'MANTENIMIENTO DE  EQUIPOS'),
(2, 14598985, 'USUARIO', 'PRIMERO', '2020-03-11', '2020-03-11', '10:00:00', '15:00:00', '15:10:00', '17:30:00', 'apoyo al mantenimiento'),
(3, 58855, 'USUARIO', 'tercero', '2020-03-11', '2020-03-11', '10:00:00', '15:00:00', '15:10:00', '17:30:00', 'apoyo '),
(4, 255522, 'diego', 'camelo', '2020-03-12', '2020-03-12', '05:00:00', '18:00:00', '18:10:00', '22:30:00', 'caida del servidor');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `horas_extras`
--
ALTER TABLE `horas_extras`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `horas_extras`
--
ALTER TABLE `horas_extras`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
