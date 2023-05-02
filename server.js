const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('./dist'));

app.listen( PORT, () => {
    console.log(`Cyberapp is listening on port ${PORT}`);
})