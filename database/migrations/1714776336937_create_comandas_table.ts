import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa', 45).notNullable()
      table.integer('form_pagamento_id').references('id').inTable('form_pagamento').unsigned().onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('clientes_id').references('id').inTable('clientes').unsigned().onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('funcionarios_id').references('id').inTable('funcionarios').unsigned().onDelete('CASCADE').onUpdate('CASCADE')
      table.dateTime('data').notNullable()
      table.dateTime('data_pagamento').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}