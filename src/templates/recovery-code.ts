import mainLayout from './main-layout'

const recoveryCodeTemplate = (code: string, subject: string) => {
  const html = `
    <div class="card" style="max-width: 460px; padding: 20px">
        <div style="text-align: center;"> 
            <p style="margin-bottom: 32px;">
                Digite o seguinte código para recuperar a password
            </p>
            <p style="font-weight: 600; letter-spacing: 24px; padding-left: 12px; max-width: 400px; ">
                ${code || ''}
            </p>
        </div>
    </div>
`
  return mainLayout(subject, html)
}

export default recoveryCodeTemplate
