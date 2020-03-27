import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ecgdata12Service } from './ecgdata12.service';
import { Ecgdata12Controller } from './ecgdata12.controller';
import { Ecgdata12 } from './ecgdata12.entity';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';
import { Ecgrealtime3Service } from '../ecgrealtime3/ecgrealtime3.service';
import { Ecgrealtime3 } from '../ecgrealtime3/ecgrealtime3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ecgdata12, User, Ecgrealtime3])],
  providers: [Ecgdata12Service, UserService, Ecgrealtime3Service],
  controllers: [Ecgdata12Controller],
})

export class Ecgdata12Module {}