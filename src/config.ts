import mongoUriBuilder from 'mongo-uri-builder'

require('dotenv').config()

const { env } = process

export const NODE_ENV = env.NODE_ENV || 'development'
export const ENV_DEVELOPMENT = NODE_ENV === 'development'
export const ENV_PRODOCTION = NODE_ENV === 'production'

// DATABASE
export const MONGODB_DATABASE = env.MONGODB_DATABASE || 'c-terapias'
export const MONGODB_HOST = env.MONGODB_HOST || 'localhost'
export const MONGODB_PORT = env.MONGODB_PORT || '27017'
export const MONGODB_USERNAME = env.MONGODB_USERNAME || ''
export const MONGODB_PASSWORD = env.MONGODB_PASSWORD || ''
export const MONGODB_URI = env.MONGODB_URI || mongoUriBuilder({
    username: MONGODB_USERNAME,
    password: MONGODB_PASSWORD,
    host: MONGODB_HOST,
    port: Number(MONGODB_PORT),
    database: MONGODB_DATABASE,
  })

// TOTP
export const TOTP_SECRET = env.TOTP_SECRET || 'Change me'

// JSON WEB TOKEN
export const JWT_SECRET = env.JWT_SECRET || 'Top secret'
export const JWT_ACCESS_EXP = env.JWT_ACCESS_EXP || '7d'
export const JWT_REFRESH_EXP = env.JWT_REFREAH_EXP || '30d'
export const JWT_RECOVERY_EXP = env.JWT_RECOVERY_EXP || '15min'

// Email
export const EMAIL_FROM = env.EMAIL_FROM || ''
export const EMAIL_AUTH_USER = env.EMAIL_AUTH_USER || ''
export const EMAIL_AUTH_PASSWORD = env.EMAIL_AUTH_PASSWORD || ''

export default ''
