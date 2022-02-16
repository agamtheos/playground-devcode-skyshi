const model = require('../../../config/model/index');
const controller = {};

controller.post = async function(req, res) {
  try {
    const title = req.body.title;
    const activity_group_id = req.body.activity_group_id;
    if (title && activity_group_id) {
      const todos = await model.todos.create({
        created_at: new Date(),
        updated_at: new Date(),
        activity_group_id: req.body.activity_group_id,
        title: req.body.title,
      })

      res.status(201).json({
        status: "Success",
        messages: "Success",
        data: {
          created_at: todos.created_at,
          updated_at: todos.updated_at,
          id: todos.id,
          title: todos.title,
          email: todos.email,
          activity_group_id: todos.activity_group_id,
          is_active: todos.is_active,
          priority: todos.priority    
        }
      })

    } else if (title == null) {
      res.status(400).json({
        status: "Bad Request",
        message: "title cannot be null",
        data: {}
      })
      
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "activity_group_id cannot be null",
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