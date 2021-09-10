let express=require('express');
let app= express();
let path=require('path');

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
}
)

app.get('/contact',function(req, res){
    res.sendFile(path.join(__dirname, 'contact.html'))
}
)
console.log(__filename)
app.get('/welcome',function(req, res){
    res.sendFile(path.join(__dirname, 'welcome.html'))
}
)
app.get('*',function(req, res){
    res.send("Error page")
}
)




app.listen(3000)