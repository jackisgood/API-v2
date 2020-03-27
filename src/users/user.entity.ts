import { Entity, Column, PrimaryGeneratedColumn, ObjectID,ObjectIdColumn, OneToMany } from 'typeorm';
import { Ecgdata12 } from '../ecgdata12/ecgdata12.entity';

@Entity('user')
export class User {
  //@PrimaryGeneratedColumn()
  @ObjectIdColumn()
  _id: ObjectID;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'int' })
    Status: number;

    @Column({ type: 'double' })
    Status_time: number;

    @Column({ type:'double' })
    lasttime_3lead:number;

    @Column({ type:'double' })
    lasttime_12lead:number;

    @Column({ type:'double' })
    lasttime_Ts:number;
}