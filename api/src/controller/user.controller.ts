import { Request, Response } from 'express'
import logger from '../utils/logger'
import { createUser } from '../service/user.service'
import { CreateUserInput } from '../schema/user.schema'

//register
export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response
) {
    try {
        const user = await createUser(req.body)
        return res.send({
            message: 'Registration Completed',
            error: false,
            status: 201,
            data: user,
        })
    } catch (error: any) {
        logger.error(error)
        return res.status(409).send({
            message: 'Already Exists',
            error: true,
            status: 409,
            data: null,
        }) //conflict
    }
}

export async function getCurrentUser(req: Request, res: Response) {
    return res.send(res.locals.user)
}
