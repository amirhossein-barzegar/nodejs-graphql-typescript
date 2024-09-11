import http from 'http'
import { useServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws'
import { schema } from '@/core/server/apollo'
export const setupWebSocketServer = (httpServer: http.Server) => {
    const wsServer = new WebSocketServer({
        server: httpServer,
        path: '/graphql'
    });
    
    return useServer({schema}, wsServer);
}