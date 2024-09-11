import JWT from "jsonwebtoken";
import { prisma } from "@/db/prisma/prisma";
export default (req) => {
    if (req.headers['x-token'] && JWT.verify(req.headers['x-token'], process.env.JWT_SECRET_KEY)) {
        var payload = JWT.decode(req.headers['x-token']);
        return {
            user_id: payload.u_id,
            prisma
        };
    }
    else
        return {
            prisma
        };
};
