import { Sequelize } from "sequelize";

const db = new Sequelize("tubes-pwl", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
