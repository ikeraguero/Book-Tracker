const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`))

const bookList = [
    {
        id: "1",
        name: "In Search of Lost Time",
        author: "Marcel Proust"
    },
    {
        id: "2",
        name: "Don Quixote",
        author: "Miguel de Cervantes"
    },
    {
        id: "3",
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
];

// GET

app.get('/api/books', (req, res) => {
    res.send(bookList);
})

// POST

app.post('/api/books', (req, res) => {
    console.log(req.body);
    bookList.push(req.body);
    res.send(201);
})
