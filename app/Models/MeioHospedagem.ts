import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Municipio from 'App/Models/Municipio'

export default class MeioHospedagem extends BaseModel {

  public static table = 'meio_hospedagem'
  
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

  @column()
  public fotoid: number

  @hasOne(() => Municipio)
  public  Municipio: HasOne<typeof Municipio>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
