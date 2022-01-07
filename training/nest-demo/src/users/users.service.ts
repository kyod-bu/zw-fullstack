import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export type User = {
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  // private readonly users: User[];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    // this.users = [];
  }

  async checkUser(username: string) {
    const user = await this.userRepository.find({
      where: { username: username },
    });
    return user;
  }

  async findUser(username: string, password: string): Promise<boolean> {
    const res = await this.userRepository.find({
      where: {
        username: username,
        password: password,
      },
    });
    if (res.length > 0) {
      return true;
    }
    return false;
  }
}
