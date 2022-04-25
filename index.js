import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const url = "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg";

let users = [];
let tweets = [
    {username: "joao", tweet: "e ai galera", avatar: url},
    {username: "maria", tweet: "oiii", avatar: url},
    {username: "gabriel", tweet: "ola", avatar: url},
    {username: "joana", tweet: "tudo bem?", avatar: url},
    {username: "pedro", tweet: "oi gente", avatar: url},
    {username: "cintia", tweet: "como vcs estão?", avatar: url},
    {username: "diego", tweet: "estou bem", avatar: url},
    {username: "manfred", tweet: "fala genteee", avatar: url},
    {username: "melina", tweet: "oii pessoal", avatar: url},
    {username: "cris", tweet: "eai turma", avatar: url}
];

app.post('/sign-up', (req, res) => {
    const obj = req.body;
    users.push({...obj});

    res.send("OK");
});

app.post('/tweets', (req, res) => {
    const obj = req.body;
    let index = 0;

    for(let i = 0; i < users.length; i++) {
        if(obj.username === users[i].username) {
            index = i;
        }
    }
    
    tweets.push({...obj, avatar: users[index].avatar});

    res.send("OK");
});

app.get('/tweets', (req, res) => {
    res.send(tweets);
});

app.listen(5000);