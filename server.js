const express = require('express');
const cors = require('cors'); // 必要なCORSモジュールを追加
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // ここでCORSミドルウェアを使用します。
app.use(bodyParser.json());

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE reviews(id integer primary key, text text)');

app.get('/reviews', (req, res) => {
    db.all('SELECT * FROM reviews', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.post('/reviews', (req, res) => {
    const sql = 'INSERT INTO reviews(text) VALUES(?)';
    const review = req.body.text;
    db.run(sql, review, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        res.status(201).send();
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
