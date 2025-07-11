//Express server setup
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000 ;

//MIDDLEWARE
app.use(express.json());
const blog = require("./routes/blog");
 
//mount
app.use("/api/v1", blog);
const connectWithDb = require("./config/database");
connectWithDb();

//Start the server
app.listen(PORT, () =>{
    console.log(`App started at port ${PORT}`);
});

//DEFAULT rOUTE
app.get("/",(req, res) => {
    res.send(`<h1> This is HomePAGE baby! </h1>`);
})

