import logo from './logo.svg';
import './App.css';
import React, { useState, usePrevious, useEffect } from 'react';


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [myCount, setMyCount] = useState(0);
  const [myCount2, setMyCount2] = useState(0);

  return (
    <div>
      <p>You clicked {myCount} times</p>
      <button onClick={() => setMyCount(myCount + 1)}>
        click me 111
      </button>
  
    </div>
  );
}

class CaloriesTracker extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  Breakfast() {
    this.state = { count: 0 }
    
  }

  render() {
  
    return <div>
      <p>Total Calories {this.state.count}</p>
      <button onClick={() => this.setState({ count: this.state.count + 10 })}>
        +10
      </button>
      <span> {this.state.count} </span>
      <button onClick={() => this.setState({ count: this.state.count - 10 })}>
        -10
      </button>
<br></br>
      <button onClick={() => this.setState({ count: this.state.count + 10 })}>
        +10
      </button>
      <span> {this.state.count} </span>
      <button onClick={() => this.setState({ count: this.state.count - 10 })}>
        -10
      </button>
    </div>
  }
}

// calories tracker

// function CaloriesTracker() {

//   const [myCounter, setMyCounter] = useState(0);
//   const [myCounter2, setMyCounter2] = useState(0);
//   const [myCounter3, setMyCounter3] = useState(0);
//   var totalCalories = myCounter + myCounter2 + myCounter3;
//   function decrementCount10() {
//     setMyCounter(prevCounter => prevCounter - 10)
//   }

//   function incrementCount10() {
//     setMyCounter(prevCounter => prevCounter + 10)
//   }

//   function decrementCount100() {
//     setMyCounter(prevCounter => prevCounter - 100)
//   }

//   function incrementCount100() {
//     setMyCounter(prevCounter => prevCounter + 100)
//   }

//   function decrementCount1000() {
//     setMyCounter(prevCounter => prevCounter - 1000)
//   }

//   function incrementCount1000() {
//     setMyCounter(prevCounter => prevCounter + 1000)
//   }

//  function decrement2Count10() {
//     setMyCounter2(prevCounter2 => prevCounter2 - 10)
//   }

//   function increment2Count10() {
//     setMyCounter2(prevCounter2 => prevCounter2 + 10)
//   }

//   function decrement2Count100() {
//     setMyCounter2(prevCounter2 => prevCounter2 - 100)
//   }

//   function increment2Count100() {
//     setMyCounter2(prevCounter2 => prevCounter2 + 100)
//   }

//   function decrement2Count1000() {
//     setMyCounter2(prevCounter2 => prevCounter2 - 1000)
//   }

//   function increment2Count1000() {
//     setMyCounter2(prevCounter2 => prevCounter2 + 1000)
//   }

//   function decrement3Count10() {
//     setMyCounter3(prevCounter3 => prevCounter3 - 10)
//   }

//   function increment3Count10() {
//     setMyCounter3(prevCounter3 => prevCounter3 + 10)
//   }

//   function decrement3Count100() {
//     setMyCounter3(prevCounter3 => prevCounter3 - 100)
//   }

//   function increment3Count100() {
//     setMyCounter3(prevCounter3 => prevCounter3 + 100)
//   }

//   function decrement3Count1000() {
//     setMyCounter3(prevCounter3 => prevCounter3 - 1000)
//   }

//   function increment3Count1000() {
//     setMyCounter3(prevCounter3 => prevCounter3 + 1000)
//   }

//   return (
//     <div>
//       <h3>Breakfast Calories</h3>
//       <button onClick={decrementCount1000}>-1000</button>
//       <button onClick={decrementCount100}>-100</button>
//       <button onClick={decrementCount10}>-10</button>
//       <span> {myCounter} </span> 
//       <button onClick={incrementCount10}>+10</button>
//       <button onClick={incrementCount100}>+100</button>
//       <button onClick={incrementCount1000}>+1000</button>
//       <h3>Lunch Calories</h3>
//       <button onClick={decrement2Count1000}>-1000</button>
//       <button onClick={decrement2Count100}>-100</button>
//       <button onClick={decrement2Count10}>-10</button>
//       <span> {myCounter2} </span> 
//       <button onClick={increment2Count10}>+10</button>
//       <button onClick={increment2Count100}>+100</button>
//       <button onClick={increment2Count1000}>+1000</button>
//       <h3>Dinner Calories</h3>
//       <button onClick={decrement3Count1000}>-1000</button>
//       <button onClick={decrement3Count100}>-100</button>
//       <button onClick={decrement3Count10}>-10</button>
//       <span> {myCounter3} </span> 
//       <button onClick={increment3Count10}>+10</button>
//       <button onClick={increment3Count100}>+100</button>
//       <button onClick={increment3Count1000}>+1000</button>
//       <h4>Total</h4>
//       <span>{totalCalories}</span>
//     </div>
//   );
// }











// class ExampleClass extends React.Component {
//   constructor() {
//     super()
//     this.state = { count: 0 }
//   }
//   render() {
//     return <div>
//       <p>You clicked {this.state.count} times</p>
//       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         Click mee
//       </button>
//     </div>
//   }
// }


//Timer
class Timer extends React.Component {
  // Declare a new state variable, which we'll call "count"
  constructor(props) {
    super(props)
    this.state = { time: props.seconds, complete:false, interval: undefined}
  }
  
  componentDidMount() {
    this.setState({
    interval: setInterval(()=> {
    if(this.state.time > 0) {

      this.setState({ time: this.state.time - 1 })
    } else{
        this.setState({complete: true})
        clearInterval(this.state.interval)
    }
  }
    , 1000)
})
  }

  render() {
    let minutes = Math.floor(this.state.time / 60)
    let seconds = this.state.time - minutes * 60
  return (
    <div>
      {!this.state.complete ?
      
      <p>You have {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, "0")} seconds left</p>
        :
        <p>Timer done!</p>
      }
    </div>
  );
}
}












// Page 1
function GuestGreeting(props) {
  return <>
  <h1>Please sign up.</h1>
    <input id="input" onKeyUp={(val) => 
        props.setUsername(document.getElementById("input").value)} ></input>
  </>
}

// Page 2
function UserGreeting(props) {
  return (<>
  <h1>Welcome back, {props.username}!</h1>
  {/* <Timer seconds={90}></Timer>
  <Example></Example> */}
  {/* <ExampleClass></ExampleClass> */}
  
  </>)
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting setLoggedIn={props.setLoggedIn} username={props.username} />;
  }
  return <GuestGreeting setLoggedIn={props.setLoggedIn} setUsername={props.setUsername} />;
}


// Page 3 
function Calories1(props) {
  return <>
  <h1>Calories</h1> 
  <CaloriesTracker></CaloriesTracker>
  </>
}

// Page 4 
function Yoga(props) {
  return <h1>Calendar</h1>;
  
}






function App() {
  let exerciseList = [
    { name: "home", type: "duration"},
    { name: "calories", type: "twooo"},
    { name: "yoga", type: "yoga"},
    { name: "Usergreeting", type: "Usergreeting"},
  ]

  let [currentExcercise, setCurrentExcercise] = useState(undefined)
  let currentScreen 
  if (currentExcercise === undefined) {
    currentScreen = <>
     <h1>Welcome to GymShare</h1>
     <p>This app includes</p>
    <p><button onClick={() => setCurrentExcercise(exerciseList[0])}>Continue</button> </p>
    
    
    
    </>
  } 
  
  else if (currentExcercise.type === "duration") {
    currentScreen = <>
    <GuestGreeting name={currentExcercise.name} ></GuestGreeting> 
    <button onClick={() => setCurrentExcercise(exerciseList[3])}>Sign In</button> 
    </>
  } 

  else if (currentExcercise.type === "twooo") {
    currentScreen = <>
    <Calories1 name={currentExcercise.name} ></Calories1> 
    <button onClick={() => setCurrentExcercise(exerciseList[3])}>Return</button>
    </>
  } 

  else if (currentExcercise.type === "yoga") {
    currentScreen = <>
    <Yoga name={currentExcercise.name} ></Yoga> 
    <button onClick={() => setCurrentExcercise(exerciseList[3])}>Return</button>
    </>
  } 

  else  {
    currentScreen = <>
    <UserGreeting name={currentExcercise.name}></UserGreeting>
    <p>
      <button onClick={() => setCurrentExcercise(exerciseList[1])}>Calories</button>
      <button onClick={() => setCurrentExcercise(exerciseList[2])}>Calendar</button> 
    </p>
    
    <button onClick={() => setCurrentExcercise(undefined)}>Sign Out</button>
    </>
  }

  return (
    <>
    {currentScreen}
    </>
  );
}

export default App;

