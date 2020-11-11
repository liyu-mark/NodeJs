var fs = require('fs');
const data = new Uint8Array(Buffer.from('Fuck Univer'));
function fileWriter(url,data){
    return new Promise(function(reslove,reject){
        fs.writeFile(url, data, {flag:'a'},(err) => {
            if (err) {
               reject(err);     
            } else {
               reslove(data);
            }
        });
    }).then((data)=>{
        console.log('成功'+data)
    },(err)=>{
        console.log('成功'+data)
    })
}
//同步进行写入
async function asyncWrite(){
    await fileWriter("hello.txt",data); 
    await fileWriter("hello.txt","this is my kindom"); 
}

asyncWrite()
