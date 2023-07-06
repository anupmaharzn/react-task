import { CookieOptions, Request, Response } from 'express'
import { validatePassword } from '../service/user.service'
import {
    createSession,
    findSessions,
    updateSession,
} from '../service/session.service'
import { signJwt } from '../utils/jwt.utils'
import config from 'config'

const accessTokenCookieOptions: CookieOptions = {
    maxAge: 8.64e7,
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    sameSite: 'lax',
    secure: false,
}

const refreshTokenCookieOptions: CookieOptions = {
    ...accessTokenCookieOptions,
    maxAge: 4.32e8,
}
const expireCookieOptions: CookieOptions = {
    expires: new Date(Date.now()),
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    sameSite: 'lax',
    secure: false,
}
//login
export async function createUserSessionHandler(req: Request, res: Response) {
    //validate the user's pasword
    const user = await validatePassword(req.body)
    if (!user) {
        return res.status(401).send({
            message: 'Invalid Email or Password',
            error: true,
            status: 401,
            data: user,
        })
    }
    //create a session
    const session = await createSession(user._id, req.get('user-agent') || '')
    //create an access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('accessTokenTtl') }
    )
    //create a refresh token
    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('refreshTokenTtl') }
    )
    //return access & refresh tokens
    res.cookie('accessToken', accessToken, accessTokenCookieOptions)
    res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions)
    return res.send({
        accessToken,
        refreshToken,
        error: false,
        message: 'success',
        data: user,
    })
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = res.locals.user._id

    const sessions = await findSessions({ user: userId, valid: true })

    return res.send(sessions)
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session
    await updateSession({ _id: sessionId }, { valid: false })
    res.cookie('accessToken', null, expireCookieOptions)
    res.cookie('refreshToken', null, expireCookieOptions)
    res.status(200).send({
        success: true,
        message: 'logged out',
        error: false,
    })
}
