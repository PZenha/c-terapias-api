import { gql } from 'apollo-server-express'

const auth = gql`


    input updateSecretInput {
        password: String
        recoveryToken: String
    }

    input verifyCodeInput {
        code: String
        username: String
    }

    input signInInput {
        username: String
        password: String
    }

    type authTokens {
        accessToken: String
        refreshToken: String
    }

    extend type Mutation{
        sendCode(username: String): Boolean
        verifyCode(input: verifyCodeInput): String
        updateSecret(input: updateSecretInput): Boolean
        signIn(input: signInInput): authTokens
        refreshTokens(refreshToken: String): authTokens 
    }
`

export default auth
