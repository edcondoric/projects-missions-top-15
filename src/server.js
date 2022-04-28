const express = require('express');

const port = process.env.PORT || 8000;
const app = express();


app.get('/', function (req, res) {
    res.send('Challenge FAVS API with JS')
  })

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
  