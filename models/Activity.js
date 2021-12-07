const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
    product:{ type: String, required: true },
    task: { type: String, required: true },  
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, default: null}
});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;