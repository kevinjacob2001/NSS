let express=require('express');
let app=express();
let path=require('path');



app.get('/index',function(req, res){
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/contact',function(req, res){
    res.sendFile(path.join(__dirname,'views','contact.html'));
})


app.listen(3000)