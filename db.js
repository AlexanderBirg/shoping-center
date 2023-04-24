const { Pool } = require('pg');

class BaseObject {
  constructor(tableName) {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'shoping-center',
      password: 'admin',
      port: 5432,
    });
    this.tableName = tableName;
  }

  async getAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    const result = await this.pool.query(query);
    return result.rows;
  }

  async getById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = $1`;
    const result = await this.pool.query(query, [id]);
    return result.rows[0];
  }

  async delete(id) {
    const query = `DELETE FROM ${this.tableName} WHERE id = $1`;
    await this.pool.query(query, [id]);
  }

  async update(id, data) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map((col, i) => `${col} = $${i + 2}`).join(', ');
    const query = `UPDATE ${this.tableName} SET ${setClause} WHERE id = $1`;
    await this.pool.query(query, [id, ...values]);
  }

  async create(id, data) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = columns.map((col, i) => `$${i + 1}`).join(', ');
    const query = `INSERT INTO ${this.tableName} (${columns.join(', ')}) VALUES (${placeholders}) RETURNING id`;
    const result = await this.pool.query(query, values);
    return result.rows[0].id;
  }
}

class News extends BaseObject {
  constructor() {
    super('news');
  }
}

class Shops extends BaseObject {
  constructor() {
    super('shops');
  }
}

module.exports = { News, Shops };