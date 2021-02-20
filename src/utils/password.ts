/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt'

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(salt, password)
  return hash
}

export const comparePassword = (password: string, hash: string) => {
  const isEqual = bcrypt.compareSync(password, hash)
  return isEqual
}
