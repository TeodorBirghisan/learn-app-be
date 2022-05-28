import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto, toUserDto } from '../user/user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result = await this.authService.register(createUserDto);
    return result;
  }

  @Post('login')
  public async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
    return await this.authService.login(loginUserDto);
  }

  @UseGuards(AuthGuard())
  @Get('/profile')
  getProfile(@Request() req: any) {
    return toUserDto(req.user);
  }
}
