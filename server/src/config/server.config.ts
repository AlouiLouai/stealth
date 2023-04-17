import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

export const serverConfig = registerAs('server', () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3000,
}));
