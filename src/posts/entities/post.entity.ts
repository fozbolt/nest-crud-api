import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({
    // type: 'bigint',
    // name: 'user_id',
  }) //auto inc int
  id: number;

  @Column({
    nullable: false,
  }) //samo pretvori tip?
  title: string;

  @Column({
    nullable: true,
  }) //samo pretvori tip?
  description: string;
}
