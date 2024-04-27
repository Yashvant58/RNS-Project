// mongodb connection
const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
const DB="mongodb+srv://yashvant:Prajapati%4058@cluster0.dhlccif.mongodb.net/rns?retryWrites=true&w=majority";
const conn=async()=>{
try{
    await mongoose.connect(DB);
    console.log("mongodb connected...");
}catch(err){
    console.log(err);
}
}
conn();