import nodemailer from 'nodemailer'
import { EMAIL_AUTH_PASSWORD, EMAIL_AUTH_USER, EMAIL_FROM } from '../config'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_AUTH_USER,
    pass: EMAIL_AUTH_PASSWORD,
  },
})

const sendMail = (to: string, template: string, subject: string) => {
  const options = {
    from: EMAIL_FROM,
    to,
    subject,
    html: template,
  }

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info.response)
    }
  })
}

export default sendMail
