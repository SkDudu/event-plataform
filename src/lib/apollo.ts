import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ng5pmp004c01xygufb3lh1/master",
    cache: new InMemoryCache()
})