import { Module } from '@nestjs/common';
import { FormAdminController } from './form-admin.controller';
import { FormAdminService } from './form-admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from '../entities/form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormEntity])],
  providers: [FormAdminService],
  controllers: [FormAdminController],
})
export class FormAdminModule {}
