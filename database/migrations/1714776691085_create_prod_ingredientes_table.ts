import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prod_ingredientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produtos_id').unsigned().notNullable().references('id').inTable('produtos').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('ingredientes_id').unsigned().notNullable().references('id').inTable('ingredientes').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}