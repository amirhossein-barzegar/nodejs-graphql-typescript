var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { config } from 'dotenv';
import { PubSub } from 'graphql-subscriptions';
const env = config().parsed;
const pubSub = new PubSub();
const resolvers = {
    Query: {
        hello: () => {
            return 'hello there';
        },
        user: (_, __, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            // const requestedFields = graphqlFields(info.fieldNodes);
            const prismaSelect = extractFields(info.fieldNodes);
            console.log(prismaSelect);
            return yield ctx.prisma.users.findUnique({
                where: {
                    u_id: 1
                },
                select: {
                    u_id: true
                }
            });
        })
    }
};
function extractFields(fieldNodes) {
    const fields = {};
    // fieldNodes.forEach((node: any) => {
    //   if (node.selectionSet) {
    //     node.selectionSet.selections.forEach((selection:{a}) => {
    //       if (selection.kind === 'Field') {
    //         fields[selection.name.value] = extractFields([selection]);
    //       }
    //     });
    //   }
    // });
    if (!Object.keys(fields).length)
        return true;
    return fields;
}
export default resolvers;
