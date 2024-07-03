import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [messege,setMessege] = useState('');
  const [tip, setTip] = useState('');

  let cals = (e)=>{
    if(weight===0 && height===0)
    {
      alert("Kindly enter the valid data!");
    }
    else{
      let bmi=(weight/ Math.pow(height/100,2));
      setBmi(bmi.toFixed(1));
      e.preventDefault();

      if(bmi<18.5){
        setMessege("You are underweight");
      }
      else if(bmi>=18.5 && bmi<24.9)
      {
        setMessege("You are an healthy weight");
      }
      else if(bmi>=25 && bmi<29.9)
      {
        setMessege("You are overweight");
      }
      else{
        setMessege("You need to start workOut to get under the healthy wieght.");
        setTip("Stay fit Don't Quit!")
      }
    }
  }
  let reload=()=>{
    window.location.reload();
  }
  return (
    <div className='container'>
      <h2>Body Mass Index</h2>
      <form onSubmit={cals}>
      <input type='text' placeholder='Enter the weight' onChange={(e)=>setWeight(e.target.value)} />
      <br></br>
      <input type='text' placeholder='Enter the height' onChange={(event)=>setHeight(event.target.value)} />
      <br></br>
      <button className='btn'>Submit</button>
      <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
      <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{messege}</p>
        <p>{tip}</p>
      </div>
      </form>
    </div>
  );
}

export default App;
