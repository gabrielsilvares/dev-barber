import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarberavailability1612448812087 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
      new Table({
        name: 'availability',
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
            name: 'weekday',
            type: 'integer'
					},
					{
            name: 'hours',
            type: 'text'
          },
        ],
        foreignKeys: [
          {
            name: 'AvailabilityBarber',
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
		await queryRunner.dropTable('availability');
	}

}
