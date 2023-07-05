import { Request, Response, NextFunction } from 'express'
import { get } from 'lodash'
import { verifyJwt } from '../utils/jwt.utils'
import { reIssueAccessToken } from '../service/session.service'
const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const accessToken =
        get(req, 'cookies.accessToken') ||
        get(req, 'headers.authorization', '').replace(/^Bearer\s/, '')
    const refreshToken =
        get(req, 'cookies.refreshToken') || get(req, 'headers.x-refresh')

    // if (!accessToken) {
    //   return next();
    // }
    // the way we are doing this kina vani bearer token bata navai we are doing with cookies
    // ani after accesss token expire tyo cookie bata remove hunxa automatically (browser mechanisme ho) tei vara only refresh token check
    // garni logic rakhyek ho then generate access token
    // we can also implement refresh token logic with bearer ra axios interceptor if we want
    if (accessToken && refreshToken) {
        const { decoded, expired } = verifyJwt(accessToken)

        if (decoded) {
            res.locals.user = decoded
            return next()
        }
    }
    if (!accessToken && refreshToken) {
        const newAccessToken: any = await reIssueAccessToken({ refreshToken })

        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken)

            res.cookie('accessToken', newAccessToken, {
                maxAge: 8.64e7,
                httpOnly: true,
                domain: 'localhost',
                path: '/',
                sameSite: 'strict',
                secure: false,
            })
        }
        const result = verifyJwt(newAccessToken)

        res.locals.user = result.decoded
        return next()
    }
    if (!accessToken && !refreshToken) {
        return next()
    }
    return next()
}

export default deserializeUser
