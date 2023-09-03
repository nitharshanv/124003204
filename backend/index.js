import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express();
const port = 3001;
const url = 'mongodb://127.0.0.1:27017/'
const db_name = 'train'
app.use(express.json());

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log("Connected to MongoDB");
  });
const db = client.db(db_name);
const collection = db.collection('trains');

const x = await collection.find({}).toArray()
console.log(x)
//insert

app.use(cors());


function findtheid(id){
  console.log(typeof id)
  for(let i=0;i<x.length;i++){
   //console.log(x[i]['trainnumber'])
   if(x[i]['trainnumber']===parseInt(id))
   {
    console.log(x[i])
    return x[i];

   }
    }
  }


app.post('/trains/train/:id',(req,res)=>{
  var id= req.params['id'];
  let m=findtheid(id);
  res.send(m)

  //console.log(thetrain)

})



app.post('/register', (req, res) => {
  try{
 var name = req.body['companyName'];
 var emailid = req.body["ownerEmail"];
  var accesscode = req.body["accessCode"];
 var rollno = req.body["rollNo"];
 var oname = req.body['ownerName'];
 var reg = {
    "companyName": name,
    "clientid": "hi-hello",
    "client-secret": "secret_id"
 }
  
  res.send(reg)
}
catch(e){
  console.log(e);
}


});





app.post('/trains', (req, res) => {

 res.send(x)
});

app.listen(port, () => {
  console.log("app listening at port 3001");
});
