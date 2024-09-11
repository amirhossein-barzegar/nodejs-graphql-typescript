import JWT from "jsonwebtoken"
import {Request} from 'express';
import contextMiddleware from '@/graphql/middleware/context'

export default ({ req }: { req: Request }): any => {
    return contextMiddleware(req)
}