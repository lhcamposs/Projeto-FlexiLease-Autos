import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  birth: Date;

  @Column()
  cep: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default UserModel;
