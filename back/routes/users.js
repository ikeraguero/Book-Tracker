const {Router} = require('express');
const router = Router();

const userList = [
    {
        id: "1",
        name: 'Iker Aguero'
    }
];

// GET

router.get('/users', (req, res) => {
    res.send(userList)
})

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = userList.find((u) => u.id === id);
    res.send(user);
})

// POST

router.post('/register', (req, res) => {
    res.send({
        message: `Hello, ${req.body.email}! Your user was registered successfully!`
    })
})

module.exports = router;