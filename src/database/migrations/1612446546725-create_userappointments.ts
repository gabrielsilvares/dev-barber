import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserappointments1612446546725 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointment',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'barber_id',
            type: 'uuid',
          },
          {
            name: 'date',
            type: 'timestamp with time zone'
          }
        ],
        foreignKeys: [
          {
            name: 'AppointmentUser',
            columnNames: ['user_id'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          {
            name: 'AppointmentBarber',
            columnNames: ['barber_id'],
            referencedTableName: 'barber',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointment')
  }

}
