const mongoose = require("mongoose");

require("dotenv").config();
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('DB Connected successfully!'))
    .catch( (error) => {
        console.log('DB Facing Connection Issues');
        console.log(error)
        process.exit(1)
    })
};

module.exports = connectWithDb;