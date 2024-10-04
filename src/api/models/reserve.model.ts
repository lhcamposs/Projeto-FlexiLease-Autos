import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reserve')
class ReserveModel {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  carId: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default ReserveModel;
