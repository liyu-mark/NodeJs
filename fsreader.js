var fs = require("fs");

function fileRreader(path){
    
    return new Promise(function(reslove,reject){
        fs.readFile(path,"utf-8",(err, data) => {
            if (err){
                reject(err);
            }else{
                reslove(data);
            }
          });
    }).then((data)=>{
        console.log('成功'+data)
    },(err)=>{
        console.log('失败'+err)
    })
}

fileRreader("hello.txt")
