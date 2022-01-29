import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Categoriapontos extends BaseSchema {
  protected tableName = 'categoriapontos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    });

    this.schema.table('categoria', (table) => {

      table
      .integer('ponto_turistico_id')
      .unsigned()
      .references('ponto_turistico.id')
      .onDelete('CASCADE')
  
    });
  
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
