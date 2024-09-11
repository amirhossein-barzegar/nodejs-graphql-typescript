import {defaultFieldResolver, GraphQLFieldResolver} from "graphql/index.js";
import {getDirective, MapperKind, mapSchema} from "@graphql-tools/utils";

export const graphqlToPrisma = (fieldNodes: any, type: string = 'select') => {
    let fields: any = {
        [type]: {}
    };
    fieldNodes.forEach((node: any) => {
      if (node.selectionSet) {
        node.selectionSet.selections.forEach((selection: any) => {
          if (selection.kind === 'Field') {
            fields[type][selection.name.value] = graphqlToPrisma([selection], type);
          }
        });
      }
    });
    if (!Object.keys(fields.select).length) return true
    return fields;
}

export const directiveTransformer = (schema: any, directiveName: any, fieldMutator: (source: any, args: any, context: any, info: any, resolve: any) => Promise<any>) => {
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig: any) => {
            const directive = getDirective(schema, fieldConfig, directiveName)?.[0];
            const { resolve = defaultFieldResolver } = fieldConfig;

            if (directive) {
                fieldConfig.resolve = async function (source: any, args: any, context: any, info: any) {
                    return fieldMutator(source, args, context, info, resolve)
                };
                return fieldConfig;
            }
        },
    });
}