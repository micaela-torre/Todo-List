const mongoose = require("mongoose")

mongoose
.connect(process.env.MONGODB)
.then(() => console.log("database connected"))
.catch((error) => console.log(error));