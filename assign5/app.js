const express = require('express')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  res.send(`name: ${req.body.name} <br>email: ${req.body.email} <br>comment: ${req.body.comment}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));