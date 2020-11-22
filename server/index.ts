import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sqlite from 'sqlite3';

const db = new sqlite.Database('./db/post.db');

const app = express();
const PORT = 80;

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.post('/comments/', (req, res) => {
    console.log(req.body);
    res.json({
        ang: '잉잉옹앙앙 뭐 어쩌라공'
    });
});

app.post('/', (req, res) =>{
    console.log('d')
})

app.listen(PORT);

// 이제 JSON 구문 해석기를 달면 댐
// 됫다~ ..? tsconfig module es6으로 바꿈.k,, 그ㅕ러ㅕㅁㄴ..
