import { TOTP, TOTPOptions } from '@otplib/core'
import { createDigest } from '@otplib/plugin-crypto'

const totp = new TOTP<TOTPOptions>({
  createDigest,
  digits: 5,
  window: [2, 1],
})

export default totp
