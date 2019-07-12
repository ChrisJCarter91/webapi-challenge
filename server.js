const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./data/helpers/projectRouter');
const actionRouter = require('./data/helpers/actionRouter');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Node Express Sprint</h2>
    `);
});

module.exports = server;