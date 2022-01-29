import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Categoria from 'App/Models/Categoria'
import Municipio from 'App/Models/Municipio'
import Foto from 'App/Models/Foto'
export default class PontoTuristico extends BaseModel {
  public static table = 'ponto_turistico'
  @column({ isPrimary: true })

  public  id: number

  @column()
  public nome: string

  @column()
  public latitude: number

  @column()
  public longitude: number

  @column()
  public sobre: string

  @column()
  public municipioId: number

  @column()
  public categoriaId: number

  @hasOne(() => Municipio)
  public  Municipio: HasOne<typeof Municipio>

  @hasOne(() => Categoria)
  public  Categoria: HasOne<typeof Categoria>

  @hasOne(() => Foto)
  public  foto: HasOne<typeof Foto>

  @column.dateTime({ autoCreate: true })
  public  createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public  updatedAt: DateTime
}
