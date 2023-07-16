const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// EP для небольшой зажерки ответа от сервера:
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });

    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDB = users.find((user) => user.username === username && user.password === password);

    if (userFromDB) {
        return res.json(userFromDB);
    }

    return res.status(403).json({ message: 'Login error' });
});

// Авторизован ли пользак:
// eslint-disable-next-line consistent-return
server.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'Please, auth!' });
    }

    next();
});

server.use(router);

server.listen(8080, () => {
    console.log('JSON Server is running on port 8080');
});
