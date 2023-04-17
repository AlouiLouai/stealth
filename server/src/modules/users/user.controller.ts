import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    try {
    return this.userService.createUser(user);
    } catch (error) {
      throw new Error(error.message)
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
