import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarbertestimonials1612448626749 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'testimonial',
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
            name: 'rate',
            type: 'numeric'
          },
          {
            name: 'body',
            type: 'text'
          },
        ],
        foreignKeys: [
          {
            name: 'TestimonialBarber',
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
    await queryRunner.dropTable('testimonial')
  }

}
