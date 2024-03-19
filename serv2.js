const express = require('express')
var alert = require('alert')
const path = require('path')
const port = 8080;
const app = express()
const signup = require('./logindb');
const signupforrecord = require('./signuprecorddb');
const uques = require('./questions');
const alogin = require('./alogindb');
const mongoose=require('mongoose');
const x = require('./public/increment.js');
const calculate = require('./public/calculate');
const result = require('./public/result');
app.use('/pictures', express.static(process.cwd() + '/pictures'));//to embedd images in pug

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = mongoose.connection;

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.render('land.pug')
})
app.get('/adminoruser',(req,res)=>{
  res.render('adminoruser.pug');
})
app.get('/alogin',(req,res)=>{
  res.render('alogin.pug');
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/login', (req, res) => {
    res.render('login.pug')
})
app.get('/signup',(req,res)=>{
  res.render('signup.pug');
})
var arr=[];
var arr2=[];
var newArray=[];
var x_=1;
var useid;
var player;
// app.post('/quizar0',async (req,res)=>{
   
//   // console.log(x_);
//   const find = await uques.findOne({num:1});
//   var category=find.category ;
//   console.log(category);
//   // console.log(find.ques);
//   res.render('university-student-questions.pug',{question:find.ques,message:""});
//   var resp = req.body.response;
  
//   arr[x_]=resp;
//   arr2[x_]=category;
//   // x_ = x.increment();
//   // console.log(resp);
//   x_=2;
// }



  
  

  // )


// app.get('/quizar'),async (req,res)=>{
//   var x_ = x.increment();
//   console.log(x_);
//   find = await uques.findOne({num:x_});
//   console.log(find.ques);
// getques=find.ques;
// res.render('university-student-questions.pug',{question:getques});}
app.post('/quizar0',async (req,res)=>{
  
  player = req.body.candidate;
  // console.log(player);
  
  const find = await uques.findOne({num:1});
  // var category=find.category ;
  // console.log(category);
  // console.log(find.ques);
  res.render('university-student-questions.pug',{question:find.ques,num:x_});
  var resp = req.body.response;
  
  arr[x_]=resp;
  // arr2[x_]=category;
  
  // console.log(resp);

}
  )
 //********************************************************* */
app.post('/quizar',async (req,res)=>{
  
  console.log(player);
  if(x_ !== -1)
  {const find = await uques.findOne({num:x_});
  var category=find.category ;
  // console.log(category);
  // console.log(find.ques);
  res.render('university-student-questions.pug',{question:find.ques,num:x_});
  var resp = req.body.response;
  
  arr[x_]=resp;
  arr2[x_]=category;
  x_ = x.increment();
  // console.log(resp);
}
else
{res.render('thankyou.pug');
// console.log(arr);
x_=1;}


  
  }

  )

  app.get('/result',(req,res)=>
  {
    // console.log(sortedDesc);
  
  
  var sortedDesc=result.result(arr,arr2,newArray);
  const firstkey = Array.from(sortedDesc.keys())[0];
  const firstvalue = Array.from(sortedDesc.values())[0];

  const secondkey = Array.from(sortedDesc.keys())[1];
  const secondvalue = Array.from(sortedDesc.values())[1];

  const thirdkey = Array.from(sortedDesc.keys())[2];
  const thirdvalue = Array.from(sortedDesc.values())[2];

  const forthkey = Array.from(sortedDesc.keys())[3];
  const forthvalue = Array.from(sortedDesc.values())[3];

 
  res.render('result.pug',{oneval:firstkey,
    onekey:firstvalue,
    twoval:secondkey,
    twokey:secondvalue,
    threeval:thirdkey,
    threekey:thirdvalue,
    fourval:forthkey,
    fourkey:forthvalue,
    name:player});
  // console.log(arr3);
  const record={
    id:useid,
    name:player,
    recordfirst:firstkey,
    recordsecond:secondkey,
    recordthird:thirdkey,
    recordforth:forthkey,
  }
  signupforrecord.insertMany([record]);

})
app.get('/previousrecord',async(req,res)=>{
  var data = await signupforrecord.find({id:useid});
  res.render('previous.pug',{data})
  // console.log(data);
})

//**********************************************************

  app.get('/squizar',async (req,res)=>{
  
    var x_ = x.increment();
    // console.log(x_);
    if(x_ != -1)
    {const find = await uques.findOne({num:x_});
    // console.log(find.ques);
    
    
    res.render('student-questions.pug',{question:find.ques,message:""});
    var resp = req.body.response;
    uques.updateOne({num:x_},{$set: {response:resp}})
    console.log(resp);
  }
  else
  res.render('result.pug');
    
    }
    )
  

   
    app.get('/hwquizar',async (req,res)=>{
  
      var x_ = x.increment();
      // console.log(x_);
      if(x_ != -1)
      {const find = await uques.findOne({num:x_});
      // console.log(find.ques);
      
      
      res.render('house-wife-question.pug',{question:find.ques,message:""});
      var resp = req.body.response;
      uques.updateOne({num:x_},{$set: {response:resp}})
      console.log(resp);
    }
    else
    res.render('thankyou.pug');
      
      }
      )
    
      app.get('/wpquizar',async (req,res)=>{
  
        var x_ = x.increment();
        // console.log(x_);
        if(x_ != -1)
        {const find = await uques.findOne({num:x_});
        // console.log(find.ques);
        
        
        res.render('working-prof-que.pug',{question:find.ques,message:""});
        var resp = req.body.response;
        uques.updateOne({num:x_},{$set: {response:resp}})
        console.log(resp);
      }
      else
      res.render('thankyou.pug');
        
        }
        )

        app.get('/hsquizar',async (req,res)=>{
  
          var x_ = x.increment();
          // console.log(x_);
          if(x_ != -1)
          {const find = await uques.findOne({num:x_});
          // console.log(find.ques);
          
          
          res.render('high-student-questions.pug',{question:find.ques,message:""});
          var resp = req.body.response;
          uques.updateOne({num:x_},{$set: {response:resp}})
          console.log(resp);
        }
        else
        res.render('thankyou.pug');
          
          }
          )
        
      

// app.get('/hstudent',(req,res)=>{
//   res.render('high-student-questions.pug',(req,res)=>{parameters={
//   nam:req.body.name
//   }});
// })
// app.get('/student',(req,res)=>{
//   res.render('student-questions.pug');
// })
// app.get('/workprofs',(req,res)=>{
//   res.render('workprofs-questions.pug');
// })
// app.get('/housew',(req,res)=>{
//   res.render('housew-questions.pug');
// })


app.post('/signup',async(req,res)=>{
  const signupdata={
    id: req.body.id,
    pass: req.body.pass,
    name: req.body.name,
    age: req.body.age,
    type: req.body.type,
  }
  const signupdataforrecord={
    id:req.body.id,
    name:"",
    record:""
  }
  useid = req.body.id;
    
  if(req.body.type==='student')
      res.render('student.pug')
      if(req.body.type==='high school student')
      res.render('high-student.pug')
      if(req.body.type==='university level student')
      res.render('university-student.pug')
      if(req.body.type==='working proffessional')
      res.render('working-proffessional.pug')
      if(req.body.type==='house wife')
      res.render('house-wife.pug')

  
  signup.insertMany([signupdata]);
  

  
 
  
})
app.post('/login',async(req,res)=>{
  try{
    const check = await signup.findOne({id:req.body.id});
    useid = req.body.id;
    if(check.pass === req.body.pass)
    {
      if(check.type==='student')
      res.render('student.pug')
      if(check.type==='high school student')
      res.render('high-student.pug')
      if(check.type==='university level student')
      res.render('university-student.pug')
      if(check.type==='working proffessional')
      res.render('working-proffessional.pug')
      if(check.type==='house wife')
      res.render('house-wife.pug')
      
    }
    else{
      
      res.render('login.pug',{message:"wrong id/password"});
    }
  }
  catch{
    res.render('login.pug',{message:"wrong id/password"});

  }
  
  
})

app.post('/alogin',async(req,res)=>{
  try{
    const check = await alogin.findOne({id:req.body.id});
    if(check.password === req.body.pass)
    {
      res.render('dev.pug');
      
    }
    else{
      
      res.send("Wrong password");
    }
  }
  catch{
    res.send('wrong details');

  }
  
  
})

// let linenumber=0;

//   for(let i=0;i<4;i++)
// {
//     nthline(rowIndex, filePath).then(line => console.log(line))
//     linenumber++;
// }


// app.get('/student', (req, res) => {
//     parameters={
//         ques:line

//     }
//     res.render('student.pug',parameters)
//   })



app.listen(port,()=>{
    console.log("server started successfully");
})