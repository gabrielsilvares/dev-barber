import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1605278312420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: 'user',
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
							name: 'email',
							type: 'varchar',
							isUnique: true,
						},
						{
							name: 'password',
							type: 'varchar',
						},
					],
				})
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('user')
    }

}
