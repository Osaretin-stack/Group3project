//importing
import express from 'express';
import mongoose from 'mongoose';
import dbMessages from './dbMessages.js';


//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());


//dbconfig
const connection_url ='mongodb+srv://admin:Test12345@cluster0.qtkhx.mongodb.net/messagedb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//??

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));

app.post('/messages/new', (req, res) =>{
    const dbMessage =req.body

    dbMessages.create(dbMessage, (err, data) => {
        if (err){
            res.status(500).send(err)
        } else {
            res.status(201).send(`New message created: \n ${data}`)

        
        }
    })
})

//listen
app.listen(port,()=> console.log(`Listening on local host:${port}`));