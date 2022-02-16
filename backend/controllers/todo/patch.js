const model = require('../../../config/model/index');
const controller = {};

controller.patch = async function(req, res) {
  try {
    const id = req.params.id;
    
    const todos = await model.todos.update({
      updated_at: new Date(),
      title: req.body.title,
      is_active: req.body.is_active
    },{
      where: {
        id: req.params.id
      }
    })

    check_id = await model.todos.findOne({
      where: {
        id: req.params.id
      }
    })
    
    if (check_id != null) {
      res.status(200).json({
        status: "Success",
        messages: "Success",
        data: {
          id: id,
          activity_group_id: check_id.activity_group_id,
          title: check_id.title,
          is_active: check_id.is_active,
          priority: check_id.priority,
          created_at: check_id.created_at,
          updated_at: check_id.updated_at,
          deleted_at: check_id.deleted_at
        }
      })

    } else if (check_id == null) {
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