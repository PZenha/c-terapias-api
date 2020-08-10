require('dotenv').config();

const { env } = process;

export const MONGODB_URI = env.MONGODB_URI || '127.0.0.1:27017';
