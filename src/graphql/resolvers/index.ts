import {PubSub} from 'graphql-subscriptions'

const pubSub = new PubSub();

const resolvers = {
    Query: {
        hello: (): string => {
            return 'hello there'
        }
    }
};

export default resolvers