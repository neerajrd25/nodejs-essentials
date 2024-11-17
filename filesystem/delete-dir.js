const fs = require('fs');


fs.readdirSync('your-files/tobedeleted').forEach((file)=>{

    fs.unlinkSync('your-files/tobedeleted/'+file);
})

fs.rmdirSync('your-files/tobedeleted')