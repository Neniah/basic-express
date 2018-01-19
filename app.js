const express = require('express');
const path = require('path');

const app = express();
// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// json
app.get('/users', (req, res) => {
  let users = [
    {
      first_name: "Jhon",
      last_name: "Doe",
      age: 34,
      gender: "male",
    },
    {
      first_name: "Tim",
      last_name: "Phillip",
      age: 23,
      gender: "male",
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      age: 42,
      gender: "female",
    },
  ];
  res.json(users);
});


app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
