import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ecgrealtime3Service } from './ecgrealtime3.service';
import { Ecgrealtime3Controller } from './ecgrealtime3.controller';
import { Ecgrealtime3 } from './ecgrealtime3.entity';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ecgrealtime3, User])],
  providers: [Ecgrealtime3Service, UserService],
  controllers: [Ecgrealtime3Controller],
})

export class Ecgrealtime3Module {}