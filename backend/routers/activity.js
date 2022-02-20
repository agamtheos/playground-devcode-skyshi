const express = require('express');
const activityController = require('../controllers/activity/index');
const NodeCache = require('node-cache');
const router = express.Router();

const myCache = new NodeCache({ stdTTL: 10 });

router.get('/', activityController.get.getAll, (req, res) => {
  if (myCache.has("activity-groups")) {
    console.log("Getting from cache");
    return res.send(myCache.get("activity-groups"));
  } else {
    fetch("http://localhost:3030/activity-groups")
      .then(response => response.json())
      .then((json) => {
        myCache.set("activity-groups", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.get('/:id', activityController.get.getOne, (req, res) => {
  if (myCache.has("activity-groups/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("activity-groups/:id"));
  } else {
    fetch("http://localhost:3030/activity-groups/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("activity-groups/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.post('/', activityController.post.post, (req, res) => {
  if (myCache.has("activity-groups")) {
    console.log("Getting from cache");
    return res.send(myCache.get("activity-groups"));
  } else {
    fetch("http://localhost:3030/activity-groups")
      .then(response => response.json())
      .then((json) => {
        myCache.set("activity-groups", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.delete('/:id', activityController.drop.drop, (req, res) => {
  if (myCache.has("activity-groups/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("activity-groups/:id"));
  } else {
    fetch("http://localhost:3030/activity-groups/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("activity-groups/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});
router.patch('/:id', activityController.patch.patch, (req, res) => {
  if (myCache.has("activity-groups/:id")) {
    console.log("Getting from cache");
    return res.send(myCache.get("activity-groups/:id"));
  } else {
    fetch("http://localhost:3030/activity-groups/:id")
      .then(response => response.json())
      .then((json) => {
        myCache.set("activity-groups/:id", json);
        console.log("Getting from API");
        res.send(json);
      });
  }
});

module.exports = router;
