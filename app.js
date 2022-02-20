const express = require('express');
const bodyParser = require('body-parser');
const toDoRouter = require('./backend/routers/todo');
const activityRouter = require('./backend/routers/activity');
const http = require('http');
const compression = require('compression');

const app = express();

app.use(compression({
  level: 6,
  threshold: 1 * 1000,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false
    } return compression.filter(req, res)
  },
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/activity-groups', activityRouter);

app.use('/todo-items', toDoRouter);

const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);


module.exports = app;
