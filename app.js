const express = require("express");         //import
const https = require("https")              //function to import the https
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get("/", function(req,res){        // call back fn
    https.get("https://production-tw-frontend.thesportstak.com//v1/feed?page=1&limit=25&tags=Soccer_750", function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const sportData = JSON.parse(data)
          
            
            parseResponse(sportData)
            const temp = JSONArray.sportData; 
        })
    })
    res.send("server is running");
})

app.listen(8080, function(){
    console.log("Server is running ")
})

function parseResponse(response){
    console.log(response)
}

