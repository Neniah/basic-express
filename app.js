const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



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

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/download/pdf.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(name + ' has subscribed with ' + email);
});


app.listen(3000, () => {
  console.log('Server started on port 3000...');
});
