import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar', name: 'username' })
  username: string;
  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
