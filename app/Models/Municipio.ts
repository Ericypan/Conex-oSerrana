import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Evento from 'App/Models/Evento'
import MeioHospedagem from './MeioHospedagem'
import PontoTuristico from './PontoTuristico'

export default class Municipio extends BaseModel {
  public static table = 'municipio'
  @column({ isPrimary: true })

  public  id: number

  @column()
  public  nome: string

  @column()
  public  latitude: number

  @column()
  public  longitude: number

  @column()
  public  historia: string

  @column()
  public  eventosId: number

  @column()
  public  pontoTuristicoId: number

  @column()
  public  meioHospedagemId: number

  @hasMany(() => Evento)
  public eventos: HasMany<typeof Evento>

  @hasMany(() => MeioHospedagem)
  public meio_hospedagem: HasMany<typeof MeioHospedagem>

  @hasMany(() => PontoTuristico)
  public  Ponto_Turistico: HasMany<typeof PontoTuristico>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}

