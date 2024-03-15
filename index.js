const session = require("express-session")
const express = require("express")
const app = express();

const Port = 8080;

app.use(session({secret:"myDay"}));

app.get('/',(req,res)=>{
    if(req.session.user_visit){
        req.session.user_visit++;
        res.send("You visited this site "+ req.session.user_visit + " times")
    }else{
    req.session.user_visit = 1;
    res.send("Hiii , visiting this site first time")
}
});


// // set session
// app.get('/',(req,res)=>{
//     req.session.username = "John Doe";
//     res.send("sessions are set")
// });
// // get-session
// app.get('/get-session',(req,res)=>{
//     res.send("your session name is : "+req.session.username);
// });


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
    });