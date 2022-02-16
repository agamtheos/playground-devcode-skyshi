const model = require('../../../config/model/index');
const controller = {};

controller.getAll = async function(req, res) {
  try {
    await model.activitys.findAll()
    .then ((result) => {
      if (result.length > 0) {
        res.status(200).json({
          status: "Success",
          messages: "Success",
          data: result
        })

      } else {
        res.status(404).json({
          messages: "No data found",
          data:{}
        })
      }
    })

  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
}

controller.getOne = async function(req, res) {
  try {
    let activitys = await model.activitys.findOne({
      where: {
        id: req.params.id
      }
  })

  id = req.params.id;
  if (activitys != null) {
    res.status(200).json({
      status: "Success",
      messages: "Success",
      data: activitys
    })

  } else {
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
