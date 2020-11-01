 const express=require('express');
 const app=express();
 const PORT=8080;
const path=require('path')
const bodyParser=require('body-parser');
const sendMail=require('./mail')
//Data Parsing
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());

app.post('/email',(req,res)=>{
    //Send email here
    const {subject,email,text}=req.body;
    sendMail(email,subject,text,function(err,data){
        if(err){
            return res.status(500).json({
                message:'Internal Error'
            })
        }
        else{
            return res.json({message:'Email Sent'})
        }
    });
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})







 app.listen(PORT,()=>{
     console.log('Server Started')
 })