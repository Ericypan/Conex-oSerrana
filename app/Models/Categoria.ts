import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import PontoTuristico from 'App/Models/PontoTuristico'

export default class Categoria extends BaseModel {
  public static table = 'municipio'
  @column({ isPrimary: true })
  public  id: number

  @column()
  public tipo_turismo: string

  @column()
  public regiao_municipio: boolean

  @hasMany(() => PontoTuristico)
  public  Ponto_Turistico: HasMany<typeof PontoTuristico>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
