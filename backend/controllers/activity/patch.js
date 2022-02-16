const model = require('../../../config/model/index');
const controller = {};

controller.patch = async function(req, res) {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const activitys = await model.activitys.update({
      updated_at: new Date(),
      title: req.body.title
    },{
      where: {
        id: req.params.id
      }
    })

    check_id = await model.activitys.findOne({
      where: {
        id: req.params.id
      }
    })    

    if (check_id != null && title) {
      res.status(200).json({
        status: "Success",
        messages: "Success",
        data: {          
          id: check_id.id,
          email: check_id.email,
          title: check_id.title,        
          created_at: check_id.created_at,
          updated_at: check_id.updated_at,
          deleted_at: check_id.deleted_at      
        }
      })

    } else if (check_id == null) {
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {}
      })
      
    } else {
      res.status(400).json({
        status: "Bad Request",
        message: "title cannot be null",
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