let express=require('express');
let app=express();
let path=require('path');



app.get('/index',function(req, res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/contact',function(req, res){
    res.sendFile(path.join(__dirname,'contact.html'));
})


app.listen(3000)
