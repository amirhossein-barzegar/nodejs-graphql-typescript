import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || 'defaultSecretKey',
  port: process.env.PORT || 4000,
  databaseUrl: process.env.DATABASE_URL || 'mysql://user:pass@localhost:3306/mydb',
};