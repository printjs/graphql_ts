import {
    Resolver,
    Args,
    Query,
} from "@nestjs/graphql";

@Resolver("app")
export class AppResolvers {
    // 
    @Query()
    public app(@Args("id") id: string) {
        return {
            id,
            name: "testapp",
        };
    }
}
