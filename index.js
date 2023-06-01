const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// ミドルウェア設定
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SQLiteデータベースの設定
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// データベースにテーブルを作成
db.run(`CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT
);`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Review table created.');
});

// レビューの取得
app.get('/reviews', (req, res) => {
  let sql = `SELECT * FROM reviews;`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

// レビューの投稿
app.post('/reviews', (req, res) => {
  let sql = `INSERT INTO reviews (text) VALUES (?);`;
  let review = req.body.text;

  db.run(sql, review, (err) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: 'Review added.' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
