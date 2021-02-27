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

    type signInResponse {
        accessToken: String
        refreshToken: String
    }

    extend type Mutation{
        sendCode(username: String): Boolean
        verifyCode(input: verifyCodeInput): String
        updateSecret(input: updateSecretInput): Boolean
        signIn(input: signInInput): signInResponse
    }
`

export default auth
