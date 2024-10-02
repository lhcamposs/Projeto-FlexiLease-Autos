import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class CarsModel {
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

export default CarsModel;
