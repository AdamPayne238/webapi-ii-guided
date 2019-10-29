const express = require('express');

// 1
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
});

// 2
server.use('/api/hubs', hubsRouter);

server.listen(4000, () => {
});
