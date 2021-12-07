const Activity = require("../models/Activity")

var today= new Date()
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10 ){
    dd = '0' + dd 
}
today = yyyy + '-' + mm + '-' + dd;

const activitiesControllers = {

    addNewActivity: (req, res) => {
        const newActivity = new Activity({
            product: req.body.product,
            task: req.body.task,  
            name: req.body.name,
            date: req.body.date,
            time:req.body.time
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
          for (let i = 0; i < activities[0].date; i++) {
            console.log();
          }
          console.log(activities[0].date)
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
      // getInProgress: async (req, res) => {
      //   try {
      //     var activities = await Activity.find();
      //     var date1 = new Date();
      //     if(activities.date === date1) {
      //       res.json({ success: true, response: activities });
      //     } else {
      //       throw new Error("ActivitiesInProgress not Found");
      //     }
      //   } catch (error) {
      //     res.json({ success: false, response: error });
      //     console.log(error);
      //   }
      // }

}












module.exports = activitiesControllers;