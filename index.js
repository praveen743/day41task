const express = require("express");
const app = express();
 
app.use(express.json());

var rooms =[];

app.post("/create-room",function(req,res){
    var roomdata = req.body;
    req.body.id = rooms.length + 1;
    rooms.push(roomdata);
    res.json(rooms);
});


var customers=[];

app.post("/bookroom",function(req,res){
    var book = req.body;
    req.body.id = customers.length + 1;
    customers.push(book);
    res.json(customers);
})

app.get('/bookedcustomers',function(res,res){
    res.json(customers);
})

app.listen(3002);
