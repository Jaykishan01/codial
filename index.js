const express = require('express');
const app =express();
const port =8000;

app.listen(port,function(err){
    if(err){
        console.log('err',err)
        console.log(`error in euuning the server :${err}`)
    }
    console.log(`server is running in the port  :${port}`)
})