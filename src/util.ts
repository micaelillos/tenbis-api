import * as http from 'http'
import { AxiosHeaders, RawAxiosResponseHeaders } from 'axios'

export const extractTokensFromHeaders = (resonseHeaders: http.IncomingHttpHeaders | RawAxiosResponseHeaders) => {
    const authToken = resonseHeaders['set-cookie'][0].match(/Authorization=(.*); domain/)[1]
    const refreshToken = resonseHeaders['set-cookie'][1].match(/RefreshToken=(.*); domain/)[1]
    return { authToken, refreshToken }
}