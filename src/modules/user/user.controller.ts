import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('sanity-check')
  sanityCheck() {
    return this.userService.sanityCheck();
  }

  @Get('/tutors')
  getAllTutors() {
    return this.userService.getAll();
  }
}
