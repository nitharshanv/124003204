import logo from './logo.svg';
import './App.css';

function App() {
  const handlesubmit = (event) => {
    event.preventDefault();
    const [a, b, c, d] = document.forms[0]

  }
  const arr = [
    {
      "_id": "64f41b1ac5709f6e62bb2d6f",
      "trainname": "Rev",
      "trainnumber": 9244,
      "deptime": {
        "hours": 19,
        "minutes": 41,
        "seconds": 2
      },
      "seatsavail": {
        "sleeper": 9,
        "AC": 2
      },
      "delayedby": 34
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d70",
      "trainname": "Dr",
      "trainnumber": 1030,
      "deptime": {
        "hours": 3,
        "minutes": 10,
        "seconds": 18
      },
      "seatsavail": {
        "sleeper": 6,
        "AC": 4
      },
      "delayedby": 21
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d71",
      "trainname": "Mr",
      "trainnumber": 9085,
      "deptime": {
        "hours": 10,
        "minutes": 50,
        "seconds": 3
      },
      "seatsavail": {
        "sleeper": 5,
        "AC": 0
      },
      "delayedby": 45
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d72",
      "trainname": "Dr",
      "trainnumber": 5655,
      "deptime": {
        "hours": 11,
        "minutes": 56,
        "seconds": 57
      },
      "seatsavail": {
        "sleeper": 1,
        "AC": 6
      },
      "delayedby": 13
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d73",
      "trainname": "Mrs",
      "trainnumber": 2868,
      "deptime": {
        "hours": 17,
        "minutes": 40,
        "seconds": 3
      },
      "seatsavail": {
        "sleeper": 7,
        "AC": 10
      },
      "delayedby": 13
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d74",
      "trainname": "Dr",
      "trainnumber": 8994,
      "deptime": {
        "hours": 8,
        "minutes": 44,
        "seconds": 55
      },
      "seatsavail": {
        "sleeper": 6,
        "AC": 8
      },
      "delayedby": 5
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d75",
      "trainname": "Mrs",
      "trainnumber": 2692,
      "deptime": {
        "hours": 4,
        "minutes": 31,
        "seconds": 27
      },
      "seatsavail": {
        "sleeper": 7,
        "AC": 8
      },
      "delayedby": 58
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d76",
      "trainname": "Ms",
      "trainnumber": 4397,
      "deptime": {
        "hours": 11,
        "minutes": 6,
        "seconds": 32
      },
      "seatsavail": {
        "sleeper": 2,
        "AC": 1
      },
      "delayedby": 14
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d77",
      "trainname": "Mrs",
      "trainnumber": 6325,
      "deptime": {
        "hours": 13,
        "minutes": 11,
        "seconds": 44
      },
      "seatsavail": {
        "sleeper": 10,
        "AC": 3
      },
      "delayedby": 38
    },
    {
      "_id": "64f41b1ac5709f6e62bb2d78",
      "trainname": "Mr",
      "trainnumber": 3401,
      "deptime": {
        "hours": 4,
        "minutes": 17,
        "seconds": 12
      },
      "seatsavail": {
        "sleeper": 9,
        "AC": 4
      },
      "delayedby": 12
    }
  ]
  
  const handlesubmit1=(e)=>
  {
    e.preventDefault();
    const [trainnum]=document.forms[1]
    alert(trainnum.value)
    let id=trainnum.value
    let str="http://localhost:3001/trains/train/"+id.toString();
    async function fin(){
      const response=await fetch(str,{
        method:'POST',
        body: JSON.stringify(['help']),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(response.ok){
        const data = await response.body
        console.log(data.JSON)
      }
    }
    fin();
    
  }
  
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>

        <input name='companyName' type='text' placeholder='companyname' /><br />
        <input name='ownername' type='text' placeholder='ownername' /><br />
        <input name='rollno' type='text' placeholder='rollno' /><br />
        <input name='ownermail' type='text' placeholder='ownermail' /><br />
        <input name='accesscode' type='text' placeholder='accesscode' /><br />
        <input type='submit' />

      </form>
      <section>
        <table>
          <tr>
            <th>trainname</th>
            <th>train number</th>
            <th>time</th>
            <th>number of sleeper seats</th>
            <th>number of acseats</th>
            <th>delay time</th>

          </tr>
          {

            arr.map((data,index) => (
             
                <tr key={index}>
                  <td>{data.trainname}</td>
                  <td>{data.trainnumber}</td>
                  <td>{data.deptime.hours}:{data.deptime.minutes}:{data.deptime.seconds}</td>
                  <td>{data.seatsavail.sleeper}</td>
                  <td>{data.seatsavail.AC}</td>
                  <td>{data.delayedby}</td>
                </tr>))
            


            }
        </table>
        <form onSubmit={handlesubmit1}>
          <input type='number' placeholder='train number' /><br/>
          <input type='submit'/>
        </form>
      </section>

    </div>
  );
}

export default App;
