import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Municipio from 'App/Models/Municipio'

export default class Evento extends BaseModel {

  public static table = 'evento'
  
  @column({ isPrimary: true })

  public  id: number

  @column()
  public  nome: string

  @column()
  public  data: string

  @column()
  public  descricao: string

  @column()
  public  municipioId: number

  @hasOne(() => Municipio)
  public  Municipio: HasOne<typeof Municipio>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
