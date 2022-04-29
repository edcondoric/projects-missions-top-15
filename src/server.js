const express = require('express')
const { connect } = require('./database')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/fav')

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', function (req, res) {
    res.send('Challenge FAVS API with JS')
  })

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
  