var fs = require("fs");
var fsreader = require("./fsreader");
var fswrite = require("./fswrite");
console.log(fsreader)
fs.readdir("./../Node",function(err,files){
    if(err){
        console.log(err)
    }else{
        files.forEach(function(file,index){
            console.log(file,index)
            fsreader.fileRreader("./../Node/"+file)
        })
    }
})
