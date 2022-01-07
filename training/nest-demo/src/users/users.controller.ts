import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('api/users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() user: User, @Response({ passthrough: true}) res): Promise<boolean> {
    const result = await this.usersService.findUser(user.username, user.password);
    if (result) {
      console.log(`用户名：${user.username}，密码：${user.password}`);
      res.cookie('admin', user.username, {
        maxAge: 1000 * 60 * 24,
        httpOnly: true,
      });
      return true;
    }
    return false;
  }

  @Get('check')
  checkState() {
    console.log('check...');
  }
}
