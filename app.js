const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use((req,res,next)=>{
var date= new Date().getDay();
var time = new Date().getHours();
console.log(time)
if((1<= date) && (date <=5)&& (9<=time) && (time <=17)){
  next()
}
else{
    res.render("404")
}
})

app.get("/",(req,res)=>{
    res.render("homepage")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
   

});
app.post("/contact",(req,res)=>{
    res.statusCode ===200 && res.render("success",{data:req.body})
})


app.get("/services",(req,res)=>{
    res.render("services")
})

app.use((req,res)=>{
    res.render("failure")
  })

app.listen(5000,()=>{
    console.log("the server is running on port 5000")
})