const config = {
    overwrite: true,
    schema: "http://localhost:4000/graphql",
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes"]
        },
        "./graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};
export default config;
