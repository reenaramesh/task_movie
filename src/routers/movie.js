const express= require("express");
const router = new express.Router();
const Movies= require("../model/movies");

router.post("/add_movies", async(req,res)=>{
    try{
        const addmovies = new Movies(req.body)
        console.log(req.body)
        const added_movie= await(  addmovies.save())
        res.send(added_movie)   
    }

    catch(e){
        res.send(e);
    }
   
})


router.get("/view_movies", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const added_movie= await(Movies.find({})  )
        res.send(added_movie)   
    }

    catch(e){
        res.send(e);
    }
   
})

router.post("/view_movies_name", async(req,res)=>{
    try{
        const addmovies = new Movies(req.body)
        // console.log(req.body)
        const movie_name = req.params.movie_name  
        const view_movie= await Movies.findOne({addmovies});  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


router.patch("/update_movies_name/:movie_name", async(req,res)=>{
    try{
        const addmovies = new Movies(req.body)
        console.log(req.body)
        const movie_name = req.params.movie_name  
        const view_movie= await Movies.findOneAndUpdate({movie_name,addmovies});  
        res.send("changes successfully");   
    }

    catch(e){
        res.send(e);
    }
   
})


router.delete("/delete_movies_name/:id", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const movie_name = req.params.id  
        const del_movie= await Movies.findByIdAndDelete(movie_name);  
        res.send(del_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


module.exports = router;