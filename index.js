const express = require("express")
const app = express();

app.get("/", function (req, res) {

    var data = [
      { "name": "ABCD", "mobile": "9322840966", "email": "abcd@gmail.com" },
     { "name": "PQRS", "mobile": "9422280233","email": "pqrs@gmail.com" },
      {"name":"xyz", "mobile":"766767646","email":"xyz@gmail.com" }
    ];

    obj = { "user_list": data };
    res.render("home.ejs",obj);
    
});



app.listen(2000);
