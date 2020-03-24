import { ApiProperty } from '@nestjs/swagger';

export class UserParams {
    @ApiProperty({ example: '1' })
    userId: number;

    @ApiProperty({ default: '0' })
    Status: number;

    @ApiProperty({ default: '0' })
    Status_time: number;

}
