import express from 'express';
import userRoutes from "./routes/users.js"
import  mongoose from 'mongoose'




const app = express();
const PORT = 5000;
app.use(express.json({extended:false}));
const CONNECTION_URL = 'mongodb+srv://hihow:123987465d@cluster0.e5zoc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.get('/', (req, res) =>{

res.send("hello12")


})


app.use('/users',userRoutes)






mongoose.connect(CONNECTION_URL, {useUnifiedTopology:true, useNewUrlParser:true})
.then(() => app.listen(PORT, ()=>console.log('Server running on port 5000\n mongodb connected')))
.catch(() => console.log("error connecting to db"))









