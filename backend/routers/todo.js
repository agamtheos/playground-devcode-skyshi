const express = require('express');
const toDoController = require('../controllers/todo/index');

const router = express.Router();

router.get('/', toDoController.get.getAll);
router.get('/:id', toDoController.get.getOne);
router.post('/', toDoController.post.post);
router.delete('/:id', toDoController.drop.drop);
router.patch('/:id', toDoController.patch.patch);

module.exports = router;
