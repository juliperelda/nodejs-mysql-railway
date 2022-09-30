import express from 'express';
import { PORT } from './config.js';
import  {pool} from './db.js';


const app = express()

app.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json(rows)
})


app.get('/ping', async(req, res) => {
    const [result] = await pool.query(`SELECT "hello world" as RESULT`)
    res.send('Welcome to Server')
    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await pool.query('INSERT INTO user(name) VALUES ("Jonh")')
    res.json(result)
})


app.listen(PORT)
console.log('Server on port', PORT)
