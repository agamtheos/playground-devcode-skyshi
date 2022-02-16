const express = require('express');
const activityController = require('../controllers/activity/index');

const router = express.Router();

router.get('/', activityController.get.getAll);
router.get('/:id', activityController.get.getOne);
router.post('/', activityController.post.post);
router.delete('/:id', activityController.drop.drop);
router.patch('/:id', activityController.patch.patch);

module.exports = router;
