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

  @Column()
  acessories: string[];

  @Column()
  numberOfPassengers: string[];
}

export default CarModel;
