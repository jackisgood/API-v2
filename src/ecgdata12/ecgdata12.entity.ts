import { Entity, Column, PrimaryGeneratedColumn, ObjectID, ManyToOne, JoinColumn, Index , ObjectIdColumn} from 'typeorm';
import { User } from '../users/user.entity';

@Entity('ecgdata12')
export class Ecgdata12 {
  @PrimaryGeneratedColumn()
  // @ObjectIdColumn()
  _id: ObjectID;

  //@ManyToOne(type => User, user => user.userId)
  @JoinColumn()
  user: User;
  @Column({ type: 'int' }) userId:number;
  @Column({ type: 'double' })
  @Index()
  time: number;

  @Column({ type: 'double' }) I: number;
  @Column({ type: 'double' }) II: number;
  @Column({ type: 'double' }) III: number;
  @Column({ type: 'double' }) V1: number;
  @Column({ type: 'double' }) V2: number;
  @Column({ type: 'double' }) V3: number;
  @Column({ type: 'double' }) V4: number;
  @Column({ type: 'double' }) V5: number;
  @Column({ type: 'double' }) V6: number;
  @Column({ type: 'double' }) aVR: number;
  @Column({ type: 'double' }) aVL: number;
  @Column({ type: 'double' }) aVF: number;
}