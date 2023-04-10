const express = require("express")
const bodyParser = require("body-parser") 
const mongoose = require("mongoose")
const cors = require("cors")

const postRoutes = require("./routes/posts.js")
const userRoutes = require("./routes/users.js")

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = 3001

mongoose.connect( "mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/testfsocmemory", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen( PORT, ()=> console.log(`Server listening on ${PORT} and Database Connected Successfully - fsocMemory`)))
    .catch((error)=> console.log(error.message));

