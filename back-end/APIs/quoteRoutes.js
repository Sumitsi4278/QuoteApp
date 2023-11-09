const router = require('express').Router();
const Quote = require('../Model/quote');


router.get('/quotes', async(req,res)=>{
    try {
        const allquotes = await Quote.find({});
        res.status(200).json(allquotes); 
    } catch (error) {
        res.status(400).json({msg:'Something went wrong!'});
    }
})

router.post('/quotes', async(req,res)=>{
    try {
        const {author, text, img} = req.body;
        await Quote.create({author, text, img});
        res.status(201).json({succsess: true, 
            msg:'Quote created successfully!'}); 

    } 
    catch (error) {
        res.status(400).json({msg:'Something went wrong!'}); 
    }
})

router.get('/quotes/:id', async(req,res)=>{
    try {
       const {id} = req.params;
       const quote = await Quote.findById(id);
       res.status(200).json({
        succsess: true,
        quote
       }) 
    } 
    catch (error) {
        res.status(400).json({msg:'Something went wrong!'}); 
    }
})

router.delete('/quotes/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        await Quote.findByIdAndDelete(id);
        res.status(202).json({
            succsess: true,
            msg:'Quote deleted successfully'
        })
    } 
    catch (error) {
        res.status(400).json({msg:'Something went wrong!'});   
    }
})

router.patch('/quotes/:id', async(req,res)=>{
    try {
        const { id } = req.params;
        const {author, text} = req.body;

        const quote = await Quote.findById(id);
        
        quote.author = author;
        quote.text = text;
        
        await quote.save();
        
        res.status(200).json({
            succsess: true,
            msg: 'Quote edited successfully..!'
        })
    } 
    catch (error) {
        res.status(400).json({msg:'Something went wrong!'});
    }
})

module.exports = router;