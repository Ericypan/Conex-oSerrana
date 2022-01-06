import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Evento extends BaseModel {

  public static table = 'municipio'
  
  @column({ isPrimary: true })

  public  id: number

  @column()
  public  nome: string

  @column()
  public  data: string

  @column()
  public  descricao: string

  @column()
  public  municipio_id: number

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
