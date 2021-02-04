import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarbers1612445115924 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'barber',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'avatar',
						type: 'varchar',
						default: "'default.png'"
					},
					{
						name: 'stars',
						type: 'numeric',
					},
					{
						name: 'latitude',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'longitude',
						type: 'varchar',
						isNullable: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('barber')
	}

}
