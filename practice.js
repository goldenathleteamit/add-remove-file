const fs=require('fs');

const input=process.argv;
if(input[2]=='add'){
fs.writeFileSync(input[3],input[4]);        //Here input[3] is file name and input[4] is text inside that file
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}