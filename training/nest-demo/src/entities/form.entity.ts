import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class FormEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  username: string;
  @Column({ type: 'varchar', name: 'name' })
  name: string;
  @Column({ type: 'varchar', name: 'ID' })
  ID: string;
  @Column({ type: 'varchar', name: 'birth' })
  birth: string;
  @Column({ type: 'varchar', name: 'tel' })
  tel: string;
  @Column({ type: 'varchar', name: 'email' })
  email: string;
}
