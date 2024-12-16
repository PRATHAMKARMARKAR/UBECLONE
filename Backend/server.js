
import express from "express";
const app =  express();
import { configDotenv } from "dotenv";
const dotenv = configDotenv();
import cors from 'cors';
app.use(cors());
app.get('/', (req, res)=>{
    res.send('Server is ready');
})
const port = process.env.PORT || 6000;
app.listen(port,()=>{
    console.log(`http:localhost:${port}`);
});
