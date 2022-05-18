import express from "express";

const port = 3000;
const app = express();

app.use("/questions",(req,res)=> {
    return res.json({ msg: "Hello"});
})


app.listen(port, ()=> {
    console.log(`quiz ${port}`);
});