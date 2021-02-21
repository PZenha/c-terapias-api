import { sign, verify } from 'jsonwebtoken'
import {
  JWT_ACCESS_EXP, JWT_RECOVERY_EXP, JWT_REFRESH_EXP, JWT_SECRET,
} from '../config'

interface JWTPayload {
    type: 'ACCESS' | 'REFRESH' | 'RECOVERY'
    uid: string
}

export const generateRecoveryToken = (uid: string) => {
  const token = sign({
    type: 'RECOVERY',
    uid,
  }, JWT_SECRET, { expiresIn: JWT_RECOVERY_EXP })
  return token
}

export const generateAccessToken = (uid: string) => {
  const token = sign({
    type: 'ACCESS',
    uid,
  }, JWT_SECRET, { expiresIn: JWT_ACCESS_EXP })
  return token
}

export const generateRefreshToken = (uid: string) => {
  const token = sign({
    type: 'REFRESH',
    uid,
  }, JWT_SECRET, { expiresIn: JWT_REFRESH_EXP })
  return token
}

export const generateTokens = (uid: string) => {
  const accessToken = generateAccessToken(uid)
  const refreshToken = generateRefreshToken(uid)
  return { accessToken, refreshToken }
}

export const decodeToken = async (token: string): Promise<JWTPayload> => {
  const decodedToken = await verify(token, JWT_SECRET) as JWTPayload
  return decodedToken
}
