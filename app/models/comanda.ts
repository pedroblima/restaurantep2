import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column.dateTime({ autoCreate: true })
  declare data_pagamento: DateTime

  @column.dateTime({ autoCreate: true })
  declare data: DateTime

  @column()
  declare funcionarios_id: number

  @column()
  declare clientes_id: number

  @column()
  declare form_pagamento_id: number
  
 
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}