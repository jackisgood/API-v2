import { Entity, Column, PrimaryGeneratedColumn, ObjectID, ManyToOne, JoinColumn, Index , ObjectIdColumn} from 'typeorm';

@Entity('ecg_realtime_data')
export class Ecgrealtime3 {
  //@PrimaryGeneratedColumn()
   @ObjectIdColumn()
  _id: ObjectID;

  //@ManyToOne(type => User, user => user.userId)
  @Column ({ type: 'int' }) Data_Point_Amount:number;
  @Column({ type: 'double' })
  @Index()
  Date: number;
  @Column({ type: 'double' }) Ecg_time:number;
  @Column({ type: 'double' }) Current_time:number;
  

  @Column({ type: 'string' }) Diff_1: string;
  @Column({ type: 'string' }) Diff_2: string;
  @Column({ type: 'string' }) Diff_3: string;
  @Column({ type: 'int' }) Patient_CodeID: number;
  @Column({ type: 'int' }) RPN_Id: number;
  @Column({ type: 'string' }) Result: string;
  @Column({ type: 'string' }) Message: string;

}