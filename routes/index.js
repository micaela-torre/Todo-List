const express = require("express");
const router = express.Router()
const activitiesControllers = require("../controllers/activitiesControllers");

router
  .route("/newActivity")
  .post(activitiesControllers.addNewActivity);

router
  .route("/deleteActivity/:id")
  .delete(activitiesControllers.deleteActivity);

router
    .route("/getActivities")
    .get(activitiesControllers.getActivities)

// router
//   .route("/getInProgress")
//   .get(activitiesControllers.getInProgress)


module.exports = router