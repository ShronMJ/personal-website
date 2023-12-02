import express from "express";
import bodyParser from "body-parser";
//import {dirname} from "path";
//import {fileURLToPath} from "url";

//const dir_name = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render("index.ejs");
})

app.get('/expertise',(req,res)=>{
    res.render("index.ejs",{content:"expertise"});
})

app.get('/education',(req,res)=>{
    res.render("index.ejs",{content:"education"});
})

app.get('/experience',(req,res)=>{
    res.render("index.ejs",{content:"experience"});
})

app.get('/project',(req,res)=>{
    res.render("index.ejs",{content:"project"});
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})