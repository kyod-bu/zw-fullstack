import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';
import { User } from './users/entities/user.entity';
import { LoggerMiddleware, logger } from './common/middleware/logger.middleware';
// import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { RolesGuard } from './common/guard/roles.guard';

@Module({
  imports: [CatsModule, DatabaseModule.forRoot([User])],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [DatabaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      .forRoutes(CatsController);

    // consumer.apply(logger).forRoutes(CatsController);
  }
}
