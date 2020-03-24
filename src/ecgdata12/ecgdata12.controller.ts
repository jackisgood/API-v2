import { Controller, Post, Get, Delete, Param, Query, Body, HttpException,Response, HttpStatus, Res } from '@nestjs/common';
import { Ecgdata12Service } from './ecgdata12.service';
import { UserService } from '../users/user.service';
import { Ecgdata12Params } from './view-models/ecgdata12-params.model';
import { ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Ecgdata12 } from './ecgdata12.entity';

@Controller()
@ApiTags(Ecgdata12.name)
export class Ecgdata12Controller {
    constructor(
        private readonly ecgdata12Service: Ecgdata12Service,
        private readonly userService: UserService,
        ) {}

    @Post('users/:id/ecgdata12')
    @ApiBody({ description: 'Array', type: Ecgdata12Params, isArray: true })
    async createEcgdata12(@Param('userId') userId: string, @Body() params: Ecgdata12Params[], @Res() res) {
        // move to enum
        const keys = ['I', 'II', 'III', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'aVR', 'aVL', 'aVF'];

        const body = [];
        params.forEach(obj => {
            const rst = { user: userId, time: obj.time };
            keys.forEach((key, index) => {
                rst[key] = obj.ecg[index];
            });
            body.push(rst);
        });

        this.ecgdata12Service.createEcgdata12(body);
        //this.userService.updateLasttime({ userId, time: params[params.length - 1].time });

        return res.status(HttpStatus.OK).json({ statusCode: 200, message: 'success create'});

    }

    @Get('users/:userId/ecgdata12')
    @ApiQuery({ name: 'to', required: false })
    @ApiQuery({ name: 'limit', required: false })
    async findUserEcgdata(
        @Param('userId') userId: string,
        @Query('from') from: string,
        @Query('to') to?: string,
        @Query('limit') limit?: number,
    ){
		var id=parseInt(userId);
        if (!from) throw new HttpException('from is required', HttpStatus.BAD_REQUEST);
		
        return this.ecgdata12Service.findEcgdata12ByUser({ id, from, to, limit });
    }

    @Get('users/:userId/ecgdata12/all')
    async findUserEcgdata12_all(
        @Param('userId') userId: string,
    ){
        return this.ecgdata12Service.findEcgdata12ByUser({ userId });
    }

    @Delete('users/:id/ecgdata12')
    async deleteUserEcgdata12(
        @Param('userId') userId: string,
    ){
        return this.ecgdata12Service.deleteEcgdata12ByUser({ userId });
    }

}
