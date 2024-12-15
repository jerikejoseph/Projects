import movieSchema from "./models/bms.model.js"

// Add movies
export async function addMovie(req,res){
    try {
        // console.log(req.body);
        const{...movie}=req.body
        // console.log(movie);
        await movieSchema.create({...movie}).then((data)=>{
            res.status(201).send({msg:data})
        }).catch((error)=>{
            res.status(404).send({msg:error})

        })
        
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
    
}
// display all movies
export async function getMovies(req,res){
   try {
    const movies=await movieSchema.find()
    // console.log(movies);
    res.status(200).send(movies)
    
   } catch (error) {
    res.status(404).send({msg:error})
   }
    
    
}

// display specific movie
export async function getMovie(req,res) {
    try {
        const _id=req.params;
        // console.log(_id);
        const movie=await movieSchema.findOne({_id})
        res.status(200).send(movie)
        
    } catch (error) {
        res.status(404).send({msg:error})

        
        
    }
    
}
// update movie
export async function updateMovie(req,res) {
    try {
        const _id=req.params;
        const {...movie}=req.body
        await movieSchema.updateOne({_id},{$set:{...movie}}).then(()=>{
            res.status(201).send({msg:"Successfully Updated"})

        }).catch((error)=>{
            res.status(404).send({msg:error})
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}



// delete
export async function deleteMovie(req,res) {
    try {
        const _id=req.params;
        await movieSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"Successfully Removed"})
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}