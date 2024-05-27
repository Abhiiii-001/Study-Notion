const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGOOSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() =>  console.log("DB Connected Successfully"))
    .catch( (error) => {
         console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};