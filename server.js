const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import your middleware

const app = express();
const PORT = 3000;

// Integrate the middleware
app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World! Middleware is active.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
