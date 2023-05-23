const express = require('express')

const app = express();

// app.use((req,res,next)=>{
//     console.log("first middleware");
//     next()
// })
// app.use((req,res)=>{
//     console.log("second middleware");
// })
app.use('/users',(req,res)=>{
    res.send('<ul><li>user1:rijas</li><li>user2:naseeha</li></ul>');
})
app.use('/',(req,res)=>{
    res.send("welcome to home page")
})

app.listen(3000, () => {
    console.log("server listening on port 3000");
})