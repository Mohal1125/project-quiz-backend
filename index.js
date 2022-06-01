import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";


const port = process.env.PORT;
const app = express();
app.use(cors());

const questionSchema=new mongoose.Schema({
    question: String,
    answer: Array,
    correct: String,
});
const Question = mongoose.model("Question", questionSchema, "questions");

app.use("/questions", async (req, res) => {
    try{
      const questions=await Question.find().exec();
      res.json(questions);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: err.message });
    }
    //return res.json({ msg: "Hello"});
});

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    app.listen(port, () => {
      console.log(`Quiz App ${port}`);
   });
  });


