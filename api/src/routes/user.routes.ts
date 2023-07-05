import {
    createUserHandler,
    getCurrentUser,
} from '../controller/user.controller'
import validateResource from '../middleware/validateResource'
import requireUser from '../middleware/requireUser'
import { createUserSchema } from '../schema/user.schema'
import { Router } from 'express'

const route = Router()

route.post('/api/users', validateResource(createUserSchema), createUserHandler)
route.get('/api/me', requireUser, getCurrentUser)

export default route
