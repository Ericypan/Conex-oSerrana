import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Roles extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.table(this.tableName, (table) => {

      /*
      papéis:
      usuario e admin
      */
      table.string('papel',30).notNullable().defaultTo('usuario')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.table(this.tableName,(table) => {
      table.dropColumn('papel')
    })
  }
}
