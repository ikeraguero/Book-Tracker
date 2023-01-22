const {Router} = require('express');
const router = Router();

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

router.get('/books', (req, res) => {
    res.send(bookList)
})

router.get('/books/:id', (req, res) => {
    const { id } = req.params;                 // Attributing the parameter value to {{ id }}
    const book = bookList.find((b) => b.id === id); // Goes through every single element in the list of books and then return the one that the ID equals the parameter
    res.send(book);
})

// POST

router.post('/books', (req, res) => {
    console.log(req.body);
    bookList.push(req.body);
    res.send(201);
})

module.exports = router;