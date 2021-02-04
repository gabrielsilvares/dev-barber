import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarberservices1612448466531 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
      new Table({
        name: 'service',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'barber_id',
            type: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
					},
					{
            name: 'price',
            type: 'numeric(65,30)'
          },
        ],
        foreignKeys: [
          {
            name: 'ServiceBarber',
            columnNames: ['barber_id'],
            referencedTableName: 'barber',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        ],
      })
    );
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('service');
	}

}
