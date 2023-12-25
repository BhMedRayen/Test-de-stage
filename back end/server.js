const express = require('express');
require('./src/config/connect');
const menuItemRoutes = require('./src/routes/routes');

const app = express();

app.use(express.json());

app.use('/menuItems', menuItemRoutes);
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
