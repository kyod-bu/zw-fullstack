import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { FormAdminController } from './form-admin/form-admin.controller';
import { FormAdminModule } from './form-admin/form-admin.module';
import { FormAdminService } from './form-admin/form-admin.service';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    FormAdminModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'yafbu',
        database: 'kyod',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
