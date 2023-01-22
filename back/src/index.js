const express = require('express');
const app = express();
const PORT = 3001;
const bookRoute = require('../routes/books.js')
const userRoute = require('../routes/users.js')

app.use(express.json());
app.use(express.urlencoded());
app.use(bookRoute);
app.use(userRoute);

app.use('/api', bookRoute, userRoute) // 'api' route prefix for every route on books.js and users.js

app.listen(PORT, () => console.log(`Running Express Server on http://localhost:${PORT}`))


