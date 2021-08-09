const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://penous:penous@becode.v7mmb.mongodb.net/friendBook',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const port = 9000;

const db = mongoose.connection;
db.once('open', () => {
  console.log('we are connected to MongoDB!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});

//Mongoose friendschema
const friendSchema = new mongoose.Schema({
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  phoneNumber: 'string',
  language: 'string',
});

const Friend = mongoose.model('Friend', friendSchema, 'friends');

app.get('/friends', (req, res) => {
  Friend.find((err, friends) => {
    if (err) console.log(err);
    res.send(friends);
  });
});

app.post('/addfriend', (req, res) => {
  console.log(req.body);
  const friend = new Friend(req.body);
  console.log('friend: ' + friend);
  // friend.save();
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
