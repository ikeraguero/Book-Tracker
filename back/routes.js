module.exports = (app) => {

    //GET
    app.get('/books', (req, res) => {
        res.send(bookList)
    })
    
    app.get('/books/:id', (req, res) => {
        const { id } = req.params;                 // Attributing the parameter value to {{ id }}
        const book = bookList.find((b) => b.id === id); // Goes through every single element in the list of books and then return the one that the ID equals the parameter
        res.send(book);
    })

    app.get('/users', (req, res) => {
        res.send(userList)
    })
    
    app.get('/users/:id', (req, res) => {
        const { id } = req.params;
        const user = userList.find((u) => u.id === id);
        res.send(user);
    })

    
    // POST
    
    app.post('/books', (req, res) => {
        console.log(req.body);
        bookList.push(req.body);
        res.send(201);
    })

    app.post('/register', (req, res) => {
        res.send({
            message: `Hello, ${req.body.email}! Your user was registered successfully!`
        })
    })
}