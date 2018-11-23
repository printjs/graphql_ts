import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppResolvers } from "./app.resolvers";
import { join } from "path";

console.log(join(__dirname, "./graphql/**/*.gql"));

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: [join(__dirname, "./graphql/**/*.gql")],
            playground: true,
        }),
    ],
    providers: [AppResolvers],
})
export class ApplicationModule { }
