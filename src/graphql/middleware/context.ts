import JWT from "jsonwebtoken";
import { Request } from 'express';
import {prisma} from "@/db/prisma/prisma";
export default (req: Request) => {
    return {
        prisma
    }
}