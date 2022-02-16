const express = require('express');
const bodyParser = require('body-parser');
const toDoRouter = require('./backend/routers/todo');
const activityRouter = require('./backend/routers/activity');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/activity-groups', activityRouter);
app.use('/todo-items', toDoRouter);

module.exports = app;

