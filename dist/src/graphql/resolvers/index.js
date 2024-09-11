import { config } from 'dotenv';
import { PubSub } from 'graphql-subscriptions';
import { graphqlToPrisma } from '@/utils/graphqlHelper';
import DBError from '@/core/errors/DBError';
const env = config().parsed;
const pubSub = new PubSub();
const resolvers = {
    Query: {
        hello: () => {
            return 'hello there';
        },
        user: async (_, __, ctx, { fieldNodes }) => {
            const prismaSelect = graphqlToPrisma(fieldNodes);
            return await ctx.prisma.users.findUnique({
                where: {
                    u_id: 1
                },
                ...prismaSelect
            });
        }
    },
    Mutation: {
        addUser: async (_, { userInput }, ctx, { fieldNodes }) => {
            try {
                const newUser = await ctx.prisma.users.create({
                    data: userInput,
                });
                return newUser;
            }
            catch (err) {
                throw new DBError(err.message, 2);
            }
        }
    }
};
export default resolvers;
