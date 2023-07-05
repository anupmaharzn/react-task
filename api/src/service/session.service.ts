import { FilterQuery, UpdateQuery } from 'mongoose'
import { get } from 'lodash'
import SessionModel, { sessionDocumentType } from '../models/session.model'
import { verifyJwt } from '../utils/jwt.utils'
import { findUser } from './user.service'
import config from 'config'
import { signJwt } from '../utils/jwt.utils'
export async function createSession(userId: string, userAgent: string) {
    const session = await SessionModel.create({ user: userId, userAgent })

    return session.toJSON()
}

export async function findSessions(query: FilterQuery<sessionDocumentType>) {
    return SessionModel.find(query).lean() //.lean() remove unnecessary  response object of monogodb
}

export async function updateSession(
    query: FilterQuery<sessionDocumentType>,
    update: UpdateQuery<sessionDocumentType>
) {
    return SessionModel.updateOne(query, update)
}

export async function reIssueAccessToken({ refreshToken }: any) {
    const { decoded } = verifyJwt(refreshToken)

    if (!decoded || !get(decoded, 'session')) return false

    const session = await SessionModel.findById(get(decoded, 'session'))
    if (!session || !session.valid) return false

    const user = await findUser({ _id: session.user })

    if (!user) return false

    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('accessTokenTtl') }
    )
    return accessToken
}
