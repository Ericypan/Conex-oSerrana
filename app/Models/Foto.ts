import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import PontoTuristico from 'App/Models/PontoTuristico'

export default class Foto extends BaseModel {
  
  public static table = 'municipio'

  @column({ isPrimary: true })

  public  id: number

  @column()
  public PontoTuristicoId: number

  @hasMany(() => PontoTuristico)
  public  PontoTuristico: HasMany<typeof PontoTuristico>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
