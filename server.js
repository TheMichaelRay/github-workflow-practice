// Initial commit
// here's where code goes
var express = require('express')
var logger  = require('morgan')
var app = express()

app.listen(3000, function(err){
  if(err) return console.log(err)
  console.log("Server running on 3000. Huzahhh. lolz.")
})
