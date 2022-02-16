const model = require('../../../config/model/index');
const controller = {};

controller.drop = async function(req, res) {
  try {
    const id = req.params.id;
    check_id = await model.activitys.findOne({
      where: {
        id: req.params.id
      }
    })

    await model.activitys.destroy({
      where: {
        id: req.params.id
      }
    })

    if(check_id != null) {
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: {}
      })

    } else{    
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
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