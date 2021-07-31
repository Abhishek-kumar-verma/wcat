let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
let fileArr = [];
let optionArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstchar = inputArr[i].charAt(0);
    if(firstchar=="-"){
        optionArr.push(inputArr[i]);
    } 
    else{
        fileArr.push(inputArr[i]);
    }
}
for(let i=0;i<fileArr.length;i++){
    if(fs.existsSync(fileArr[i])==false){
        console.log("File does not exist");
        return;
    }
}
let content = "";
for(let i=0;i<fileArr.length;i++){
    content = content + fs.readFileSync(fileArr[i])+"\r\n";//try by \n or \r
    

}
//console.log(content.split("\r\n"));// try by \n or \r;
let contentArr = content.split("\r\n");
let isPresent = optionArr.includes("-s");
if(isPresent==true){
    for(let i =1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
    
        }else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    let temp =[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i] !== null){
            temp.push(contentArr[i]);
        }
    }
    contentArr=temp;
    //console.log("temp",temp)

}
let isPresentN= optionArr.includes("-n")
if(isPresentN==true){
    if(optionArr.indexOf("-n")<optionArr.indexOf("-b")|| optionArr.indexOf("-b")==-1){
        for(let i=0;i<contentArr.length;i++){
            contentArr[i]=(i+1)+" "+contentArr[i];
        }
    }
}
let isPresentB = optionArr.includes("-b")
if(isPresentB == true){
    if(optionArr.indexOf("-b")<optionArr.indexOf("-n") || optionArr.indexOf("-n")==-1){
        let counter =1;
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]!=""){
                contentArr[i]=counter+" "+contentArr[i];
                counter++;
            }
        }
    }
}

console.log(contentArr.join("\n"));






//console.log(" content is :"+content);