import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Municipio from 'App/Models/Municipio'

export default class MeioHospedagem extends BaseModel {

  public static table = 'municipio'
  
  @column({ isPrimary: true })


  public id: number

  @column()
  public nome: string

  @column()
  public latitude: number

  @column()
  public  longitude: number

  @column()
  public  endereco: string

  @column()
  public instagram: string

  @column()
  public whatsapp: string

  @column()
  public municipioId: number

  @hasMany(() => Municipio)
  public  Municipio: HasMany<typeof Municipio>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
