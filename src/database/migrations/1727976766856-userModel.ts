import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserModel1727976766856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'cpf',
            type: 'string',
          },
          {
            name: 'birth',
            type: 'Date',
          },
          {
            name: 'cep',
            type: 'string',
          },
          {
            name: 'email',
            type: 'string',
          },
          {
            name: 'password',
            type: 'string',
          },
          {
            name: 'qualified',
            type: 'boolean',
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
    await queryRunner.dropTable('user');
  }
}
