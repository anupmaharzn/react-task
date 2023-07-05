import validateResource from '../middleware/validateResource'
import { createSessionSchema } from '../schema/session.schema'
import requireUser from '../middleware/requireUser'
import {
    createUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler,
} from '../controller/session.controller'

import { Router } from 'express'

const route = Router()

route.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
)
route.get('/api/sessions', requireUser, getUserSessionsHandler)
route.delete('/api/sessions', requireUser, deleteSessionHandler)

export default route
