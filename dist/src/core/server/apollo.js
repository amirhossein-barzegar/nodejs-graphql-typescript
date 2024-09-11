import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from '@/graphql/resolvers';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import DBError from '@/core/errors/DBError';
import Logger from '@/core/lib/Logger';
import { directiveTransformer } from "@/utils/graphqlHelper";
const typeDefs = readFileSync('./src/graphql/schema/schema.graphql', { encoding: 'utf-8' });
export const schema = (() => {
    let schema = makeExecutableSchema({ typeDefs, resolvers });
    schema = directiveTransformer(schema, 'isAuth', async (source, args, context, info, config) => {
    });
    return schema;
})();
export const createApolloServer = (httpServer, wsServerCleanup) => {
    const logger = new Logger();
    return new ApolloServer({
        schema,
        formatError: (_, err) => {
            logger.info(err.message);
            if (err.originalError instanceof DBError) {
                return {
                    message: err.message,
                    statusCode: err.originalError.statusCode,
                };
            }
            // Default fallback error
            return {
                message: 'Unknown Error',
                statusCode: 500,
            };
        },
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            // custom plugin to properly shutdown the websocket server, to avoid any memory leaks!
            {
                async serverWillStart() {
                    return {
                        async drainServer() {
                            await wsServerCleanup.dispose();
                        }
                    };
                }
            }
        ],
    });
};
