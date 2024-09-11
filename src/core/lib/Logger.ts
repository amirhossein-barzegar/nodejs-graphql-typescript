import fs from 'fs';
import path from 'path';

// Define a type for different log levels
type LogLevel = 'info' | 'warn' | 'error';

class Logger {
  private logFilePath: string;

  constructor(logFilePath: string = `logs/app-${(new Date().toLocaleDateString('en-Us')).replaceAll('/','-')}.log`) {
    this.logFilePath = logFilePath;

    // Ensure the logs directory exists
    const logDir = path.dirname(this.logFilePath);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  /**
   * Generic method to log messages with a specific level
   * @param {LogLevel} level - The level of the log (info, warn, error)
   * @param {string} message - The message to log
   */
  private log(level: LogLevel, message: string): void {
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Tehran',      // Tehran time zone
      hour12: false,                // Use 24-hour format
      year: 'numeric',
      month: 'long',                // Full month name
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    
    const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}\n`;

    // Print to the console
    console.log(logMessage.trim());

    // Append to log file
    fs.appendFileSync(this.logFilePath, logMessage, 'utf8');
  }

  /**
   * Info level logging
   * @param {string} message - The message to log as info
   */
  info(message: string): void {
    this.log('info', message);
  }

  /**
   * Warn level logging
   * @param {string} message - The message to log as a warning
   */
  warn(message: string): void {
    this.log('warn', message);
  }

  /**
   * Error level logging
   * @param {string} message - The message to log as an error
   */
  error(message: string): void {
    this.log('error', message);
  }

  /**
   * Custom method to clear the log file if needed
   */
  clearLogs(): void {
    fs.writeFileSync(this.logFilePath, '', 'utf8');
  }
}

export default Logger;
