import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1612445215925 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'image',
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
					name: 'path',
					type: 'varchar'
				},
			],
			foreignKeys: [
				{
					name: 'ImageBarber',
					columnNames: ['barber_id'],
					referencedTableName: 'barber',
					referencedColumnNames: ['id'],
					onUpdate: 'CASCADE',
					onDelete: 'CASCADE'
				},
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('image')
	}

}
