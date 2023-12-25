const mongoose = require('mongoose')

const MenuItem = mongoose.model('MenuItem',{
title : {
    type :String
}, 
description : {
    type : String
    },
prix : {
    type : Number 
} ,
   image : {
    type : String
   } 
})

module.exports=MenuItem