import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
