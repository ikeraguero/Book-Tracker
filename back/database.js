const {createPool} = require('mysql2');
const dotenv = require('dotenv')
dotenv.config();

const pool = createPool ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10
})

pool.query(`select * from books`, (err, res, fields)=>{
    if (err) {
        return console.log(err);
    }
    return console.log(res)
})
