import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Ecgrealtime3Service } from '../ecgrealtime3/ecgrealtime3.service';
import { Ecgrealtime3 } from '../ecgrealtime3/ecgrealtime3.entity';
import { User } from './user.entity';
import { Ecgdata12 } from '../ecgdata12/ecgdata12.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Ecgdata12, Ecgrealtime3])],
  providers: [UserService, Ecgrealtime3Service],
  controllers: [UserController],
})

export class UserModule {}