module.exports = {
    type: "postgres",
    host: "stealth_db",
    port: 5432,
    username: "louai",
    password: "loupwd",
    database: "database",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }