const mongoose = require('mongoose');
const Quote = require('./Model/quote');

mongoose.connect('mongodb://127.0.0.1:27017/Quoteapp-DB')
  .then(()=>console.log('Quoteapp-DB connected successfully'))
  .catch((err)=>console.log(err))

const dummyData = [
    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    },
    {
        text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey"
    },
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling"
    },
    {
        text: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        author: "Albert Camus"
    },
    {
        text: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        author: "Albert Camus"
    }
]

async function seedDb(){
    await Quote.deleteMany({});
    await Quote.insertMany(dummyData);
}

seedDb()
  .then(()=> console.log('Db seeded successfuly..!'))