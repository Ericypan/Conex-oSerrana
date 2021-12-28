import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inits extends BaseSchema {
  protected tableName = 'inits'

  public async up () {
    this.schema.createTable("municipio", (table) => {
      table.increments('id')
      table.string('nome', 45)
      table.double("latitude")
      table.double("longitude")
      table.text("historia")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable("evento", (table) => {
      table.increments('id')
      table.string('nome',45)
      table.string('data',45)
      table.string('descricao',255)

      table
      .integer('municipio_id')
      .unsigned()
      .references('municipio.id')
      .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable("categoria", (table) => {
      table.increments('id')
      table.string('tipo_turismo', 45)
      table.boolean("regiao_municipio")

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable("meio_hospedagem", (table) => {
      table.increments('id')
      table.string('nome', 100)
      table.double("latitude")
      table.string("endereco", 255)
      table.string("instagram", 45)
      table.string("whatsapp", 45)
      table.double("longitude")

      table
      .integer('municipio_id')
      .unsigned()
      .references('municipio.id')
      .onDelete('CASCADE')
      

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })


    this.schema.createTable("ponto_turistico", (table) => {
      table.increments('id')
      table.string('nome', 60)
      table.double("latitude")
      table.double("longitude")
      table.text("sobre")

      table
      .integer('municipio_id')
      .unsigned()
      .references('municipio.id')
      .onDelete('CASCADE')

      table
      .integer('categoria_id')
      .unsigned()
      .references('categoria.id')
      .onDelete('CASCADE')
      

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable("foto", (table) => {
      table.increments('id')
      
      table
      .integer('ponto_turistico_id')
      .unsigned()
      .references('ponto_turistico.id')
      .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

  }

  public async down () {
   
    this.schema.dropTable("foto")
    this.schema.dropTable("ponto_turistico")
    this.schema.dropTable("meio_hospedagem")
    this.schema.dropTable("categoria")
    this.schema.dropTable("evento")
    this.schema.dropTable("municipio")
  }
}
