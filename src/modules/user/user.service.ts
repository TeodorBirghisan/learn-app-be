import { CreateUserDto, UserDto } from './user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async sanityCheck(): Promise<string> {
    return 'Hello User';
  }

  async findByPayload({ email }: any): Promise<UserDto> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findOneByEmail(email: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async saveOne(userCreateDto: CreateUserDto): Promise<User> {
    const user: User = await this.findOneByEmail(userCreateDto.email);

    if (user) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }

    const newUser: User = this.usersRepository.create(userCreateDto);

    return await this.usersRepository.save(newUser);
  }
}
