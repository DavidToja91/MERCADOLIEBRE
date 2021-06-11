let express = require('express');
let app = express();
let path = require ('path');
let  port = 3030;

app.use(express.static('public'));

app.listen (port,() => console.log(`Your Port is Running ${port}\n http://localhost:${port}`));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})