import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('msg')
  getHello(): string {
    return this.appService.getHello();
  }
}
