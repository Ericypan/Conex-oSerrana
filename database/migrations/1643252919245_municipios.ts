import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Municipios extends BaseSchema {
  protected tableName = 'municipios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

    
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    });

    this.schema.table('municipio', (table) => {

    table
    .integer('eventos_id')
    .unsigned()
    .references('eventos.id')
    .onDelete('CASCADE')

    table
    .integer('ponto_turistico_id')
    .unsigned()
    .references('ponto_turistico.id')
    .onDelete('CASCADE')

    table
    .integer('meio_hospedagem_id')
    .unsigned()
    .references('meio_hospedagem.id')
    .onDelete('CASCADE')

  });
  
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
