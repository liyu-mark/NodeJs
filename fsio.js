var readline = require('readline')
const r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r.on('line',function(line) {
    console.log(line)
})
r.on('close',function(){
    process.exit()
})