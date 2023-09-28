// express
const express = require("express");
const app = express();

// port
const port = process.env.PORT || 5000;

// users info
const users=[
    {id:1,name:'Oyshi',department:'CSE'},
    {id:2,name:'Habib',department:'CSE'},
    {id:3,name:'Ashikur',department:'CSE'},
    {id:4,name:'Subahan',department:'CSE'},
]
// root api
app.get("/", (req, res) => {
  res.send("User management server is running.........!!!");
});


// user get api
app.get('/users',(res.res)=>{
    res.send(users)
})

// app listen
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
