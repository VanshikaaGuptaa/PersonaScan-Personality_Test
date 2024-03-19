// const fs = require("fs");
import * as fs from "../fs";
const filePath = 'student.txt';
const fileContent = fs.readFileSync(filePath, 'utf-8');
const lines = fileContent.split('\n');
const questionelement = document.getElementById("question");
const button = document.getElementById("btn");
let index=0;
function showquestions()
{ 
   let currentquestion=lines[index];
   questionelement.innerHTML=currentquestion;
}
button.addEventListener("click",()=>{
    if(index<10)
    {
        handlebutton();
        console.log(index);
    }
    else{
        console.log("end");
    }
})
function handlebutton()
{
    index++;
    showquestions();
}
