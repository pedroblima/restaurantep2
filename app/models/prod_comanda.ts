import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdComanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtos_id: number

  @column()
  declare comandas_id: number
  
  @column()
  declare quantidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}