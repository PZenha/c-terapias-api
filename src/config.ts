require('dotenv').config()

const { env } = process

export const MONGODB_URI = env.MONGODB_URI || '127.0.0.1:27017'

export const TOTP_SECRET = env.TOTP_SECRET || 'Change me'

export const JWT_SECRET = env.JWT_SECRET || 'Top secret'
export const JWT_ACCESS_EXP = env.JWT_ACCESS_EXP || '7d'
export const JWT_REFRESH_EXP = env.JWT_REFREAH_EXP || '30d'
export const JWT_RECOVERY_EXP = env.JWT_RECOVERY_EXP || '15min'

export default ''
