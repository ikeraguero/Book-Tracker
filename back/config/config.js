// database configurations

module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'booktacker',
        user: process.env.DB_USER || 'booktracker',
        password: process.env.DB_PASSWORD || 'booktracker',
        options : {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './booktracker.sqlite'
        }
    }
}