const express = require("express");
require("../src/db/db");
const movie= require("./routers/movie")
const review= require("./routers/review")
const actor= require("./routers/actor")
const user= require("./routers/user")
const Movies= require("./model/movies")
const Reviews= require("./model/reviews")
const Actors= require("./model/actors")
const User= require("./model/users")

const app= express();
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(movie);
app.use(review);
app.use(actor);
app.use(user);

app.get("/", async(req,res)=>{
res.send("hello");
})

app.listen(port,()=>{
console.log("ok");
})

