import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  public constructor(private readonly usersService: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Request', req.cookies);
    const result = await this.usersService.checkUser(req.cookies.admin);
    if (result.length > 0) {
      next();
    } else {
      throw new HttpException('你没有登录', HttpStatus.FORBIDDEN);
    }
  }
}
