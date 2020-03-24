import { Module } from '@nestjs/common';
import { TypeOrmModule }from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';
import { Ecgdata12Module } from './ecgdata12/ecgdata12.module';
import { Ecgdata12 } from './ecgdata12/ecgdata12.entity';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '192.168.25.22',
      port: 27017,
      database: 'ecg',
      entities: [User,Ecgdata12,Photo],
      synchronize: true,
    }),
        PhotoModule,
        UserModule,
        Ecgdata12Module,
  ],
})
export class AppModule {}
