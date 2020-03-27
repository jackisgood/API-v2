import { Controller, Get, Post, Param, Query, Body, HttpException, HttpStatus, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../users/user.entity';
import { UserParams } from './view-models/user-params.model';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@Controller()
//@ApiTags(User.name)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    //@ApiQuery({ name: 'userId', required: false })
    findAll(@Query() query): Promise<User[]> {
        //if (userId) {
        //    return this.userService.findByUserid(userId);
       // }
        return this.userService.findAll();
    }

    @Get('users/:userId')
    getUserById(@Param('userId') userId:string) {
		var Id=parseInt(userId);
        return this.userService.getUserById(Id);
    }

    @Post('users')
    createUser(@Body() params: UserParams): Promise<User> {
        return this.userService.createOne(params);
    }

    @Put('users/:patient_code/:status')
    userUpdateStatus(@Param('patient_code') patient_code:string,
                    @Param('status') status:string,
    )  {
        this.userService.updateStatus(patient_code, status);
    }
	
	
}
