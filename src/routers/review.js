const express= require("express");
const router = new express.Router();
const Reviews= require("../model/reviews");

router.post("/add_review", async(req,res)=>{
    try{
        const addreview = new Reviews(req.body)
        console.log(req.body)
        const added_movie= await(addreview.save())
        res.send(added_movie)   
    }

    catch(e){
        res.send(e);
    }
   
})


router.post("/view_reviewbyname", async(req,res)=>{
    try{
        const addmovies = new Reviews(req.body)
        // console.log(req.body)
        const movie_name = req.params.movie_name  
        const view_movie= await Reviews.findOne({addmovies});  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})

router.get("/view_review", async(req,res)=>{
    try{
        //const addmovies = new Movies(req.body)
        // console.log(req.body)
        const movie_name = req.params.id  
        const view_movie= await Reviews.find({});  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


router.patch("/update_review_name/:id", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const id = req.params.id  
        const view_movie= await Reviews.findByIdAndUpdate(id,req.body);  
        res.send(view_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


router.delete("/delete_review_name/:id", async(req,res)=>{
    try{
        // const addmovies = new Movies(req.body)
        // console.log(req.body)
        const movie_name = req.params.id  
        const del_movie= await Reviews.findByIdAndDelete(movie_name);  
        res.send(del_movie);   
    }

    catch(e){
        res.send(e);
    }
   
})


module.exports = router;