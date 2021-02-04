import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBarberreviews1612447717981 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'review',
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
            name: 'rate',
            type: 'numeric'
          },
        ],
        foreignKeys: [
          {
            name: 'ReviewBarber',
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
    await queryRunner.dropTable('review')
  }

}
