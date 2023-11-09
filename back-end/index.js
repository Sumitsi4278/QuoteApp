const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT =process.env.PORT || 3535;

mongoose.connect('mongodb://127.0.0.1:27017/Quoteapp-DB')
  .then(()=>console.log('Quoteapp-DB connected successfully'))
  .catch((err)=>console.log(err))

app.use(express.json());

  const quoteRoutes = require('./APIs/quoteRoutes');
//   app.use(express.json()); // JSON body parser
//   app.use(express.urlencoded({ extended: true })); // URL-encoded body parser

app.use(cors({origin: ['http://localhost:3000']}));
app.use(quoteRoutes);

app.get('/', (req,res)=>{
    res.send('working Fine..!')
})
app.listen(PORT, ()=>{
    console.log("Server is at up PORT", PORT);
})