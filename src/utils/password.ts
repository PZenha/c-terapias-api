/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt-nodejs'

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export const comparePassword = (password: string, hash: string) => {
  const isEqual = bcrypt.compareSync(password, hash)
  return isEqual
}
