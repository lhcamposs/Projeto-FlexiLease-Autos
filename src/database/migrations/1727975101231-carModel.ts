import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CarModel1727975101231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'model',
            type: 'string',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'valuePerDay',
            type: 'int',
          },
          {
            name: 'acessories',
            type: 'string[]',
          },
          {
            name: 'numberOfPassengers',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
