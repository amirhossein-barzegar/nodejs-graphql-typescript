import contextMiddleware from '@/graphql/middleware/context';
export default ({ req }) => {
    return contextMiddleware(req);
};
