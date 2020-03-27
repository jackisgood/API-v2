import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThan, InsertResult } from 'typeorm';
import { Ecgrealtime3 } from './ecgrealtime3.entity';
import { User } from '../users/user.entity';
import { UserService } from 'src/users/user.service';
import { ApiAcceptedResponse } from '@nestjs/swagger';

@Injectable()
export class Ecgrealtime3Service {
  constructor(
    @InjectRepository(Ecgrealtime3)
    private readonly ecgrealtime3Repository: Repository<Ecgrealtime3>,
  ) { }
    
  async createEcgrealtime3(params): Promise<Ecgrealtime3> {
    return await this.ecgrealtime3Repository.save(params);

  }

  

  
}