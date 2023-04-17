import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface UserPayload {
  name: string;
  email: string;
}
@Controller()
export class AppController {
  
}
