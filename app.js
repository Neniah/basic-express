const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about/:name', (req, res) => {
    let user = req.params.name;
    res.send('<h1>About ' + user + '</h1>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
