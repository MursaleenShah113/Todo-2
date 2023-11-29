const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
main().catch(err => console.log(err));
async function main() {
    const mongoURI = "mongodb+srv://username:password@cluster0.w7ulx6h.mongodb.net/todolistDB?retryWrites=true&w=majority";
   //await mongoose.connect(mongoURI ,);
  //await mongoose.connect(mongoURI);
  mongoose.connect(mongoURI)
.then(()=> {

    console.log("App connected to database successfully");
    
    app.listen(3000, function()
  {
      console.log("server started on port 3000");
   });

// const todoSchema = new mongoose.Schema({
//     task :String
// });

// const Todo = mongoose.model('Todo',todoSchema);

// app.post('/todos', async function(req,res){
//     const {task} = req.body;
//     const newTodo = new Todo({task});

//     try {
//         const savedTodo = await newTodo.save();
//         res.status(201).json(savedTodo);
//       } catch (error) {
//         res.status(500).json({ error: 'Failed to add todo' });
//       }

// });


    

    
    
    
 app.listen(3000, function(){
        console.log("server is running on port 3000");
    })
}



)}
