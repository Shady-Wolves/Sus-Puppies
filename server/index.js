const express = require('express');
const app = express();
const port = 3000;
const User = require('../db');

app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;
    const socket = req.query.socket;
    const data = await login(username, password, socket);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

const login = async (username, password, socket) => {
  try {
    //Database code goes here - check for existing user, create if new
    let data = await User.findOne({username: username}).exec();
    if (data === null) {
      data = await User.create({
        username: username,
        password: password,
        socket: socket
      });
      return data;
    } else if ( data.password !== password) {
      return ("Error, Bad Username/Password. Check Password");
    } else {
      data = await User.findOneAndUpdate(username, {username, password, socket}, {bew: true});
      return data;
    }
  } catch (err) {
    return err;
  }
}

app.listen(port, () => {
  console.log(`Werewolf listening on port ${port}`);
});
