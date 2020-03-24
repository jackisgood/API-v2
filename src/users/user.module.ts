import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { Ecgdata12 } from '../ecgdata12/ecgdata12.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Ecgdata12])],
  providers: [UserService],
  controllers: [UserController],
})

export class UserModule {}