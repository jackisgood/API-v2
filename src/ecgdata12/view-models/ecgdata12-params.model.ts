import { ApiProperty } from '@nestjs/swagger';

export class Ecgdata12Params {
    @ApiProperty({ example: '1544172183123' })
    time: string;

    @ApiProperty({ example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
    ecg: number[];
}
