const express = require('express');
const toDoController = require('../controllers/todo/index');
const NodeCache = require('node-cache');

const router = express.Router();

const myCache = new NodeCache({ stdTTL: 10 });

router.get('/', toDoController.get.getAll, (req, res) => {
  if (myCache.has("todo-items")) {
    console.log("Getting from cache");
    return res.send(myCache.get("todo-items"));
  } else {
    fetch("http://localhost:3030/todo-items")
      .then(response => response.json())
      .then((json) => {
        myCache.set("todo-items", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.get('/:id', toDoController.get.getOne, (req, res) => {
  if (myCache.has("todo-items/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("todo-items/:id"));
  } else {
    fetch("http://localhost:3030/todo-items/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("todo-items/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.post('/', toDoController.post.post, (req, res) => {
  if (myCache.has("todo-items")) {
    console.log("Getting from cache");
    return res.send(myCache.get("todo-items"));
  } else {
    fetch("http://localhost:3030/todo-items")
      .then(response => response.json())
      .then((json) => {
        myCache.set("todo-items", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.delete('/:id', toDoController.drop.drop, (req, res) => {
  if (myCache.has("todo-items/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("todo-items/:id"));
  } else {
    fetch("http://localhost:3030/todo-items/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("todo-items/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.patch('/:id', toDoController.patch.patch, (req, res) => {
  if (myCache.has("todo-items/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("todo-items/:id"));
  } else {
    fetch("http://localhost:3030/todo-items/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("todo-items/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});

module.exports = router;
