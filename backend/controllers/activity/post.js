const model = require('../../../config/model/index');
const controller = {};

controller.post = async function(req, res) {
  try {
    const title = req.body.title;
    const email = req.body.email;
    if (title) {
      const activitys = await model.activitys.create({
        created_at: new Date(),
        updated_at: new Date(),
        title: req.body.title,
        email: req.body.email
      })
        
      res.status(201).json({
        status: "Success",
        messages: "Success",
        data: {
          created_at: activitys.created_at,
          updated_at: activitys.updated_at,
          id: activitys.id,
          title: activitys.title,
          email: activitys.email    
        }
      })
    } else if (title == null){
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