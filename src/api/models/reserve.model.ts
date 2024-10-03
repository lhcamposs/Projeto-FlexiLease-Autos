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
}

export default ReserveModel;
