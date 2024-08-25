import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController
{
  constructor(private readonly userService: UserService){};

  @Post('create')
  async Create(@Body() createUserDto: CreateUserDto)
  {
    return this.userService.Create(createUserDto);
  }

  @Patch('update')
  async Update(@Body() updateUserDto: UpdateUserDto)
  {
    return this.userService.Update(updateUserDto);
  }

  @Get('list')
  async GetList()
  {
    return this.userService.GetList();
  }
}
