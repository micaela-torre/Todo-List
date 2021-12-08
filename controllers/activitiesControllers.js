const Activity = require("../models/Activity")

const activitiesControllers = {
  addNewActivity: (req, res) => {
    const{
      product,
      task,  
      name,
      date,
      time,
      status
    }= req.body
    const newActivity = new Activity({
      product,
      task,  
      name,
      date,
      time,
      status
    });
      newActivity
        .save()
        .then(() => res.json({ success: true }))
        .catch((error) => res.json({ success: false, response: error }))
  },
  
  deleteActivity: (req, res) => {
     Activity.findOneAndDelete({_id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((error) => res.json({ success: false, response: error }));
  },

  getActivities: async (req, res) => {
    try {
      var activities = await Activity.find();
      if (activities.length) {
        res.json({ success: true, response: activities });
      } else {
        throw new Error("Activities not Found");
      }
    } catch (error) {
       res.json({ success: false, response: error });
         console.log(error);
    }
  },
  
  updateActivity: async (req, res) => {
    Activity.findOneAndUpdate({ _id: req.params.id }, { ...req.body})
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, response: error }));
  }
      
}





module.exports = activitiesControllers;