import http from 'http';
import { createExpressApp } from '@/core/server/express';
import { createApolloServer } from '@/core/server/apollo';
import { setupWebSocketServer } from '@/core/server/websocket';
import { config } from '@/config/config';
export const startServer = async () => {
    const httpServer = http.createServer();
    const wsServerCleanup = setupWebSocketServer(httpServer);
    const apolloServer = createApolloServer(httpServer, wsServerCleanup);
    await apolloServer.start();
    const app = createExpressApp(apolloServer);
    httpServer.on('request', app);
    await new Promise((resolve) => httpServer.listen({ port: config.port }, resolve));
    console.log(`🚀 HTTP Server ready at http://localhost:${config.port}/`);
    console.log(`🚀 Graphql Server ready at http://localhost:${config.port}/graphql`);
    console.log(`🚀 Graphql Subscription endpoint ready at ws://localhost:${config.port}/graphql`);
};
