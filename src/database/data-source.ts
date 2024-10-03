import CarModel from '@/api/models/car.model';
import ReserveModel from '@/api/models/reserve.model';
import UserModel from '@/api/models/user.model';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CarModel1727975101231 } from './migrations/1727975101231-carModel';
import { UserModel1727976766856 } from './migrations/1727976766856-userModel';
import { ReserveModel1727977198232 } from './migrations/1727977198232-reserveModel';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  synchronize: true,
  logging: false,
  entities: [CarModel, UserModel, ReserveModel],
  migrations: [
    CarModel1727975101231,
    UserModel1727976766856,
    ReserveModel1727977198232,
  ],
  subscribers: [],
});
