const express= require("express");
const router = new express.Router();
const Actors= require("../model/actors");


router.post("/add_actor", async(req,res)=>{
    try{
        const addmovies = new Actors(req.body)
        console.log(req.body)
        const added_movie= await(  addmovies.save())
        res.send(added_movie)   
    }

    catch(e){
        res.send(e);
    }
   
})


router.get("/view_actor", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const added_movie= await(Actors.find({})  )
        res.send(added_movie)   
    }

    catch(e){
        res.send(e);
    }
   
})

router.post("/view_actorbyname", async(req,res)=>{
    try{
        const addmovies = new Actors(req.body)
        // console.log(req.body)
        const movie_name = req.params.movie_name  
        const view_movie= await Actors.findOne({addmovies});  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})

router.patch("/update_actor_name/:id", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const id = req.params.id  
        const view_movie= await Actors.findByIdAndUpdate(id,req.body);  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


router.delete("/delete_actor_name/:id", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const movie_name = req.params.id  
        const del_movie= await Actors.findByIdAndDelete(movie_name);  
        res.send(del_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


module.exports = router;