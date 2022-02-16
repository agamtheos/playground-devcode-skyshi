const model = require('../../../config/model/index');
const controller = {};

controller.getAll = async function(req, res) {
  try {
    const groupId = req.query.activity_group_id;
    if (!groupId) {
      const all = await model.todos.findAll()
      res.status(200).json({
        status: "Success",
        messages: "Success",
        data: all
      })

    } else if (groupId) {
      const query = await model.todos.findAll({
        where: {
          activity_group_id: groupId
        }
      })
      res.status(200).json({
        status: "Success",
        messages: "Success",
        data: query
      })

    } else {
      res.status(404).json({
        messages: "No data found",
        data:{}
      })
    }
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message
    })
  }
}

controller.getOne = async function(req, res) {
  try {
    let todos = await model.todos.findOne({
      where: {
        id: req.params.id
      }
  })

  id = req.params.id;

  if (todos != null) {
    res.status(200).json({
      status: "Success",
      messages: "Success",
      data: todos
    })

  } else {
    res.status(404).json({
      status: "Not Found",
      message: `Todo with ID ${id} Not Found`,
      data: {}
    })
  }

  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message
    })
  }
}

module.exports = controller;
