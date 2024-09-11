import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
export const graphqlToPrisma = (fieldNodes, type = 'select') => {
    let fields = {
        [type]: {}
    };
    fieldNodes.forEach((node) => {
        if (node.selectionSet) {
            node.selectionSet.selections.forEach((selection) => {
                if (selection.kind === 'Field') {
                    fields[type][selection.name.value] = graphqlToPrisma([selection], type);
                }
            });
        }
    });
    if (!Object.keys(fields.select).length)
        return true;
    return fields;
};
export const directiveTransformer = (schema, directiveName, fieldMutator) => {
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            const directive = getDirective(schema, fieldConfig, directiveName)?.[0];
            if (directive) {
                fieldConfig.resolve = async function (source, args, context, info) {
                    return await fieldMutator(source, args, context, info, fieldConfig);
                };
                return fieldConfig;
            }
        },
    });
};
