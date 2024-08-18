import { createLogger, format, transports } from "winston";
import { logging } from "./config.js"; // Pastikan path import sesuai dengan lokasi file config.js

const { combine, timestamp, printf, colorize } = format;

// Format custom log
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

// transports configuration
const transportList = [
    new transports.Console() // Log show in console
];

// Log will save if logging is true (check in config)
if (logging.logToFile) {
    transportList.push(new transports.File({ filename: logging.logPath }));
}

// Logger configuration
const logger = createLogger({
    level: "info", // Level log default
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        colorize(), // Color level log
        logFormat
    ),
    transports: transportList
});

export default logger;
