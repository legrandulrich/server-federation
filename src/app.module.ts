import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'boomgtech_api', url: 'http://localhost:3000/graphql' },
          { name: 'boomgtech_s_school', url: 'http://localhost:3001/graphql' },
          { name: 'boomgtech_auth', url: 'http://localhost:3002/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
