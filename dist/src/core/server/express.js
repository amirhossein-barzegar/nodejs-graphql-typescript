import createContext from '@/core/server/context';
import express from 'express';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
export const createExpressApp = (apolloServer) => {
    const app = express();
    app.use(cors());
    app.use('/graphql', express.json(), expressMiddleware(apolloServer, {
        context: createContext
    }));
    return app;
};
