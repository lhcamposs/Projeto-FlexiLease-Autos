import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  valuePerDay: number;

  @Column('simple-array')
  acessories: string[];

  @Column()
  numberOfPassengers: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}

export default CarModel;
