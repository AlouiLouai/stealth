import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async updateUser(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.getUserById(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
