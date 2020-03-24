import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('ecgdata12')
export class Photo {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  userId: number;

  @Column()
  time: number;
}
