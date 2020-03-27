import { Controller, Post, Get, Delete, Param, Query, Body, HttpException,Response, HttpStatus, Res } from '@nestjs/common';
import { Ecgrealtime3Service } from './ecgrealtime3.service';
import { UserService } from '../users/user.service';
//import { Ecgdata12Params } from './view-models/ecgdata12-params.model';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Ecgrealtime3 } from './ecgrealtime3.entity';
import { threadId } from 'worker_threads';

@Controller()
export class Ecgrealtime3Controller {
    constructor(
        private readonly ecgrealtime3Service: Ecgrealtime3Service,
        private readonly userService: UserService,
        ) {}

    

    
}
