import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reserve')
class ReserveModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  carId: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}

export default ReserveModel;
